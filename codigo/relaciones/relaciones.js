/*
* Crea una conexión entre un arcoiris y muchos colores
* Esta asociación también podría hacerse utilizando simples arreglos
* pero una "Relation" es un concepto un poco más abstracto y queda
* mejor ilustrado con este ejemplo simple.
*/

// Clases
var Arcoiris = Parse.Object.extend('Arcoiris');
var Color = Parse.Object.extend('Color');

// Crear Colores
var colores = [];

var verde = new Color();
verde.set('nombre', 'Verde');
colores.push(verde);

var rojo = new Color();
rojo.set('nombre', 'Rojo');
colores.push(rojo);

var amarillo = new Color();
amarillo.set('nombre', 'Amarillo');
colores.push(amarillo);

// Creamos un nuevo arcoiris
var arcoiris = new Arcoiris();
arcoiris.set('nombre', 'Double Rainbow');

// Nueva promesa
var promise = Parse.Promise.as();

// Comenzamos la creación utilizando promesas
promise.then(function(){
	
	// Primero necesitamos guardar cada color en la base de datos
	
	// Promesa interna para esperar a que guarde cada color
	// antes de continuar
	var innerPromise = Parse.Promise.as();
	
	// underscore.js
	_.each(colores, function(color){
		innerPromise = innerPromise.then(function(){
			// Guardamos cada color en la BD
			return color.save().then(function(){
				console.log('Color Creado');
			});
		});
	});
	
	return innerPromise;
	
}).then(function(){
	// Guardamos el Arcoiris
	return arcoiris.save().then(function(){
		console.log('Arcoiris Creado');
	});
}).then(function(){
	// Ahora cada color y arcoiris tienen objectId
	// por que se han guardado en la BD.	
	// Se puede implementar la relacion Arcoiris - Colores
	var relacionColoresArcoiris = arcoiris.relation('colores');
		
	_.each(colores, function(color){
		// Agregamos el color a la relaciones 'colores' de arcoiris
		relacionColoresArcoiris.add(color);
		
		// Por cada color incrementamos el contador de colores del arcoiris
		arcoiris.increment('cantidadColores');
	});
	
	// Guardamos nuestro arcoiris con todos sus colores
	// no es necesario guardar relacionColoresArcoiris
	// por que solo es una referencia a la relacion colores de arcoiris
	
	return arcoiris.save().then(function(){
		console.log('Colores añadidos al arcoiris');
	});
	
}).then(function(){
	// Verificamos que todos los colores esten guardados en el arcoiris
	// haciendo una consulta
	
	// Obtenemos la relacion
	var relacionColoresArcoiris = arcoiris.relation('colores');
	
	// Ahora creamos una query para obtener los objetos de la relacion
	var query = relacionColoresArcoiris.query();
	
	return query.find().then(function(colores){
		// Mostramos todos los colores
		console.log('Colores de ' + arcoiris.get('nombre'));
		_.each(colores, function(color){
			console.log('Color: ' + color.get('nombre'));
		});
	});
}).then(function(){
	console.log('Todo OK');
}, function(error){
	console.error(error.message);
});


