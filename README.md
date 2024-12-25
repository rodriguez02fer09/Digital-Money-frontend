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

---

## Descripción General

**Propósito**:  
Este producto digital será el mínimo producto viable (MVP) para el lanzamiento
de la billetera virtual. El usuario contará con funcionalidades básicas como:

- Registro, inicio y cierre de sesión.
- Alta de medios de pago (tarjetas de crédito o débito).
- Recarga de saldo en la billetera.
- Uso del saldo o medios de pago para pagar servicios.
- Gestión de transacciones (ingresos y egresos) a través de un registro de
  movimientos o actividad.

**Sprints**:  
El desarrollo del proyecto se divide en los siguientes sprints:

1. **Sprint 1**:

   - Página de inicio con enlaces a registro, inicio y cierre de sesión.
   - Testing y validación de datos en formularios.
   - Conexión del front-end al back-end proporcionado por DH.
   - Despliegue utilizando Vercel.

2. **Sprint 2**:

   - Páginas protegidas que requieren autenticación y envío de token.
   - Páginas para "Mi Perfil", "Gestión de Medios de Pago" y "Carga de Saldo".
   - Testing y validaciones similares al Sprint 1.

3. **Sprint 3**:

   - Página para seleccionar servicios y realizar pagos.
   - Visualización de comprobantes de pago.
   - Dashboard con resumen de saldo y últimas transacciones.

4. **Sprint 4**:
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

### Control de versiones

- Git y GitHub.

### Backend (No aplica)

- Base de datos: MySQL (No aplica).

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
   ```
