# Consulta Psicológica - Frontend

Un proyecto React moderno para una plataforma de consultas psicológicas, construido con TypeScript, Vite, Tailwind CSS y PrimeReact.

## 🚀 Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Vite** - Herramienta de construcción rápida
- **Tailwind CSS** - Framework CSS utilitario
- **PrimeReact** - Biblioteca de componentes UI
- **Yarn** - Gestor de paquetes

## 📁 Estructura del Proyecto

```
src/
├── components/     # Componentes reutilizables
├── pages/         # Páginas de la aplicación
├── layouts/       # Layouts y plantillas
├── hooks/         # Custom hooks de React
├── utils/         # Funciones utilitarias
├── types/         # Definiciones de tipos TypeScript
├── assets/        # Recursos estáticos (imágenes, etc.)
└── ...
```

## 🛠️ Instalación y Configuración

### Prerrequisitos

- Node.js 20.19.0 o superior
- Yarn (recomendado) o npm

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd psico-front
   ```

2. **Instalar dependencias**
   ```bash
   yarn install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   yarn dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📜 Scripts Disponibles

- `yarn dev` - Ejecuta el servidor de desarrollo
- `yarn build` - Construye la aplicación para producción
- `yarn preview` - Previsualiza la build de producción
- `yarn lint` - Ejecuta el linter de ESLint

## 🎨 Características del Landing Page

- **Diseño Responsivo** - Optimizado para móviles, tablets y desktop
- **Hero Section** - Sección principal con llamadas a la acción
- **Servicios** - Catálogo de servicios psicológicos
- **Por qué Elegirnos** - Ventajas competitivas
- **Estadísticas** - Métricas de la empresa
- **Footer** - Información de contacto y enlaces

## 🧩 Componentes Principales

- `MainLayout` - Layout principal con header y footer
- `HomePage` - Página de inicio con todas las secciones
- Componentes de PrimeReact integrados (Button, Card, etc.)

## 🎯 Próximos Pasos

- [ ] Implementar sistema de rutas con React Router
- [ ] Crear formularios de contacto y citas
- [ ] Integrar con backend API
- [ ] Implementar autenticación de usuarios
- [ ] Agregar panel de administración
- [ ] Optimizar para SEO

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- Email: info@consultapsicologica.com
- Teléfono: (123) 456-7890
- Horarios: Lunes - Viernes 9:00 AM - 6:00 PM

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
