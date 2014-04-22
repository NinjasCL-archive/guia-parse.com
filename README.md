# Conclusiones
Parse.com es una gran ayuda para realizar aplicaciones y prototipos de forma rápida y sin sufrir dolores de cabeza asociados a la mantención y escalabilidad de servidores. Sin embargo, como todas las cosas, el abanico de necesidades que una aplicación compleja tiene puede significar utilizar servicios externos que complementen lo ofrecido por Parse. Se debe tener en cuenta los siguientes puntos al momento de considerar Parse.com para un nuevo proyecto:

* Parse tiene un límite de 1 Millón de Requests en la versión gratuita, una aplicación popular puede fácilmente sobrepasarlo y se debe estar preparado para pagar los costos de los excedentes o pasar a la versión profesional o empresarial si es necesario. 


* Actualmente, aunque en proceso de implementación, no existe una forma directa de pasar una aplicación en el entorno de desarrollo a un entorno de producción. Para ésto se debe traspasar la información de una aplicación a otra nueva, pero no hay forma de traspasar las ACL. Una posible solución es utilizar la importación con Javascript.


* Los datos de Analytics pueden ser exportados, pero sólo de forma manual. No existe una API para acceder a esos datos de forma automática (todavía). Servicios externos que cumplen la labor de Analytics podrían ser [Count.ly](http://count.ly/),  [Piwik](http://piwik.org/) y [Google Analytics](http://www.google.com/analytics/)


* El código CodeCloud se sobreescribirá al momento de subirse, se recomenienda utilizar Git cuando más de una persona trabaje en dicho código.


* Si se utiliza Javascript para crear la versión web de una aplicación las claves de acceso estarán disponibles, es importante crear ACLs que restrigan el acceso a los datos.


* Como Parse.com fue adquirido por Facebook hay más posibilidades de que una aplicación que utilice Parse sea comprada por Facebook si llega a ser popular :) .
