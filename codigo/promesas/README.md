# Promises (Promesas)
Las promesas son una alternativa a los callbacks, cada método asíncrono en el SDK JavaScript de Parse retorna una Promise (Promesa), el código es mucho más limpio que el código piramidal que se obtiene usando callbacks. La Promise representa el resultado de una tarea, que pudiese o no estar completa. Una Promise debe tener una función llamada "then", la cual se le enviarán los callbacks cuando la promesa se cumpla o si hubo algún error.

Para más información sobre las Promises visitar:

* [Guía de Promesas](https://www.parse.com/docs/js_guide#promises)
* [Artículo 1](http://blog.parse.com/2013/01/29/whats-so-great-about-javascript-promises/)
* [Artículo 2](http://blog.parse.com/2013/06/18/new-docs-for-javascript-files-and-promises/)

## Código de Ejemplo
El código de ejemplo *promesas.js* muestra una implementación donde se utilizan Promises para guardar una serie de objetos de la clase Person.