//
//  CCExpositor.m
//  CodeCamp2014
//
//  Created by iOS Dev on 26-04-14.
//  Copyright (c) 2014 CodeCamp. All rights reserved.
//

#import "CCExpositor.h"
#import <Parse/PFObject+Subclass.h>

@implementation CCExpositor
@dynamic nombre;
@dynamic especialidad;
@dynamic bio;
@dynamic twitter;
@dynamic linkedIn;
@dynamic temas;

+ (NSString *) parseClassName {
    return @"Expositor";
}

+ (void) buscarTodosLosExpositoresConBlock:(PFArrayResultBlock) resultBlock {
    
    PFQuery * query = [CCExpositor query];
    
    [query orderByAscending:@"nombre"];
    
    [query includeKey:@"temas"];
    
    [query findObjectsInBackgroundWithBlock:^(NSArray *objects, NSError *error) {
    
        resultBlock(objects, error);
    }];
}
@end
