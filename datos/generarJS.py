#!/usr/bin/python
# -*- coding: utf-8 -*-

# Este es una especie de ETL que transforma los datos de CSV
# para importarlos a Parse usando JavaScript

import csv

# Archivos con los datos
expositores = csv.reader(open('expositores.csv', 'r'), delimiter=';')
temas = csv.reader(open('temas.csv', 'r'), delimiter=';')
expositorTema = csv.reader(open('expositor-tema.csv', 'r'), delimiter=';')

# Comenzamos el inicio de importar.js
importarJS = open('importar/importar.js', 'w')

javascript = '''
function importar() {
	var Expositor = Parse.Object.extend('Expositor');
	var Tema = Parse.Object.extend('Tema');
'''

importarJS.write(javascript)

# Guarda los nombres de los expositores
expositoresVar = []

# Crearemos todos los expositors
for index, expositor in enumerate(expositores):

    # Saltamos los headers
    if index == 0:
        continue
        
    nombre = expositor[0]
    especialidad = expositor[1]
    bio = expositor[2]
    twitter = expositor[3]
    linkedin = expositor[4]
    foto = expositor[5]
        
    varname = 'expositor%d' %(index)
    
    javascript = '''
    
    var %s = new Expositor();
    %s.set('nombre', '%s');
    %s.set('especialidad', '%s');
    %s.set('bio', '%s');
    %s.set('twitter', '%s');
    %s.set('linkedin','%s');
    ''' % (varname, 
    varname, nombre, 
    varname, especialidad, 
    varname, bio, 
    varname, twitter, 
    varname, linkedin 
    )
    
    expositoresVar.append(nombre)
    
    importarJS.write(javascript)

# Generamos la variable expositores
javascript = 'var expositores = ['
importarJS.write(javascript)

for index, expositor in enumerate(expositoresVar):
       index = index + 1
       javascript = 'expositor%d, ' % (index)
       importarJS.write(javascript)

javascript = '];'
importarJS.write(javascript)

    
# Crearemos todos los temas
temasVar = []

temasParaExpositor = {}

# iniciar diccionario
for expositor in expositoresVar:
    temasParaExpositor[expositor] = []

for index, tema in enumerate(temas):
    if index == 0:
        continue
        
    varname = 'tema%d' % (index)
    
    ubicacion = tema[0]
    descripcion = tema[1]
    tipo = tema[2]
    expositor =  tema[3]
    fecha = tema[4]
    horaInicio = tema[5]
    horaFin = tema[6]
    
    javascript = '''
    
    var %s = new Tema();
    %s.set('descripcion', '%s');
    %s.set('ubicacion','%s');
    %s.set('tipo','%s');
    %s.set('fecha','%s');
    %s.set('horaInicio','%s');
    %s.set('horaFin','%s');
    
    ''' % (varname, 
    varname, descripcion, 
    varname, ubicacion, 
    varname, tipo, 
    varname, fecha, 
    varname, horaInicio, 
    varname, horaFin)
        
    temasParaExpositor[expositor].append(varname)
    
    temasVar.append(varname)
    
    importarJS.write(javascript)


# Generamos la variable temas
javascript = 'var temas = ['
importarJS.write(javascript)

for index, tema in enumerate(temasVar):
       index = index + 1
       javascript = '\ttema%d,\n' % (index)
       importarJS.write(javascript)

javascript = '];\n\n'
importarJS.write(javascript)

# Creamos las relaciones
javascript = 'var temasParaExpositor = new Object();\n'
importarJS.write(javascript)

for index, expositor in enumerate(expositoresVar):
    javascript = "temasParaExpositor['%s'] = [" % (expositor)
    importarJS.write(javascript)
    
    for index2, tema in enumerate(temasParaExpositor[expositor]):
        javascript = "%s, " % (tema)
        importarJS.write(javascript)
    
    javascript = '];\n\n'    
    importarJS.write(javascript)


# Ahora usamos las promesas para guardar todo
# El codigo final
javascript = '''
	var promise = Parse.Promise.as();
	
	// Comenzamos la importacion
	
	promise.then(function() {
		// Guardar todos los expositores
		var innerPromise = Parse.Promise.as();
		
		_.each(expositores, function(expositor){
			innerPromise = innerPromise.then(function(){
				return expositor.save().then(function(){
					console.log('Expositor Guardado');
				});
			});
		});
		
		return innerPromise;
	}).then(function(){
		// Guardar todos los temas
		
		var innerPromise = Parse.Promise.as();
		
		_.each(temas, function(tema){
			innerPromise = innerPromise.then(function(){
				return tema.save().then(function(){
					console.log('Tema Guardado');
				});
			});
		});
		
		return innerPromise;
		
	}).then(function(){
		// Asociar temas a expositor
		
		var innerPromise = Parse.Promise.as();
		
		_.each(expositores, function(expositor){
			var nombre = expositor.get('nombre');
			var temas = temasParaExpositor[nombre];
			
			expositor.set('temas', temas);
			
			innerPromise = innerPromise.then(function(){
				return expositor.save().then(function(){
					
					console.log('Temas asociados a Expositor');
					
					var innerPromise2 = Parse.Promise.as();
					
					_.each(temas, function(tema){
						tema.set('expositor', expositor);
						
						innerPromise2 = innerPromise2.then(function(){
							return tema.save().then(function(){
								console.log('Expositor Asociado a Tema');
							});
						});
					});
					
					return innerPromise2;
				});
			});
		});
		
		return innerPromise;
		
	}).then(function(){
		console.log('Todo OK');
	}, function(error){
		console.error(error.message);
	});
}
// Fin del Script de Importar
'''

importarJS.write(javascript)
importarJS.close()    
    
    
