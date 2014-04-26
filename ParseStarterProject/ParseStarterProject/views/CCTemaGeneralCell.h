//
//  CCTemaGeneralCell.h
//  CodeCamp2014
//
//  Created by iOS Dev on 26-04-14.
//  Copyright (c) 2014 CodeCamp. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "CCTema.h"
#import "CCExpositor.h"

@interface CCTemaGeneralCell : UITableViewCell
@property (nonatomic, strong) CCTema * tema;

@property (weak, nonatomic) IBOutlet UILabel *descripcion;
@property (weak, nonatomic) IBOutlet UILabel *hora;


- (void) iniciarConTema: (CCTema *) tema;
@end
