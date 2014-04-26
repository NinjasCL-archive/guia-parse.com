//
//  CCExpositorCell.m
//  CodeCamp2014
//
//  Created by iOS Dev on 26-04-14.
//  Copyright (c) 2014 CodeCamp. All rights reserved.
//

#import "CCExpositorCell.h"

@implementation CCExpositorCell

- (void) iniciarConExpositor : (CCExpositor *) expositor {
    
    self.nombre.text = expositor.nombre;
    
    self.especialidad.text = expositor.especialidad;
    
    self.bio.text = expositor.bio;
    
    
    self.twitter.text = @"";
    
    if (![expositor.twitter isEqualToString:@""]) {
        
        self.twitter.text = [NSString stringWithFormat:@"@%@", expositor.twitter];
        
    }
    
    self.expositor = expositor;
}

@end
