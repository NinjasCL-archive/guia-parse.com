
function importar() {
	var Expositor = Parse.Object.extend('Expositor');
	var Tema = Parse.Object.extend('Tema');

    
    var expositor1 = new Expositor();
    expositor1.set('nombre', 'Gonzalo Pérez');
    expositor1.set('especialidad', 'MS MVP - Mobile Developer - Web Developer.');
    expositor1.set('bio', 'Destacado desarrollador de software y docente de la Región.');
    expositor1.set('twitter', 'chalalo');
    expositor1.set('linkedin','');
    
    
    var expositor2 = new Expositor();
    expositor2.set('nombre', 'Yoel Torres');
    expositor2.set('especialidad', 'Co-founder Jaumach? - Co-founder Verdant');
    expositor2.set('bio', 'Ingeniero Comercial y emprendedor en diversos proyectos digitales en la región del Bío-Bío.');
    expositor2.set('twitter', 'ytorres05');
    expositor2.set('linkedin','');
    
    
    var expositor3 = new Expositor();
    expositor3.set('nombre', 'Javier Chacana');
    expositor3.set('especialidad', 'Senior Java Developer - Ingeniero de Software');
    expositor3.set('bio', 'Ingeniero Civil Informático de la Universidad del Bío-Bío actualmente radicado en la región Metropolitana. Con vasta experiencia en Ingeniería de Software.');
    expositor3.set('twitter', 'jchacana');
    expositor3.set('linkedin','');
    
    
    var expositor4 = new Expositor();
    expositor4.set('nombre', 'Jasna Meza');
    expositor4.set('especialidad', 'Sun Certified Java Programmer SCJP 5.0 - Docente');
    expositor4.set('bio', 'Magister en Ciencias de la Computación, Docente instructor del área de programación en DuocUC de cursos asociados a POO, Analis y Diseño de Algoritmos y Programación.');
    expositor4.set('twitter', '');
    expositor4.set('linkedin','http://www.linkedin.com/pub/jazna-meza-hidalgo/2b/7a0/586');
    
    
    var expositor5 = new Expositor();
    expositor5.set('nombre', 'Andrés Villagrán');
    expositor5.set('especialidad', 'Mobile Developer - Web Developer - Game Developer - Apps Developer');
    expositor5.set('bio', 'Destacado desarrollador de software en diferentes plataformas para diversas empresas nacionales. Organizador del Flex Camp Chile y co-founder de VillagranQuiroz.');
    expositor5.set('twitter', 'avillagran');
    expositor5.set('linkedin','');
    
    
    var expositor6 = new Expositor();
    expositor6.set('nombre', 'Lautaro Silva');
    expositor6.set('especialidad', 'Ingeniero de Software - Realidad Virtual - GIS');
    expositor6.set('bio', '(c)Magister en Ciencias de la Computación, Universidad del Bio-Bio, Chile. Ingeniero de Ejecución en Computación e Informática. Participó como desarrollador experto en Realidad Virtual en el Proyecto Alfa III Gaviota de la Unión Europea utilizando Realidad Virtual para la simulación de espacios urbanos y simulación de conducción.');
    expositor6.set('twitter', 'jlautarosilva');
    expositor6.set('linkedin','');
    
    
    var expositor7 = new Expositor();
    expositor7.set('nombre', 'Brede Basualdo');
    expositor7.set('especialidad', 'Web Developer - Mobile Developer');
    expositor7.set('bio', 'Destacado desarrollador de software regional que ha participado en importantes proyectos tanto a nivel regional como nacional y ha colaborado en diversos emprendimientos.');
    expositor7.set('twitter', 'BredeBS');
    expositor7.set('linkedin','');
    
    
    var expositor8 = new Expositor();
    expositor8.set('nombre', 'Rodrigo Ramirez');
    expositor8.set('especialidad', 'CEO Blackhole - Director TI Hablalot');
    expositor8.set('bio', 'Ingeniero en Informática con experiencia de 10 años desarrollando soluciones TI. Especializado en Soluciones VoIP.');
    expositor8.set('twitter', '');
    expositor8.set('linkedin','http://www.linkedin.com/in/rodrigoramireznorambuena');
    
    
    var expositor9 = new Expositor();
    expositor9.set('nombre', 'Karina Gonzalez');
    expositor9.set('especialidad', 'Mobile Developer - Android Developer');
    expositor9.set('bio', 'Analista Programador Computacional de DuocUC, developer Android.');
    expositor9.set('twitter', '');
    expositor9.set('linkedin','');
    
    
    var expositor10 = new Expositor();
    expositor10.set('nombre', 'Camilo Castro');
    expositor10.set('especialidad', 'iOS Developer - Parse.com Specialist');
    expositor10.set('bio', 'Desarrollador iOS');
    expositor10.set('twitter', 'camcasc');
    expositor10.set('linkedin','');
    
    
    var expositor11 = new Expositor();
    expositor11.set('nombre', 'CodeCamp');
    expositor11.set('especialidad', '');
    expositor11.set('bio', '');
    expositor11.set('twitter', '');
    expositor11.set('linkedin','');
    
    
    var expositor12 = new Expositor();
    expositor12.set('nombre', 'Qualitat Corp');
    expositor12.set('especialidad', '');
    expositor12.set('bio', '');
    expositor12.set('twitter', '');
    expositor12.set('linkedin','');
    
    
    var expositor13 = new Expositor();
    expositor13.set('nombre', 'Innova BioBio');
    expositor13.set('especialidad', '');
    expositor13.set('bio', '');
    expositor13.set('twitter', '');
    expositor13.set('linkedin','');
    
    
    var expositor14 = new Expositor();
    expositor14.set('nombre', 'Alejandro Melo Domínguez');
    expositor14.set('especialidad', '');
    expositor14.set('bio', '');
    expositor14.set('twitter', '');
    expositor14.set('linkedin','');
    
    
    var expositor15 = new Expositor();
    expositor15.set('nombre', 'Sandro Gomez A.');
    expositor15.set('especialidad', '');
    expositor15.set('bio', '');
    expositor15.set('twitter', '');
    expositor15.set('linkedin','');
    var expositores = [expositor1, expositor2, expositor3, expositor4, expositor5, expositor6, expositor7, expositor8, expositor9, expositor10, expositor11, expositor12, expositor13, expositor14, expositor15, ];
    
    var tema1 = new Tema();
    tema1.set('descripcion', 'Apertura');
    tema1.set('ubicacion','Auditorio');
    tema1.set('tipo','General');
    tema1.set('fecha','Viernes 25');
    tema1.set('horaInicio','14.00');
    tema1.set('horaFin','14.30');
    
    
    
    var tema2 = new Tema();
    tema2.set('descripcion', 'Líneas de financiamiento de Innova Bío Bío y casos de éxito.');
    tema2.set('ubicacion','Auditorio');
    tema2.set('tipo','General');
    tema2.set('fecha','Viernes 25');
    tema2.set('horaInicio','14.30');
    tema2.set('horaFin','15.00');
    
    
    
    var tema3 = new Tema();
    tema3.set('descripcion', 'Smart City Gran Concepción');
    tema3.set('ubicacion','Auditorio');
    tema3.set('tipo','General');
    tema3.set('fecha','Viernes 25');
    tema3.set('horaInicio','14.30');
    tema3.set('horaFin','15.00');
    
    
    
    var tema4 = new Tema();
    tema4.set('descripcion', 'Mobile Services');
    tema4.set('ubicacion','Auditorio');
    tema4.set('tipo','Charla');
    tema4.set('fecha','Viernes 25');
    tema4.set('horaInicio','15.00');
    tema4.set('horaFin','16.30');
    
    
    
    var tema5 = new Tema();
    tema5.set('descripcion', 'Del Papel al Éxito: Canvas.');
    tema5.set('ubicacion','Auditorio');
    tema5.set('tipo','Taller');
    tema5.set('fecha','Viernes 25');
    tema5.set('horaInicio','16.30');
    tema5.set('horaFin','17.30');
    
    
    
    var tema6 = new Tema();
    tema6.set('descripcion', 'Desarrollo en Android');
    tema6.set('ubicacion','Laboratorio 1');
    tema6.set('tipo','Taller');
    tema6.set('fecha','Viernes 25');
    tema6.set('horaInicio','16.30');
    tema6.set('horaFin','17.30');
    
    
    
    var tema7 = new Tema();
    tema7.set('descripcion', 'Súbete a la Nube Voladora: Amazon Web Services');
    tema7.set('ubicacion','Aula');
    tema7.set('tipo','Taller');
    tema7.set('fecha','Viernes 25');
    tema7.set('horaInicio','16.30');
    tema7.set('horaFin','17.30');
    
    
    
    var tema8 = new Tema();
    tema8.set('descripcion', 'Conversatorio / Cierre');
    tema8.set('ubicacion','Auditorio');
    tema8.set('tipo','General');
    tema8.set('fecha','Viernes 25');
    tema8.set('horaInicio','17.30');
    tema8.set('horaFin','18.00');
    
    
    
    var tema9 = new Tema();
    tema9.set('descripcion', 'Apertura');
    tema9.set('ubicacion','Auditorio');
    tema9.set('tipo','General');
    tema9.set('fecha','Sábado 26');
    tema9.set('horaInicio','10.00');
    tema9.set('horaFin','10.30');
    
    
    
    var tema10 = new Tema();
    tema10.set('descripcion', 'Asterik: Abriendo el mundo de las comunicaciones');
    tema10.set('ubicacion','Auditorio');
    tema10.set('tipo','Speech');
    tema10.set('fecha','Sábado 26');
    tema10.set('horaInicio','10.30');
    tema10.set('horaFin','11.00');
    
    
    
    var tema11 = new Tema();
    tema11.set('descripcion', 'Realidad Vs. Fantasía en la Industria del Software');
    tema11.set('ubicacion','Auditorio');
    tema11.set('tipo','Speech');
    tema11.set('fecha','Sábado 26');
    tema11.set('horaInicio','11.00');
    tema11.set('horaFin','11.30');
    
    
    
    var tema12 = new Tema();
    tema12.set('descripcion', 'Realidad Virtual');
    tema12.set('ubicacion','Auditorio');
    tema12.set('tipo','Speech');
    tema12.set('fecha','Sábado 26');
    tema12.set('horaInicio','11.30');
    tema12.set('horaFin','12.00');
    
    
    
    var tema13 = new Tema();
    tema13.set('descripcion', 'Desarrollo Móvil con Android');
    tema13.set('ubicacion','Laboratorio 2');
    tema13.set('tipo','Taller');
    tema13.set('fecha','Sábado 26');
    tema13.set('horaInicio','10.30');
    tema13.set('horaFin','11.30');
    
    
    
    var tema14 = new Tema();
    tema14.set('descripcion', 'Bootstrap es la Cumbia');
    tema14.set('ubicacion','Aula');
    tema14.set('tipo','Charla');
    tema14.set('fecha','Sábado 26');
    tema14.set('horaInicio','10.30');
    tema14.set('horaFin','11.30');
    
    
    
    var tema15 = new Tema();
    tema15.set('descripcion', 'Break 1');
    tema15.set('ubicacion','Auditorio');
    tema15.set('tipo','General');
    tema15.set('fecha','Sábado 26');
    tema15.set('horaInicio','12.00');
    tema15.set('horaFin','12.30');
    
    
    
    var tema16 = new Tema();
    tema16.set('descripcion', 'Una aproximación a las metodologías ágiles');
    tema16.set('ubicacion','Auditorio');
    tema16.set('tipo','Taller');
    tema16.set('fecha','Sábado 26');
    tema16.set('horaInicio','12.30');
    tema16.set('horaFin','13.30');
    
    
    
    var tema17 = new Tema();
    tema17.set('descripcion', 'Desarrollando en iOS con Parse.com');
    tema17.set('ubicacion','Laboratorio 1');
    tema17.set('tipo','Taller');
    tema17.set('fecha','Sábado 26');
    tema17.set('horaInicio','12.30');
    tema17.set('horaFin','13.30');
    
    
    
    var tema18 = new Tema();
    tema18.set('descripcion', 'Java + Hibernate: The easy way');
    tema18.set('ubicacion','Laboratorio 2');
    tema18.set('tipo','Taller');
    tema18.set('fecha','Sábado 26');
    tema18.set('horaInicio','12.30');
    tema18.set('horaFin','13.30');
    
    
    
    var tema19 = new Tema();
    tema19.set('descripcion', 'Break 2');
    tema19.set('ubicacion','Auditorio');
    tema19.set('tipo','General');
    tema19.set('fecha','Sábado 26');
    tema19.set('horaInicio','13.30');
    tema19.set('horaFin','14.30');
    
    
    
    var tema20 = new Tema();
    tema20.set('descripcion', 'Expo APP');
    tema20.set('ubicacion','Auditorio');
    tema20.set('tipo','Taller');
    tema20.set('fecha','Sábado 26');
    tema20.set('horaInicio','14.30');
    tema20.set('horaFin','15.30');
    
    
    
    var tema21 = new Tema();
    tema21.set('descripcion', 'Desarrollando con Ruby con Padrino');
    tema21.set('ubicacion','Laboratorio 1');
    tema21.set('tipo','Taller');
    tema21.set('fecha','Sábado 26');
    tema21.set('horaInicio','14.30');
    tema21.set('horaFin','15.30');
    
    
    
    var tema22 = new Tema();
    tema22.set('descripcion', 'Realidad Virtual con Oculus Rift + MS Kinect');
    tema22.set('ubicacion','Laboratorio 2');
    tema22.set('tipo','Taller');
    tema22.set('fecha','Sábado 26');
    tema22.set('horaInicio','14.30');
    tema22.set('horaFin','15.30');
    
    
    
    var tema23 = new Tema();
    tema23.set('descripcion', 'Challenge / Pizza / Cierre');
    tema23.set('ubicacion','Auditorio');
    tema23.set('tipo','General');
    tema23.set('fecha','Sábado 26');
    tema23.set('horaInicio','15.30');
    tema23.set('horaFin','18.00');
    
    var temas = [	tema1,
	tema2,
	tema3,
	tema4,
	tema5,
	tema6,
	tema7,
	tema8,
	tema9,
	tema10,
	tema11,
	tema12,
	tema13,
	tema14,
	tema15,
	tema16,
	tema17,
	tema18,
	tema19,
	tema20,
	tema21,
	tema22,
	tema23,
];

var temasParaExpositor = new Object();
temasParaExpositor['Gonzalo Pérez'] = [tema4, tema6, ];

temasParaExpositor['Yoel Torres'] = [tema5, ];

temasParaExpositor['Javier Chacana'] = [tema11, tema16, ];

temasParaExpositor['Jasna Meza'] = [tema18, ];

temasParaExpositor['Andrés Villagrán'] = [tema21, ];

temasParaExpositor['Lautaro Silva'] = [tema22, ];

temasParaExpositor['Brede Basualdo'] = [tema14, ];

temasParaExpositor['Rodrigo Ramirez'] = [tema10, ];

temasParaExpositor['Karina Gonzalez'] = [tema13, ];

temasParaExpositor['Camilo Castro'] = [tema17, ];

temasParaExpositor['CodeCamp'] = [tema1, tema8, tema9, tema15, tema19, tema20, tema23, ];

temasParaExpositor['Qualitat Corp'] = [tema12, ];

temasParaExpositor['Innova BioBio'] = [tema2, ];

temasParaExpositor['Alejandro Melo Domínguez'] = [tema3, ];

temasParaExpositor['Sandro Gomez A.'] = [tema7, ];


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
