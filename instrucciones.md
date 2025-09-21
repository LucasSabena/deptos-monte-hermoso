# Proyecto: Creación de la Web "Deptos Monte Hermoso" (Stack con React)

## 1. Objetivo Principal

Crear un sitio web de una sola página (landing page) moderno, minimalista y visualmente atractivo para promocionar dos departamentos en alquiler en Monte Hermoso. **El sitio se desarrollará como una Single Page Application (SPA) usando React.** El objetivo secundario es crear un componente de página de detalle reutilizable para cada departamento. La web debe ser totalmente responsiva (mobile-first) y estar optimizada para SEO básico.

## 2. Personalidad y Estilo Visual

* **Estilo:** Minimalista, limpio, moderno, elegante.
* **Enfoque:** Prioridad absoluta a las fotografías de alta calidad. El texto debe ser breve y conciso.
* **Diseño:** Utilizar abundantemente el espacio en blanco para dar una sensación de calma y amplitud.
* **Referencia Visual:** Inspirarse en webs de estudios de arquitectura o constructoras modernas.
* **Sistema de Diseño:** Aplicar estrictamente los valores definidos en el archivo `design-system.json` para colores, tipografías, espaciados y componentes.
* **Animaciones:** **Todas las interacciones y transiciones deben ser suaves y sutiles, reforzando la sensación de calidad y modernidad.**

## 3. Especificaciones Técnicas 🚀

* **Framework:** **React.js (usando Vite para la configuración inicial).**
* **Estilo:** **Tailwind CSS.** Configurar el archivo `tailwind.config.js` para usar los tokens del `design-system.json` en la paleta de colores (`colors`), tipografías (`fontFamily`), etc.
* **Animaciones:** **Utilizar la librería `Framer Motion` para todas las animaciones,** como la aparición de elementos al hacer scroll (scroll-triggered animations) y las interacciones de hover.
* **Iconos:** **Utilizar exclusivamente la librería `radix-ui/react-icons`.**
* **Responsividad:** **Diseñar con un enfoque "mobile-first", asegurando una experiencia perfecta en todos los tamaños de pantalla.**

## 4. Estructura de Componentes en React

El sitio se compondrá de varios componentes reutilizables.

1.  **Página Principal (`HomePage.jsx`):** Contendrá las siguientes secciones/componentes.
2.  **Página de Detalle (`DetailPage.jsx`):** Un componente que recibirá los datos de un departamento (fotos, descripción, etc.) como `props`.

---

### 4.1. Componentes de la Página Principal

**a) `Header.jsx`:**
* Muy simple. A la izquierda, el logo/nombre: "Deptos Monte Hermoso".
* A la derecha, un componente `Button.jsx` con el texto "Consultar por WhatsApp".

**b) `Hero.jsx`:**
* Fotografía a pantalla completa de fondo.
* Título `H1` y subtítulo `H3` centrados.
* **Animación:** El texto debe aparecer con un suave efecto de "fade-in" y "slide-up" al cargar la página.

**c) `DepartmentList.jsx`:**
* Un título de sección (`H2`): "Conocé nuestros departamentos".
* Renderizará dos componentes `DepartmentCard.jsx`.
* **Animación:** La sección completa debe aparecer con un "fade-in" al scrollear hasta ella.

**d) `DepartmentCard.jsx`:**
* Recibe los datos de un departamento como `props` (imagen, nombre, capacidad, etc.).
* **Contenido:** Imagen destacada, nombre del depto, características clave con **iconos de Radix**, y un botón "Ver más detalles".
* **Animación:**
    * **Hover:** Al pasar el mouse, la tarjeta debe escalar ligeramente (ej: `scale: 1.03`) y la sombra debe pronunciarse sutilmente. La transición debe ser suave (`ease-in-out`).
    * **Scroll:** Cada tarjeta puede tener un ligero retraso en su animación de entrada para un efecto más dinámico.

**e) `ContactFooter.jsx`:**
* Título (`H2`), texto breve y un botón grande de WhatsApp.
* Footer simple con el copyright.

---

### 4.2. Componente de Página de Detalle (`DetailPage.jsx`)

Este componente se mostrará cuando el usuario navegue a la ruta de un departamento específico (ej: `/depto/el-faro`).

**a) `ImageGallery.jsx`:**
* Un carrusel o grilla de imágenes.
* **Animación:** Las imágenes deben hacer un "fade-in" al cargar. Las flechas de navegación del carrusel deben tener un sutil efecto de hover.

**b) `AmenitiesList.jsx`:**
* Un `H2` que diga "Comodidades incluidas".
* Mapear una lista de amenities y renderizar cada una con su respectivo **icono de Radix (ej: `<CheckIcon />`, `<PersonIcon />`, etc.)** y el texto.
* **Animación:** La lista debe aparecer con un efecto "stagger", donde cada ítem aparece uno después del otro con un pequeño retraso.

**c) `FloatingCTA.jsx`:**
* Un componente de botón que se mantiene fijo en la parte inferior de la pantalla en móviles o en una esquina en escritorio.
* Texto: "Consultar por este depto".
* **Animación:** Debe aparecer con un "slide-in" después de que el usuario haya hecho un poco de scroll hacia abajo en la página.

## 5. Optimización SEO Básica

* **Títulos y Metas:** Usar `react-helmet` o una librería similar para gestionar dinámicamente los `<title>` y `<meta name="description">` de cada página.
* **Imágenes:** Todas las imágenes (`<img>`) deben tener un atributo `alt` descriptivo.
* **HTML Semántico:** Utilizar etiquetas semánticas (`<header>`, `<main>`, `<section>`) dentro de los componentes de React para una estructura correcta.