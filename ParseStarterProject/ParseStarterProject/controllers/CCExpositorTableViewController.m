//
//  CCExpositorTableViewController.m
//  CodeCamp2014
//
//  Created by iOS Dev on 26-04-14.
//  Copyright (c) 2014 CodeCamp. All rights reserved.
//

#import "CCExpositorTableViewController.h"

#import "CCExpositorCell.h"

#import "CCTemaTableViewController.h"

@interface CCExpositorTableViewController ()
@property (nonatomic, strong) NSArray * expositores;

@property (nonatomic, strong) CCExpositor * expositorSeleccionado;


@end

@implementation CCExpositorTableViewController

- (void) setExpositores:(NSArray *)expositores {
    _expositores = expositores;
    
    [self.tableView reloadData];
}


- (void) viewWillAppear:(BOOL)animated {
    if (self.expositor) {
        [self iniciarConExpositor];
    } else {
        [self iniciarConExpositores];
    }
}

- (void) iniciarConExpositor {
    self.navigationItem.title = self.expositor.nombre;
    
    self.expositores = @[self.expositor];
}

- (void) iniciarConExpositores {
    
    [CCExpositor buscarTodosLosExpositoresConBlock:^(NSArray *objects, NSError *error) {
        
        if (!error) {
            self.expositores = objects;
        }
    }];
}

#pragma mark - TableView
- (NSInteger) tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    return self.expositores.count;
}

- (CGFloat) tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath {
    return 170;
}

- (UITableViewCell *) tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    
    static NSString * CellIdentifier = @"ExpositorCell";
    
    CCExpositorCell * cell = [tableView dequeueReusableCellWithIdentifier:CellIdentifier];
    
    CCExpositor * expositor = self.expositores[indexPath.row];
    
    [cell iniciarConExpositor:expositor];
    
    return cell;
}

- (void) tableView:(UITableView *)tableView didSelectRowAtIndexPath:(NSIndexPath *)indexPath {
    
    self.expositorSeleccionado = self.expositores[indexPath.row];
    
    [self performSegueWithIdentifier:@"mostrarTemas" sender:self];
}

#pragma mark - Segue


- (void) prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    
    CCTemaTableViewController * controller = segue.destinationViewController;
    
    controller.temasExpositor = self.expositorSeleccionado.temas;
    
    controller.expositor = self.expositorSeleccionado;
    
}
@end
