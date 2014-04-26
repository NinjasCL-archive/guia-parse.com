//
//  CCTema.m
//  CodeCamp2014
//
//  Created by iOS Dev on 26-04-14.
//  Copyright (c) 2014 CodeCamp. All rights reserved.
//

#import "CCTema.h"
#import <Parse/PFObject+Subclass.h>
@implementation CCTema

NSString * const kCCTipoTemaGeneral = @"General";

@dynamic descripcion;
@dynamic ubicacion;
@dynamic expositor;
@dynamic tipo;
@dynamic horaFin;
@dynamic horaInicio;
@dynamic fecha;

+ (NSString *) parseClassName {
    return @"Tema";
}

+ (void) buscarTemasParaElDiaViernes : (BOOL) esViernes conBlock:(PFArrayResultBlock) resultBlock {
    
    PFQuery * query = [CCTema query];
    
    
    NSString * dia = @"Sábado 26";
    
    if (esViernes)
             dia = @"Viernes 25";
    
    [query whereKey:@"fecha" equalTo:dia];
    
    [query orderByAscending:@"horaInicio"];
    
    [query includeKey:@"expositor"];
    [query includeKey:@"expositor.temas"];
    
    [query findObjectsInBackgroundWithBlock:^(NSArray *objects, NSError *error) {
        resultBlock(objects, error);
    }];
}
@end
