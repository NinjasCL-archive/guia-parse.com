//
//  CCTemaGeneralCell.m
//  CodeCamp2014
//
//  Created by iOS Dev on 26-04-14.
//  Copyright (c) 2014 CodeCamp. All rights reserved.
//

#import "CCTemaGeneralCell.h"

@implementation CCTemaGeneralCell

- (void) iniciarConTema: (CCTema *) tema {
    self.descripcion.text = tema.descripcion;
    
    self.hora.text = [NSString stringWithFormat:@"%@ - %@", tema.horaInicio, tema.horaFin];
    
    self.tema = tema;
}

@end
