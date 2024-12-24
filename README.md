Billetera Virtual 

1. Una aplicación de billetera virtual con funcionalidades básicas de registro,
   inicio y cierre de sesión , diseñada para gestionar cuentas de usuario de
   forma segura y eficiente.

2. Tabla de Contenidos
   1.Descripción General
   2.Características Principales
   3.Tecnologías Utilizadas
   4.Requisitos del Sistema
   5.Instalación y Configuración
   6.Ejecución del Proyecto
   7.Testing
   8.Licencia

4. Descripción General Proposito:
 Este producto digital será el mínimo producto
   viable para el lanzamiento de la billetera , y el usuario tendrá las
   funcionalidades básicas de registro, inicio y cierre de sesión, dar de altos
   medios de pago como tarjetas de crédito o débito, recargar saldo en su
   billetera y poder usar los medios de pago o el saldo de su billetera para
   pagar servicios. El usuario contará con una Cuenta Virtual Uniforme única que
   será la cuenta que le pertenece. Y deberá llevar registro de todas las
   transacciones (ingresos y egresos) que se realizan a través de la billetera
   ,también conocido como movimientos o actividad de la cuenta.

Sprints:
1.Crear una página de inicio que muestre los servicios que ofrece la
billetera, y que tenga link al formulario de registro e inicio de sesión. Asi
mismo, un link a cierre de sesión. Todo esto incluyendo el testing
correspondiente a las páginas desarrolladas, validación de datos en formularios
y de respuestas de error desde la Rest API. Usar react para el desarrollo con el
framework Next.js y deployar en Vercel. Conectar todo el front-end al back-end
provisto por DH.

2. Para el acceso a estas páginas el usuario deberá estar logueado y el token
   deberá ser enviado para la seguridad del sitio. Una página donde se muestran
   los datos del usuario “Mi Perfil” y donde podrá editar algunos de sus datos.
   Otra página para Gestionar los medios de pagos que el usuario puede asociar a
   su billetera. Y la página de Ingreso de dinero a la billetera, es decir,
   cargar saldo a la billetera utilizando los medios de pagos asociados. Se
   mantienen las mismas especificaciones técnicas del sprint 1, así como el
   testing, validación de formularios y respuestas de la Rest API.

3.Para el acceso a estas páginas el usuario deberà estar logueado. De una lista
de servicios precargados que se ofrecerán al usuario, este podrá seleccionar un
servicio y proceder a pagar usando el saldo disponible en la billetera o algún
medio de pago de los registrados en la billetera. Poder ver en pantalla un
comprobante del pago realizado y validación de formularios y de saldo disponible
para realizar el pago de seleccionar la billetera en el pago de servicios. El
Dashboard muestra el saldo disponible en cuenta y un resumen de los últimos
movimientos/transacciones realizadas por el usuario con su billetera virtual. Se
deberá trabajar con las mismas especificaciones técnicas, testing, validación de
formularios y respuestas de la Rest API.

4.La actividad del usuario permite ver todos los movimientos realizados por el
usuario usando su billetera, es decir, ingresos y egresos de dinero , y poder
usar ciertos filtros para realizar búsqueda de esos movimientos.

4. Características Principales
   -Página de inicio, registro, inicio y cierre desesión.
   -Página de Mi Perfil.
   -Página de Gestión de Medios de Pago.
   - Página de Ingreso de Dinero. -Pago de Servicios y Dashboard.
   -Actividad del
  usuario.

5. Tecnologías Utilizadas Lista las tecnologías y frameworks usados:

-Frontend: React, Next.js
-Estado global: Zustand 
-Estilos: SASS -Testing manual
-Control de versiones: Git, GitHub 
-Backend :No aplica -Base de datos: MySQL (No
aplica)
