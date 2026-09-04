#  Gestor de Videojuegos

> Un catálogo interactivo de videojuegos con carrusel, búsqueda en tiempo real, autenticación simulada y un asistente con IA.

---

## 🚀 **Características**

- 📱 **Diseño responsive** adaptable a móviles, tablets y escritorio.
- 🎠 **Carrusel interactivo** con Swiper.js y efecto coverflow.
- 🔍 **Búsqueda en tiempo real** para filtrar juegos al instante.
- 🔐 **Autenticación simulada** con login/registro.
- 🤖 **Asistente con IA** (GameMaster) integrado para responder preguntas sobre videojuegos.
- 🎮 **Enlaces directos** a juegos .io (Slither.io, Agar.io, Hole.io).
- 🍔 **Menú lateral** con acceso rápido a todas las secciones.
- ✨ **Efectos visuales** como glow al hacer scroll y hover en tarjetas.

---

## 🛠️ **Tecnologías utilizadas**

| Tecnología | Descripción |
|------------|-------------|
| **React** | Biblioteca para construir la interfaz de usuario |
| **Vite** | Herramienta de construcción rápida para desarrollo |
| **Swiper.js** | Librería para el carrusel táctil |
| **React Icons** | Íconos personalizables para la interfaz |
| **CSS3** | Estilos modernos con gradientes, blur y animaciones |
| **GitHub Pages** | Despliegue del sitio estático |

---

## 📂 **Estructura del proyecto**
Gestor-videojuegos/
├── public/
│ └── favicon.svg
├── src/
│ ├── assets/
│ │ ├── Zelda.jpg
│ │ ├── Mario_Odyssey.jpg
│ │ ├── Ninja_Gaiden.jpg
│ │ ├── Hole.jpg
│ │ ├── slither.jpg
│ │ └── agario.jpg
│ ├── components/
│ │ ├── LoginModal.jsx
│ │ ├── LoginModal.css
│ │ ├── Chatbot.jsx
│ │ ├── Chatbot.css
│ │ └── AuthContext.jsx
│ ├── services/
│ │ └── authService.js
│ ├── App.jsx
│ ├── App.css
│ ├── main.jsx
│ └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md

---

## 🚀 **Instalación y uso**

### **1. Clonar el repositorio**
**Bash**
git clone https://github.com/Alan-Daniel-Vargas-Rocha/Gestor-videojuegos.git
cd Gestor-videojuegos
2. Instalar dependencias
bash
npm install
3. Ejecutar en modo desarrollo
bash
npm run dev
4. Construir para producción
bash
npm run build
5. Desplegar en GitHub Pages
bash
npm run deploy

---  

🎮 Juegos incluidos (temporalmente)
Juego	Descripción	Enlace
Slither.io	Come y crece controlando una serpiente	Jugar
Agar.io	Devora a otros jugadores y hazte más grande	Jugar
Hole.io	Trágate la ciudad y conviértete en el agujero más grande	Jugar

--- 

🤖 Asistente GameMaster
GameMaster es un asistente con IA que responde preguntas sobre videojuegos. Está conectado a una API en Python que utiliza Groq para generar respuestas con un tono gamer y amigable.

Ejemplo de interacción:

👤: "¿Qué juegos me recomiendas?"

🤖: "¡Claro! Si te gusta la acción, te recomiendo God of War. Si prefieres algo más relajado, prueba con Zelda. ¿Qué tipo de juegos te gustan?"

🎨 Personalización
Agregar más juegos
Edita el array juegos en App.jsx:

javascript
const juegos = [
  {
    id: 1,
    nombre: "Mi Juego",
    imagen: miImagen,
    desc: "Descripción del juego",
    url: "https://ejemplo.com"
  },
  // Agrega más juegos aquí
]
Cambiar colores
Modifica las variables en App.css o los estilos en línea de App.jsx.

📱 Responsive
El diseño se adapta automáticamente a diferentes tamaños de pantalla:

Escritorio: 3 tarjetas visibles

Tablet: 2.5 tarjetas visibles

Móvil: 1.2 tarjetas visibles

🐛 Problemas conocidos
El chatbot requiere que la API de Python esté corriendo en https://api-chatbot-6p1r.onrender.com.

Los juegos .io pueden tener problemas de carga dependiendo del navegador o la región.

🤝 Contribuciones
Las contribuciones son bienvenidas. Si encuentras un bug o tienes una sugerencia, abre un issue o envía un pull request.

📄 Licencia
Este proyecto está bajo la licencia MIT.

👨‍💻 Autor
Alan Daniel Vargas Rocha

GitHub: @Alan-Daniel-Vargas-Rocha

🙏 Agradecimientos
React

Vite

Swiper

React Icons

Groq para la API del chatbot

¡Disfruta tu gestor de videojuegos! 🎮✨
