// Definimos una función llamada
// obtenerRolParaUsuarioActual

Parse.Cloud.define("obtenerRolParaUsuarioActual", function(request, response) {
    
    // Un nombre para cuando no se encuentre el Rol asociado al usuario      
    var desconocido = 'desconocido';
             
    // Master Key
    // Usada para evitar conflictos con ACL establecidas
    Parse.Cloud.useMasterKey();
    
    // Una nueva consulta para obtener objetos de la clase Role       
    var query = new Parse.Query(Parse.Role);
    
    // Donde el usuario actual esté dentro de la 
    // propiedad "users" de la clase Role  
    query.equalTo('users', Parse.User.current());
    
    // Obtenemos el primer resultado         
    query.first().then(function(role){
		// Si existe un resultado
		// retornar éxito junto al nombre del Rol
        if(role) {
            response.success(role.get("name"));
        
        // Si no existe, entonces
        // asumimos que el usuario no tiene Rol asignado
        } else {
		
            response.error(desconocido);
        }
    });
  
}); 
    
