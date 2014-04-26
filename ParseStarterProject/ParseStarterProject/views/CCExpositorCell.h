//
//  CCExpositorCell.h
//  CodeCamp2014
//
//  Created by iOS Dev on 26-04-14.
//  Copyright (c) 2014 CodeCamp. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "CCExpositor.h"

@interface CCExpositorCell : UITableViewCell

@property (strong, nonatomic) CCExpositor * expositor;

@property (weak, nonatomic) IBOutlet UILabel *nombre;

@property (weak, nonatomic) IBOutlet UILabel *twitter;

@property (weak, nonatomic) IBOutlet UILabel *especialidad;

@property (weak, nonatomic) IBOutlet UILabel *bio;

- (void) iniciarConExpositor : (CCExpositor *) expositor;
@end
