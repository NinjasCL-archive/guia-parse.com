//
//  CCTemaTableViewController.h
//  CodeCamp2014
//
//  Created by iOS Dev on 26-04-14.
//  Copyright (c) 2014 CodeCamp. All rights reserved.
//

#import <UIKit/UIKit.h>

#import "CCTema.h"
#import "CCExpositor.h"

@interface CCTemaTableViewController : UITableViewController

// Esta variable esta en el Storyboard
@property (nonatomic) BOOL esViernes;

@property (nonatomic, strong) NSArray * temasExpositor;

@property (nonatomic, strong) CCExpositor * expositor;

@end
