# Deptos Monte Hermoso

# Deptos Monte Hermoso

Una moderna Single Page Application (SPA) desarrollada en React para promocionar departamentos de alquiler en Monte Hermoso. El sitio incluye páginas informativas completas para huéspedes con toda la información necesaria para su estadía.

## ✨ Características Principales

### 🏠 Páginas de Departamentos
- **Vista Principal**: Listado de departamentos con galería de imágenes
- **Página de Detalle**: Información completa, amenities, ubicación y galería interactiva
- **Información para Huéspedes**: Página dedicada con toda la información práctica

### 📋 Información para Huéspedes Incluye:
- **WiFi**: Nombre de red y contraseña
- **Electrodomésticos**: Instrucciones detalladas para TV, aire acondicionado, pava eléctrica, etc.
- **Inventario Completo**: Lista detallada de utensilios, ropa de cama, elementos de limpieza
- **Lugares Cercanos**: Restaurantes, supermercados, atracciones con distancias y horarios
- **Contactos**: Anfitrión y números de emergencia
- **Mapa Interactivo**: Ubicación exacta del departamento
- **Acceso Rápido**: Botones para acciones frecuentes

### 🎨 Diseño y UX
- **Mobile-First**: Completamente responsivo
- **Animaciones Suaves**: Implementadas con Framer Motion
- **Design System**: Colores y tipografías consistentes
- **Navegación Intuitiva**: Fácil acceso entre páginas

## � Tecnologías Utilizadas

- **React 19** - Framework principal
- **Vite** - Build tool y dev server
- **React Router DOM** - Navegación y rutas
- **Framer Motion** - Animaciones y transiciones
- **Tailwind CSS** - Estilos y responsive design
- **Lucide React** - Iconografía
- **TypeScript** - Tipado estático

## � Estructura del Proyecto

```
deptos-monte-hermoso/
├── src/
│   ├── components/
│   │   └── guest-info/          # Componentes para páginas de huéspedes
│   │       ├── InfoSection.jsx   # Sección de información reutilizable
│   │       ├── InfoItem.jsx      # Item individual de información
│   │       ├── QuickAccess.jsx   # Accesos rápidos
│   │       ├── ContactCard.jsx   # Tarjetas de contacto
│   │       ├── NearbyPlaces.jsx  # Lugares cercanos
│   │       └── InventoryList.jsx # Listas de inventario
│   ├── data/
│   │   └── guestInfoData.js      # Datos específicos por departamento
│   ├── GuestInfoPage.jsx         # Página principal de información
│   └── styles.css               # Estilos con Tailwind
├── cms.js                       # Datos de departamentos
├── index.tsx                    # Aplicación principal
├── design_system.json          # Tokens de diseño
└── tailwind.config.js          # Configuración de Tailwind
```

## 🛣️ Rutas Disponibles

- `/` - Página principal con listado de departamentos
- `/:id` - Página de detalle del departamento (ej: `/depto-brava`)
- `/:id/info` - Información para huéspedes (ej: `/depto-brava/info`)

## 🏃‍♂️ Desarrollo

### Instalación
```bash
npm install
```

### Desarrollo Local
```bash
npm run dev
```

### Build para Producción
```bash
npm run build
```

## 📱 Funcionalidades de las Páginas de Huéspedes

### Accesos Rápidos
- **WiFi**: Muestra credenciales al instante
- **Contacto**: Abre WhatsApp con mensaje pre-cargado
- **Ubicación**: Abre Google Maps
- **Emergencia**: Muestra números importantes

### Secciones Informativas
1. **WiFi**: Red, contraseña y velocidad
2. **Electrodomésticos**: Instrucciones y tips para cada aparato
3. **Inventario**: Organizado por cocina, dormitorio y general
4. **Contactos**: Anfitrión y emergencias con botones de acción directa
5. **Lugares Cercanos**: Con descripción, distancia y horarios
6. **Mapa**: Ubicación exacta integrada

### Diseño Responsive
- **Mobile**: Diseño optimizado para pantallas pequeñas
- **Tablet**: Adaptación para pantallas medianas
- **Desktop**: Aprovechamiento completo del espacio

## 🎯 Beneficios para los Huéspedes

- **Información Centralizada**: Todo lo necesario en un solo lugar
- **Fácil Acceso**: URLs directas para compartir
- **Siempre Disponible**: Acceso 24/7 sin necesidad de llamar
- **Actualizable**: Información siempre al día
- **Multiidioma Ready**: Estructura preparada para internacionalización

## 🔧 Personalización

Para agregar nuevos departamentos:

1. **Actualizar `cms.js`** con los datos del nuevo departamento
2. **Agregar entrada en `guestInfoData.js`** con toda la información específica
3. **Las rutas se generan automáticamente** basadas en el ID del departamento

## � Contacto

Para consultas sobre el proyecto o los departamentos:
- **WhatsApp**: +54 2916 48-0599
- **Ubicación**: Monte Hermoso, Buenos Aires, Argentina

---

Desarrollado con ❤️ para brindar la mejor experiencia a nuestros huéspedes.
