//
//  CCExpositor.h
//  CodeCamp2014
//
//  Created by iOS Dev on 26-04-14.
//  Copyright (c) 2014 CodeCamp. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface CCExpositor : PFObject<PFSubclassing>

@property (nonatomic, strong) NSString * nombre;

@property (nonatomic, strong) NSString *especialidad;

@property (nonatomic, strong) NSString * bio;

@property (nonatomic, strong) NSString * twitter;

@property (nonatomic, strong) NSString * linkedIn;

@property (nonatomic, strong) NSArray * temas;


+ (void) buscarTodosLosExpositoresConBlock:(PFArrayResultBlock) resultBlock;
@end
