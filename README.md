# Deptos Monte Hermoso

Una página web moderna y minimalista para promocionar dos departamentos en alquiler en Monte Hermoso, Argentina.

## 🚀 Características

- **Diseño minimalista y responsivo** - Optimizado para mobile-first
- **SPA con React** - Navegación fluida sin recargas
- **URLs específicas** - Cada departamento tiene su propio link para compartir
- **Galería de imágenes** - Carrusel deslizable con lightbox
- **Videos personalizados** - Reproductor custom con controles
- **Mapa integrado** - Google Maps embebido
- **Animaciones suaves** - Framer Motion para transiciones elegantes

## 🛠️ Tecnologías

- **React 19** - Framework principal
- **Vite** - Build tool y dev server
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Framer Motion** - Animaciones
- **React Router** - Routing
- **Radix UI Icons** - Iconografía

## 📦 Instalación y uso

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/LucasSabena/deptos-monte-hermoso.git
   cd deptos-monte-hermoso
   ```

2. **Instala dependencias:**
   ```bash
   npm install
   ```

3. **Ejecuta en desarrollo:**
   ```bash
   npm run dev
   ```

4. **Build para producción:**
   ```bash
   npm run build
   ```

5. **Preview del build:**
   ```bash
   npm run preview
   ```

## 🌐 Deploy en Vercel

Este proyecto está configurado para deploy automático en Vercel.

### Deploy manual:
1. Conecta tu repo de GitHub a Vercel
2. Vercel detectará automáticamente la configuración de Vite
3. El deploy se hará automáticamente en cada push

### URLs del proyecto:
- **Home:** `/`
- **Departamento Brava:** `/brava`
- **Departamento Agreste II:** `/agreste-ii`

## 📁 Estructura del proyecto

```
deptos-monte-hermoso/
├── public/
├── src/
│   ├── cms.js              # Datos de los departamentos
│   ├── index.tsx           # Componentes y lógica principal
│   └── ...
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🎨 Diseño

- **Paleta de colores:** Azul verdoso, beige arena, rosa coral
- **Tipografía:** Satoshi
- **Estilo:** Minimalista, moderno, enfocado en fotografías

## 📱 Características técnicas

- **SEO básico** con React Helmet
- **Accesibilidad** con etiquetas semánticas
- **Performance** optimizada con Vite
- **PWA ready** (se puede extender)

## 🤝 Contribuir

Si quieres contribuir:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y propiedad de sus creadores.

---

**Desarrollado con ❤️ para Monte Hermoso**
