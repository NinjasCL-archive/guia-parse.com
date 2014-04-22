# Relations (Relaciones)
Las relaciones permiten realizar conexiones entre los objetos. Por ejemplo en una aplicación de fotografías se necesita una relación entre el usuario que la tomó y la fotografía.

Existen cuatro formas de construir conexiones en Parse:
* Punteros (ideales para relaciones uno a uno y uno a muchos)
* Arreglos (ideales para relaciones uno a muchos y muchos a muchos)
* Relaciones (ideales para relaciones uno a muchos y muchos a muchos)
* Tablas Join (ideales para relaciones muchos a muchos complejas)

**Nota**
> Para crear exitosamente una relación, ambos objetos deben existir previamente en la base de datos.

**Punteros**
Un puntero es una asociación entre un objeto y otro. Se utiliza normalmente para relaciones simples uno a uno.

Ejemplo:

Un animal pertenece a una familia biológica

```javascript
  
  // Clases
  var Animal = Parse.Object.extend('Animal');
  var Familia = Parse.Object.extend('Familia');
  
  var perro = new Animal();
  perro.id = 'cjaXsd092'; // Objeto que ya existe en BD
  
  var canidos = new Familia();
  canidos.id = 'jfj229Cs';
  
  // Establecemos la relacion de uno a uno
  perro.set('familia', canidos);
  
  perro.save().then(function(){
  		console.log('Relacion Perro - Familia Creada');
  });
```


**Arreglos**
Una asociación de tipo arreglo es ideal para relaciones uno a muchos o muchos a muchos pequeñas, menores a 100 objetos.

Ejemplo:

```javascript

	// Clases
	var Automobil = Parse.Object.extend('Automobil');
	var Rueda = Parse.Object.extend('Rueda');
	
	var chevy = new Automobil();
	chevy.id = 'ci239Hjcs'; // Objetos ya almacenados en BD
	
	// Arreglo de Ruedas
	var ruedas = [];
	
	var rueda = new Rueda();
	rueda.id = 'casdj123';
	ruedas.push(rueda);
	
	var rueda2 = new Rueda();
	rueda2.id = 'rie2939cs';
	ruedas.push(rueda2);
	
	var rueda3 = new Rueda();
	rueda3.id = 'ii929ddaF';
	ruedas.push(rueda3);
	
	var rueda4 = new Rueda();
	rueda4.id = 'k39jdJdss';
	ruedas.push(rueda4);
	
	chevy.set('ruedas', ruedas);
	
	chevy.save().then(function(){
			console.log('Auto con Ruedas Creado');
	});
```

**Relations**
Una Relación es ideal para asociaciones uno a muchos y muchos a muchos. La diferencia con los arreglos es que soportan cantidades mayores de objetos y para acceder a sus datos se necesita hacer un Query (Consulta).

**ver relaciones.js**

**Tablas Join**
Básicamente es una tabla creada específicamente para guardar una relación entre objetos que necesite de mayores detalles. Como es una tabla normal, todas las formas de hacer consultas se aplican.

Ejemplo:
Una persona compra pasajes de bus y se quiere saber la fecha de compra

```javascript
// Tabla Join para relacionar persona con pasaje comprado
var CompraPasaje = Parse.object.extend('CompraPasaje');

// Asumimos que pasaje y persona están almacenados en la BD

var compra = new CompraPasaje();

compra.set('comprador', persona1);
compra.set('pasaje', pasaje1);

compra.set('fechaCompra', new Date());

compra.save().then(function(){
	console.log('Pasaje Asociado a Comprador');
});
```


* [Relaciones en JavaScript](https://www.parse.com/docs/js_guide#objects-pointers)
* [Guía de Relaciones](https://www.parse.com/docs/relations_guide)
* [Artículo 1](http://blog.parse.com/2012/05/17/new-many-to-many/)

## Código de Ejemplo
El archivo *relaciones.js* contiene un ejemplo sobre como asociar varios objetos colores a un objeto arcoiris.