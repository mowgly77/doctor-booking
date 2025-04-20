# Sistema de Reserva de Citas Médicas

## Descripción
Este proyecto es un sistema de reserva de citas médicas desarrollado con Next.js, TypeScript y Tailwind CSS. Permite a los usuarios ver especialidades médicas, doctores disponibles y realizar reservas de citas.

## Requerimientos del Challenge

### Objetivo
Diseñar y construir una interfaz de usuario completamente responsiva y accesible para la reserva de citas médicas en una plataforma de salud. El enfoque está en la implementación del front-end: diseño, interacción, accesibilidad y calidad del código.

### Estado de Implementación

#### 1. Vista de Directorio de Doctores ✅
- [x] Lista mock de doctores (nombre, foto, especialidad, disponibilidad, ubicación)
- [x] Filtrado por especialidad y disponibilidad
- [x] Botón "Reservar Cita" en cada tarjeta

#### 2. Modal de Reserva ✅
- [x] Se abre al hacer clic en "Reservar Cita"
- [x] Muestra nombre del doctor y horarios disponibles (mock)
- [x] Permite seleccionar horario y confirmar

#### 3. Vista de Resumen de Citas ✅
- [x] Sección donde los usuarios pueden ver sus citas reservadas
- [x] Muestra nombre del doctor, fecha/hora, especialidad y ubicación

### Requisitos Técnicos

#### Stack Tecnológico ✅
- React
- TypeScript
- HTML
- CSS
- TailwindCSS para estilos
- Zustand para gestión de estado

#### Requisitos de Interfaz ✅
- Tarjeta de Doctor con:
  - Nombre, especialidad, calificación, disponibilidad
  - Botón "Reservar"
- Componente de Filtro (dropdown para especialidades)
- Modal de Cita con:
  - Nombre del doctor
  - Horarios disponibles
  - Botón de confirmación
- Sección "Mis Citas" con lista de citas confirmadas

#### Objetivos de Accesibilidad ✅
- [x] Todos los elementos navegables por teclado
- [x] Uso de aria-label, role y aria-describedby
- [x] Responsive en móvil, tablet y desktop
- [x] Pasa verificaciones básicas en Lighthouse

### Uso de Herramientas AI
- Cursor para:
  - Generación de componentes base
  - Creación de datos mock
  - Optimización de accesibilidad
  - Generación de casos de prueba básicos

## Build y Validación

### Build Local

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Generar build de producción:
   ```bash
   npm run build
   ```

3. Iniciar servidor de producción:
   ```bash
   npm run start
   ```

### Validación de Requisitos

1. **Accesibilidad**
   ```bash
   npm run test:a11y
   ```

2. **Responsive Design**
   - Verificar en dispositivos móviles, tablets y desktop
   - Usar Chrome DevTools para pruebas de responsive

3. **Funcionalidad**
   - Verificar filtrado de doctores
   - Probar reserva de citas
   - Validar vista de citas reservadas

4. **Performance**
   ```bash
   npm run build
   # Verificar métricas de Lighthouse
   ```

### Despliegue

1. **Vercel**
   ```bash
   vercel
   ```

2. **Netlify**
   ```bash
   netlify deploy
   ```

## Limitaciones Conocidas

1. **Datos Mock**
   - Los datos son estáticos y no persisten
   - No hay integración con backend real

2. **Autenticación**
   - No hay sistema de autenticación implementado
   - Las citas son locales al navegador

3. **Características Pendientes**
   - Sistema de notificaciones
   - Calendario de disponibilidad en tiempo real
   - Sistema de reseñas de doctores

## Próximos Pasos

1. Implementar autenticación de usuarios
2. Conectar con backend real
3. Agregar sistema de notificaciones
4. Implementar sistema de reseñas
5. Agregar mapa de ubicaciones

## Estructura del Proyecto

### Directorios Principales

- `/app`: Contiene las páginas y rutas de la aplicación
  - `/specialties`: Página de especialidades médicas
  - `/doctors`: Página de doctores
  - `/appointments`: Página de citas

- `/components`: Componentes reutilizables de la aplicación
  - `/ui`: Componentes de interfaz de usuario base
  - `/specialty-card`: Tarjeta de especialidad médica
  - `/doctor-card`: Tarjeta de doctor
  - `/navbar`: Barra de navegación
  - `/styled`: Componentes con estilos personalizados

- `/types`: Definiciones de tipos TypeScript
  - `doctor.ts`: Interfaz para doctores
  - `appointment.ts`: Interfaz para citas

- `/data`: Datos mock y utilidades
  - `mock-data.ts`: Datos de ejemplo para doctores y especialidades

### Archivos Principales

1. **Tipos y Interfaces**
   - `types/doctor.ts`: Define la estructura de un doctor
     ```typescript
     interface Doctor {
       id: string
       name: string
       specialty: string
       description: string
       image?: string
       availability?: string
       location?: string
     }
     ```

2. **Componentes**
   - `components/specialty-card.tsx`: Tarjeta que muestra una especialidad médica
   - `components/doctor-card.tsx`: Tarjeta que muestra un doctor
   - `components/navbar.tsx`: Barra de navegación principal
   - `components/ui/`: Componentes base de la interfaz (botones, tarjetas, etc.)

3. **Páginas**
   - `app/specialties/page.tsx`: Página principal de especialidades
   - `app/doctors/page.tsx`: Página de listado de doctores
   - `app/appointments/page.tsx`: Página de gestión de citas

4. **Estilos**
   - `components/styled/common-styles.ts`: Estilos comunes reutilizables
   - `tailwind.config.js`: Configuración de Tailwind CSS

## Tecnologías Utilizadas

- **Next.js**: Framework de React para aplicaciones web
- **TypeScript**: Superset de JavaScript con tipado estático
- **Tailwind CSS**: Framework de CSS utilitario
- **Radix UI**: Biblioteca de componentes de UI accesibles
- **Styled Components**: Para estilos personalizados

## Instalación y Configuración

1. Clonar el repositorio:
   ```bash
   git clone [url-del-repositorio]
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador

## Características

- Visualización de especialidades médicas
- Listado de doctores por especialidad
- Sistema de reserva de citas
- Interfaz de usuario moderna y responsiva
- Componentes accesibles y reutilizables

## Estructura de Datos

### Doctores
Cada doctor tiene la siguiente estructura:
```typescript
{
  id: string
  name: string
  specialty: string
  description: string
  image?: string
  availability?: string
  location?: string
}
```

### Especialidades
Cada especialidad tiene la siguiente estructura:
```typescript
{
  id: string
  name: string
  description: string
  doctors: Doctor[]
}
```

## Contribución

1. Fork el repositorio
2. Crear una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles. 