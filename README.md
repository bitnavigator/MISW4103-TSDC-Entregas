## MISW4103-Pruebas-automatizadas-de-software

### Integrantes
| Nombre                        | Correo                                                            |
| ----------------------------- | ----------------------------------------------------------------- |
|Leonardo Wilches               |l.wilchesm@uniandes.edu.co                                         |
| Paola Andrea Forero           | p.forerob@uniandes.edu.co                                         |
| Mario Gomez                   | mr.gomezc1@uniandes.edu.co                                        |
|Rafael Humberto Rodriguez      |rh.rodriguezr1@uniandes.edu.co                                     |
|Manuel Francisco Vallejo       |mf.vallejo@uniandes.edu.co                                         |

| Identificador | Funcionalidad | Descripción |
|-|-|-|
| F0000 | Creación de Posts |  Permite crear un espacio en el cual el usuario personaliza el contenido agregando texto, imágenes y videos   para su publicación.|
| F0001 | Login succes to GHOST |  Permite login a modulo administrador de app Ghost  y acceder a todas las funcionalidades.|
| F0002 | List Tags  GHOST  |  A través de esta opción un user con privilegios de edición y configuración en la plataforma en interfaz principal menu lateral sección TAGS puede listar las Categorias Representadas como TAGS.|
| F0003 | Create Tag succes  GHOST |  A través de esta opción del menú principal lateral sección TAGS un user con privelegios puede crear una nueva categoría (TAG) y posteriormente asignar POST a esta categoría. Esta funcionalidad permite tener una clasificación y ordenamiento de nuestros post en el BLOG.|
| F0004 | Edit GHOST TAG | A través de esta opcin un user con privilegios de edición y configuración en la plataforma en interfaz principal menú lateral sección TAGS puede escoger una categoria TAG de acuerdo a su necesidad y modificar el nombre.|
| F0005 |Borrar Tag GHOST |  A través de esta opción un user con privilegios de edición y configuración en la plataforma en interfaz principal menú lateral sección TAGS puede eleminar una categoria TAG de acuerdo a su necesidad.|
| F006 | Creación de cuenta | Al abrir la aplicación Ghost (localmente) por primera vez, el usuario es redirigido a una vista de creación de cuenta. Esta cuenta solicita ingresar cuatro campos nombre del nuevo sitio, nombre del usuario, correo de usuario, y contraseña clic en el botón para crear la cuenta.|
| F007 | Creación de Posts | Permite escribir artículos para su publicación el contenito puede incluir texto, imágenes, y videos.|
| F008 | Configuración de Posts | Cuando se crea un post permite configurar los siguientes campos la URL del post, los tags asociados al post, la fecha de publicación, las personas que pueden acceder al post, los autores, los metadatos del post, y la publicación en redes sociales.|
| F009 | Publicación de Posts | Despues de crear/modificar el post se puede publicar a su terminación o agendar para publicar posterioremente.|
| F010 | previsualizar Posts| Permite tener un primer vistazo antes de publicar el post.|







## Listado de escenarios

|Id| tester | Funcionalidad | Requerimiento | Tipo | Nombre | Descripción |
|-|-|-|-|-|-|-|
|E0001| Mario Gomez | Login succes to GHOST |Test app Web GHOST. | BDD |Como  usuario 1 inicio sesion web GHOST|Test que permite verificar login con credenciales a app GHOST.|
|E0002| Mario Gomez | List Tags  GHOST |Test app Web GHOST. | BDD |Como  usuario 1 inicio sesión web y tengo la lista de tags en GHOST|Test que permite verificar login con credenciales a app GHOST y obtener lista de TAGS creados.|
|E0003| Mario Gomez | Create Tag succes  GHOST |Test app Web GHOST. | BDD |Como  usuario 1 inicio sesion web GHOST y creo tag nuevo con un nombre.|Test que permite verificar login con credenciales a app GHOST , listar los tags creados y crear un nombre. el nombre se parametriza en file properties.|
|E0004| Mario Gomez | Edit GHOST TAG |Test app Web GHOST. | BDD |Como  usuario 1 inicio sesion web GHOST y edito nombre de TAG. |Test que permite verificar login con credenciales a app GHOST, escoger un tag existente creado y cambiar o repetir nombre.|
|E0005| Mario Gomez | Borrar Tag GHOST |Test app Web GHOST. | BDD |Como  usuario 1 inicio sesion web GHOST y borro TAG existente.|Test que permite verificar login con credenciales a app GHOST, listar tags, elegir un tag existente y borrarlo. El nombre de TAG es parametrizado en file properties.|
|E0006| Paola Forero | Crear Post |Test app Web GHOST. | BDD |Como  usuario 1 inicio sesion web GHOST creo un nuevo Post.|**GIVEN** el usuario administrador ingresa a Ghost ingresa al dashboard, **WHEN** Cuando da clic en nuevo Post, escribe un titulo y el texto del contenido **THEN**  el post podria ser publicado|
|E0007| Paola Forero | Modificar Post |Test app Web GHOST. | BDD |Como  usuario 1 inicio sesion web GHOST modifico Post.|**GIVEN** el usuario administrador ingresa a Ghost ingresa al dashboard, filtra el nombre del post a modificar **WHEN** modificar el titulo o el texto del contenido **THEN**  el post podria ser publicado|
|E0008| Paola Forero | Configurar Post |Test app Web GHOST. | BDD |Como  usuario 1 inicio sesion web GHOST configuro un nuevo post.|**GIVEN** el usuario administrador ingresa a Ghost ingresa al dashboard, filtra el nombre del post a configurar **WHEN** selecciona el campo de la lista de TAGS **THEN**  el post podria ser publicado con un nuevo tag|
|E0009| Paola Forero | Eliminar Post |Test app Web GHOST. | BDD |Como  usuario 1 inicio sesion web GHOST elimino un  post.|**GIVEN** el usuario administrador ingresa a Ghost ingresa al dashboard, filtra el nombre del post a eliminar **WHEN** el administrador abre el menú de configuración del editor y selecciona la opción para eliminar el post y confirma la eliminación **THEN**  el post es eliminado|
|E0009| Paola Forero | Publicar Post |Test app Web GHOST. | BDD |Como  usuario 1 inicio sesion web GHOST publico post.|**GIVEN**  el usuario administrador ingresa a Ghost ,  **WHEN** ingresa a un post, selecciona Publicar , **WHEN**  el post deberia verse en la pagina principal|



## Pros y Contras: Kraken-Cypress-Playwrigth
| Herramienta | Pros. | Contras |
|-|-|-|
| Kraken | Estructura lógica de archivos para escribir TEST de features con escenarios de pruebas con sintaxis BDD.| Poca documentación para tener mas detalle de configuracion de los Steps.|
|| Estructura comprensible y fácil  para escribir los steps, Features , escenarios.| La personalizacion de captura de selectores tiene poca documentación.|
|| Colección de reporte de tests en carpeta, con información relevante y en formato Html comprensible y con evidencia. |No es tan robusto en temas de interoperativilidad de sistema operativo en especial con Sistema Windows, las configuraciones en los entornos de sistema operativo puede generar demoras en la puesta a punto del sitema para ejecución de test.|
|| Muy amigable para escribir los tests con participación de los usuarios. | La curva de aprendizaje para colocar a funcionar la herramienta en una plataforma no es para una persona de poca experiencia.|
| Cypress | Amplia documentación y ejemplos considerables utiles par implementar test. | La transición entre paginas de confirmación no es tan intuitiva de configurar.|
|| Amplio conjunto de instrucciones para configurar captura de selectores del DOM. | Con tan amplio set de funcionalidades,  se torna  complejo buscar la opción adecuada que se requiere.|
| | La interfaz de ejecucion de Test, web como CLI tiene una amplia varieda de features.| No es tan intuitivo para implementar  BDD y requiere un nivel de expertise para configurarlo. | 


