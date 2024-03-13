# Ejercicio Práctico: Aplicación de Librería

En este ejercicio, se te pide que diseñes y desarrolles una aplicación web utilizando React que interactúe con una API RESTful de libros. La aplicación constará de dos componentes principales: un formulario para agregar un nuevo libro y una tabla para visualizar y eliminar libros existentes.

## Requisitos del Proyecto

### 1. Configuración del Proyecto

- Crea el proyecto utilizando Vite
- Instala todas las dependencias necesarias utilizando npm o yarn.

### 2. Componente de Formulario

- Crea un componente de formulario llamado `BookForm`.
- Este formulario debe incluir campos para ingresar el título del libro, el autor y el año de publicación.
- Utiliza las rutas proporcionadas por la API para enviar una solicitud POST al servidor y agregar un nuevo libro cuando el formulario se envíe correctamente.

### 3. Componente de Tabla

- Crea un componente de tabla llamado `BookTable`.
- Esta tabla debe mostrar todos los libros existentes recuperados de la API.
- La tabla debe incluir columnas para mostrar el título, autor y año de cada libro.
- Implementa la capacidad de eliminar un libro haciendo clic en un botón de eliminación asociado a cada fila de la tabla.
- Utiliza las rutas proporcionadas por la API para enviar una solicitud DELETE al servidor y eliminar el libro correspondiente.

### 4. Integración con la API

- Utiliza las siguientes rutas proporcionadas por la API para interactuar con los libros:
  - GET `/books` - para obtener todos los libros.
  - POST `/books` - para agregar un nuevo libro.
  - DELETE `/books/:id` - para eliminar un libro específico por su ID.

### 5. Estilo y Diseño

- Diseña tu aplicación de manera que sea intuitiva y fácil de usar para los usuarios.
- Utiliza CSS o alguna biblioteca de estilos como Bootstrap para mejorar la apariencia de tu aplicación.