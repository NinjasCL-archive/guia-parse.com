/*
* El siguiente código demuestra el uso de promesas
* para guardar objetos en Parse.com usando Javascript
* sirve tanto para el SDK de Javascript como CodeCloud
*/

// Nombres
var names = ['Camilo', 'Marcela', 'Francisco', 'Alison', 'Jason', 'Daniela', 'Michael', 'Evelyn'];

// Clase
var Person = Parse.Object.extend('Person');

// Creo una nueva promesa
var promise = Parse.Promise.as();

// Inicio el Proceso 
promise.then(function(){
	// Creo una Promesa Interna
	var innerPromise = Parse.Promise.as();
		
	// Usando underscore.js
	_.each(names, function(personName){
		
		// Creo un nuevo objeto del tipo Person
		var person = new Person();
		
		// Le asigno la propiedad de fullName
		person.set('fullName', personName);
		
		// Extiendo la Promesa
		innerPromise = innerPromise.then(function(){
			
			// Guardo el objeto una vez que el anterior se ha guardado
			// El método save() devuelve una promesa
			return person.save().then(function(){
				console.log('Persona Creada');
			});
		});
	});
	
	// Devuelvo una nueva promesa
	return innerPromise;
}).then(function(){
	// Éste código se ejecuta luego de guardar todos los nombres
	console.log('Todo Creado');
}, function(error){
	// Éste código se ejecuta si hubo un error
	console.error(error.message);
});

// Fin del código