//
//  CCTemaCell.m
//  CodeCamp2014
//
//  Created by iOS Dev on 26-04-14.
//  Copyright (c) 2014 CodeCamp. All rights reserved.
//

#import "CCTemaCell.h"

@implementation CCTemaCell

- (void) iniciarConTema: (CCTema *) tema {
    CCExpositor * expositor = tema.expositor;
    
    [expositor fetchIfNeeded];
    
    self.expositor.text = expositor.nombre;
    
    self.ubicacion.text = tema.ubicacion;
    
    self.descripcion.text = tema.descripcion;
    
    self.tipo.text = tema.tipo;
    
    self.hora.text = [NSString stringWithFormat:@"%@ - %@", tema.horaInicio, tema.horaFin];
    
    self.tema = tema;
}

@end
