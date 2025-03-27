# Billetera Virtual

Una aplicación de billetera virtual con funcionalidades básicas de registro,
inicio y cierre de sesión, diseñada para gestionar cuentas de usuario de forma
segura y eficiente.

---

## Tabla de Contenidos

1. [Descripción General](#descripción-general)
2. [Características Principales](#características-principales)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)
4. [Requisitos del Sistema](#requisitos-del-sistema)
5. [Instalación y Configuración](#instalación-y-configuración)
6. [Ejecución del Proyecto](#ejecución-del-proyecto)
7. [Testing](#testing)
8. [Licencia](#licencia)
9. [Solución de Problemas](#solución-de-problemas)

---

## Descripción General

### Propósito

Este producto digital será el mínimo producto viable (MVP) para el lanzamiento
de la billetera virtual. El usuario contará con funcionalidades básicas como:

- Registro, inicio y cierre de sesión.
- Alta de medios de pago (tarjetas de crédito o débito).
- Recarga de saldo en la billetera.
- Uso del saldo o medios de pago para pagar servicios.
- Gestión de transacciones (ingresos y egresos) a través de un registro de
  movimientos o actividad.

### Sprints

#### Sprint 1:

- Página de inicio con enlaces a registro, inicio y cierre de sesión.
- Testing y validación de datos en formularios.
- Conexión del front-end al back-end proporcionado por DH.
- Despliegue utilizando Vercel.

#### Sprint 2:

- Páginas protegidas que requieren autenticación y envío de token.
- Páginas para "Mi Perfil", "Gestión de Medios de Pago" y "Carga de Saldo".
- Testing y validaciones similares al Sprint 1.

#### Sprint 3:

- Página para seleccionar servicios y realizar pagos.
- Visualización de comprobantes de pago.
- Dashboard con resumen de saldo y últimas transacciones.

#### Sprint 4:

- Gestión de actividades del usuario, incluyendo ingresos y egresos.
- Filtros avanzados para búsqueda de movimientos.

---

## Características Principales

- Página de inicio con registro, inicio y cierre de sesión.
- Página "Mi Perfil" para gestionar datos del usuario.
- Gestión de medios de pago.
- Carga de saldo a la billetera.
- Pago de servicios y comprobantes.
- Dashboard con resumen de movimientos.
- Actividad de usuario con filtros avanzados.

---

## Tecnologías Utilizadas

### Frontend

- **Framework**: React, Next.js
- **Estado global**: Zustand
- **Estilos**: SASS

### Testing

- Testing manual documentado.  
  [Documento de Testing](https://docs.google.com/spreadsheets/d/1IfdRkaSVqSVy67zNvUIgDUMIxfKI9GoE/edit?usp=sharing&ouid=105351136121623116475&rtpof=true&sd=true)

### Control de versiones

- Git y GitHub.

---

## Requisitos del Sistema

- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0
- **Sistema Operativo**: macOS, Windows o Linux.
- **Navegador compatible**: Última versión de Chrome, Firefox o Edge.

---

## Instalación y Configuración

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/rodriguez02fer09/Digital-Money-frontend
   cd Digital-Money-frontend
   2.npm install
   3.Configurar variables de entorno en un archivo .env.
   ```
2. Iniciar el proyecto: npm run dev

Solución de Problemas Error común: "Cannot read properties of null (reading
'children')" Causa: La extensión Zustand DevTools intenta analizar componentes
React que no existen en la página actual.

Solución: Desactiva la extensión en páginas que no usen Zustand:

Haz clic en el ícono de extensiones (🧩)

Desmarca "Permitir en este sitio"

Recarga la página:

Presiona Ctrl + R (Windows/Linux) o Cmd + R (Mac)

Verifica el uso de Zustand:

Confirma que la página actual implemente correctamente Zustand

Actualiza la extensión:

Visita la Chrome Web Store

Busca "Zustand DevTools"

Haz clic en "Actualizar"

Nota adicional: Si el problema persiste, prueba en modo incógnito (Ctrl +
Shift + N) para descartar conflictos con otras extensiones.

Licencia Este proyecto está bajo la licencia MIT.
