function importar() {
	var Expositor = Parse.Object.extend('Expositor');
	var Tema = Parse.Object.extend('Tema');
	
	var expositor1 = new Expositor();
	var expositores = [expositor1];
	
	var tema1 = new Tema();
	var tema2 = new Tema();
	var tema3 = new Tema();
	
	var temas = [tema1, tema2, tema3];
	
	var temasParaExpositor = new Object();
	
	temasParaExpositor['Policarpo'] = [tema1];
	temasParaExpositor['Juanin Juan Jarris'] = [tema3, tema2];
	
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

// Fin del script para importar