# Move Finder

[Link del proyecto](https://jun200529.github.io/movie-finder/)

## Descripción del proyecto

**Move Finder** es una aplicación web desarrollada con **HTML, CSS y JavaScript** cuyo objetivo es permitir al usuario buscar películas de manera rápida e intuitiva utilizando la **API de OMDb (Open Movie Database)**. La aplicación consume datos en tiempo real desde un servicio externo y presenta la información de forma organizada mediante tarjetas dinámicas que incluyen el póster de la película, su título, año de lanzamiento y tipo de contenido (película, serie, videojuego, entre otros).

Este proyecto fue realizado con el propósito de fortalecer los conocimientos en desarrollo web, especialmente en el consumo de APIs, manipulación del DOM, programación asíncrona y aplicación de estructuras de control fundamentales del lenguaje JavaScript.

---

# Tecnologías utilizadas

* HTML5
* CSS3
* JavaScript (ES6+)
* API REST de OMDb
* Fetch API

---

# Conceptos de programación aplicados

Durante el desarrollo de este proyecto se implementaron diversos conceptos fundamentales de programación que permiten comprender cómo funciona una aplicación web moderna que consume información desde un servidor externo.

## Consumo de APIs

Uno de los aspectos más importantes del proyecto es el consumo de la **API de OMDb**, la cual proporciona información sobre miles de películas y series.

Para realizar las consultas se construye dinámicamente una URL utilizando la clave de acceso (**API Key**) y el nombre de la película ingresado por el usuario. Posteriormente se realiza una petición HTTP mediante **Fetch API**, esperando la respuesta del servidor para convertirla al formato JSON y poder manipular los datos obtenidos.

Gracias a esta implementación el proyecto demuestra cómo interactuar con servicios REST y cómo obtener información externa desde JavaScript.

---

## Programación asíncrona

Para evitar que la página se bloquee mientras espera la respuesta del servidor, la búsqueda de películas fue implementada mediante una **función asíncrona** utilizando las palabras reservadas **async** y **await**.

Este enfoque permite que el navegador continúe funcionando normalmente mientras la API responde, mejorando considerablemente la experiencia del usuario.

El uso de programación asíncrona es una práctica indispensable en aplicaciones modernas debido a que la mayoría de la información proviene de servidores externos.

---

## Manipulación del DOM

El proyecto realiza múltiples modificaciones dinámicas del DOM.

Inicialmente se seleccionan distintos elementos del documento utilizando **querySelector()**, como el campo de búsqueda, el botón y el contenedor donde posteriormente se mostrarán los resultados.

Cada vez que el usuario realiza una búsqueda, el contenido anterior es eliminado y se generan nuevas tarjetas HTML utilizando **template literals**, las cuales son insertadas directamente en la página mediante la propiedad **innerHTML**.

Gracias a este proceso la interfaz cambia dinámicamente sin necesidad de recargar la página.

---

## Manejo de eventos

La interacción con el usuario fue implementada mediante distintos **Event Listeners**.

El botón de búsqueda ejecuta la función principal cuando recibe un evento **click**, mientras que el campo de texto detecta cuándo el usuario presiona la tecla **Enter**, permitiendo iniciar la búsqueda sin necesidad de utilizar el mouse.

Esta implementación mejora la accesibilidad y hace que la aplicación resulte mucho más cómoda de utilizar.

---

## Validación de datos

Antes de enviar una consulta a la API se verifica que el usuario realmente haya escrito el nombre de una película.

Si el campo se encuentra vacío, la aplicación muestra un mensaje de alerta y detiene inmediatamente la ejecución mediante la instrucción **return**, evitando realizar peticiones innecesarias al servidor.

También se valida la respuesta obtenida desde la API. Cuando no existen coincidencias, el programa informa al usuario mostrando un mensaje indicando que no se encontraron resultados.

Estas validaciones permiten construir una aplicación mucho más robusta y reducen la posibilidad de errores durante la ejecución.

---

## Estructuras condicionales

El proyecto utiliza diversas estructuras **if/else** para controlar el flujo del programa.

Estas condiciones permiten:

* Verificar que el usuario haya ingresado un nombre válido.
* Detectar cuando la API no encuentra resultados.
* Comprobar si una película posee un póster disponible.
* Reemplazar automáticamente las imágenes inexistentes por una imagen predeterminada.

El uso de condicionales garantiza que la aplicación responda correctamente ante diferentes escenarios.

---

## Ciclos

Para recorrer todas las películas devueltas por la API se utiliza un ciclo **for...of**.

Este ciclo permite acceder a cada objeto del arreglo de resultados y generar automáticamente una tarjeta HTML para cada película encontrada.

Gracias a esta estructura no es necesario crear manualmente cada elemento de la interfaz, haciendo que la aplicación pueda mostrar cualquier cantidad de resultados de manera automática.

---

## Manipulación de arreglos

Antes de mostrar la información al usuario, el arreglo de películas es ordenado mediante el método **sort()**, utilizando una función de comparación que organiza los resultados de acuerdo con el año de lanzamiento en orden descendente.

De esta manera las películas más recientes aparecen primero, mejorando la organización y la experiencia de navegación.

---

## Diseño de la interfaz

La apariencia visual fue desarrollada completamente con CSS.

Se implementó un diseño moderno utilizando colores oscuros, contenedores con sombras, tarjetas con bordes redondeados y efectos de transición que generan una pequeña animación al pasar el cursor sobre cada película.

Además, el proyecto utiliza **CSS Grid** con la función **repeat(auto-fit, minmax())**, permitiendo que las tarjetas se distribuyan automáticamente según el tamaño de la pantalla.

Esto convierte la aplicación en un sitio **responsive**, capaz de adaptarse tanto a computadoras como a dispositivos móviles.

---

# Funcionamiento general

El flujo completo de la aplicación puede resumirse de la siguiente manera:

1. El usuario escribe el nombre de una película.
2. Puede iniciar la búsqueda haciendo clic en el botón o presionando la tecla **Enter**.
3. El programa valida que exista un texto válido.
4. Se construye la URL para consultar la API de OMDb.
5. Se realiza una petición HTTP mediante **Fetch API**.
6. La respuesta del servidor se convierte a formato JSON.
7. Los resultados son ordenados por año de lanzamiento.
8. Se recorren todas las películas utilizando un ciclo **for...of**.
9. Se generan dinámicamente tarjetas HTML con la información de cada película.
10. Finalmente, la interfaz muestra los resultados de manera organizada y totalmente dinámica.

---

# Aprendizajes obtenidos

Este proyecto permitió reforzar conocimientos esenciales del desarrollo web moderno, entre ellos:

* Consumo de APIs REST.
* Programación asíncrona con **async/await**.
* Uso de **Fetch API**.
* Manipulación dinámica del DOM.
* Manejo de eventos del usuario.
* Validación de formularios.
* Uso de estructuras condicionales.
* Implementación de ciclos para recorrer arreglos.
* Ordenamiento de datos mediante métodos de JavaScript.
* Creación dinámica de componentes HTML.
* Diseño responsive utilizando CSS Grid.
* Mejora de la experiencia de usuario mediante efectos visuales y mensajes dinámicos.

En conjunto, este proyecto representa una aplicación completa que integra conceptos fundamentales de programación y desarrollo web, mostrando cómo interactuar con servicios externos, procesar información recibida desde una API y presentarla de manera dinámica e intuitiva para el usuario.
