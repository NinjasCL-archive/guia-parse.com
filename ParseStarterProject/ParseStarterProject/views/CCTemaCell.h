//
//  CCTemaCell.h
//  CodeCamp2014
//
//  Created by iOS Dev on 26-04-14.
//  Copyright (c) 2014 CodeCamp. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "CCTema.h"
#import "CCExpositor.h"

@interface CCTemaCell : UITableViewCell

@property (strong, nonatomic) CCTema * tema;

@property (weak, nonatomic) IBOutlet UILabel *expositor;

@property (weak, nonatomic) IBOutlet UILabel *descripcion;

@property (weak, nonatomic) IBOutlet UILabel *hora;

@property (weak, nonatomic) IBOutlet UILabel *ubicacion;

@property (weak, nonatomic) IBOutlet UILabel *tipo;


- (void) iniciarConTema: (CCTema *) tema;

@end
