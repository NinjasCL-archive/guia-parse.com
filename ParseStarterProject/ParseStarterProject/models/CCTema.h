//
//  CCTema.h
//  CodeCamp2014
//
//  Created by iOS Dev on 26-04-14.
//  Copyright (c) 2014 CodeCamp. All rights reserved.
//

#import <UIKit/UIKit.h>

@class CCExpositor;

// Tipo Tema General
extern NSString * const kCCTipoTemaGeneral;

@interface CCTema : PFObject<PFSubclassing>

@property (nonatomic, strong) NSString * descripcion;

@property (nonatomic, strong) NSString * ubicacion;

@property (nonatomic, strong) NSString * tipo;

@property (nonatomic, strong) NSString * horaInicio;

@property (nonatomic, strong) NSString * horaFin;

@property (nonatomic, strong) NSString * fecha;

@property (nonatomic, strong) CCExpositor * expositor;


+ (void) buscarTemasParaElDiaViernes : (BOOL) esViernes conBlock:(PFArrayResultBlock) resultBlock;
@end
