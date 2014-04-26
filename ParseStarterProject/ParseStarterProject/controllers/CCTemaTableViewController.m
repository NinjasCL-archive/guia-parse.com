//
//  CCTemaTableViewController.m
//  CodeCamp2014
//
//  Created by iOS Dev on 26-04-14.
//  Copyright (c) 2014 CodeCamp. All rights reserved.
//

#import "CCTemaTableViewController.h"



#import "CCTemaCell.h"
#import "CCTemaGeneralCell.h"

#import "CCExpositorTableViewController.h"


@interface CCTemaTableViewController ()
@property (nonatomic, strong) NSArray * temas;
@property (nonatomic, strong) CCTema * temaSeleccionado;
@end

@implementation CCTemaTableViewController

- (void) setTemas:(NSArray *)temas {
    _temas = temas;
    [self.tableView reloadData];
}

- (void) viewWillAppear:(BOOL)animated {
    if (self.temasExpositor) {
        [self iniciarConTemasDeExpositor];
    } else {
        [self iniciarConTemasDelDia];
    }
}

- (void) iniciarConTemasDeExpositor {
    
    self.temas = self.temasExpositor;
    
    
    self.navigationItem.title = [NSString stringWithFormat:@"Temas para %@", self.expositor.nombre];
}

- (void) iniciarConTemasDelDia {
    
    if (!self.esViernes) {
        self.navigationItem.title = @"Sábado 26";
    }
    
    [CCTema buscarTemasParaElDiaViernes:self.esViernes conBlock:^(NSArray *objects, NSError *error) {
        
        if (!error) {
            self.temas = objects;
        }
        
    }];
}

// Table View
#pragma mark - Table View
- (CGFloat) tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath {
    
    CCTema * tema = self.temas[indexPath.row];
    
    if ([tema.tipo isEqualToString:kCCTipoTemaGeneral]) {
        return 50;
    }
    
    return 90;
}

- (NSInteger) tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    return self.temas.count;
}

- (UITableViewCell *) tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    
    static NSString * CellIdentifier;
    
    CCTema * tema = self.temas[indexPath.row];
    
    CellIdentifier = @"TemaCell";
    
    if ([tema.tipo isEqualToString:kCCTipoTemaGeneral]) {
        CellIdentifier = @"TemaGeneralCell";
        
        CCTemaGeneralCell * cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier];
        
        [cell iniciarConTema:tema];
        
        cell.userInteractionEnabled  = NO;
        cell.accessoryType = UITableViewCellAccessoryNone;
    
        
        return cell;
    }
    
    CCTemaCell * cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier];
    
    [cell iniciarConTema:tema];
    
    if (self.temasExpositor) {
        cell.userInteractionEnabled  = NO;
        cell.accessoryType = UITableViewCellAccessoryNone;
    }
    
    return cell;
}

- (void) tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
    
    self.temaSeleccionado = self.temas[indexPath.row];
    
    [self performSegueWithIdentifier:@"mostrarExpositor" sender:self];
    
}

#pragma mark - Segue
- (void) prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
 
    CCExpositorTableViewController * controller = segue.destinationViewController;
    
    controller.expositor = self.temaSeleccionado.expositor;
}
@end
