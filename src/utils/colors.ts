/**
 * Paleta de colores del proyecto Consulta Psicológica
 * 
 * Color Primario: Teal (Verde agua)
 * Color Secundario: Stone (Color piel)
 */

export const colors = {
  // Color Primario - Teal (Verde agua)
  primary: {
    50: '#f0fdfa',   // teal-50 - Fondo muy claro
    100: '#ccfbf1',  // teal-100 - Fondo claro
    200: '#99f6e4',  // teal-200 - Bordes y separadores
    300: '#5eead4',  // teal-300 - Elementos secundarios
    400: '#2dd4bf',  // teal-400 - Acentos y highlights
    500: '#14b8a6',  // teal-500 - Color principal (botones, enlaces)
    600: '#0d9488',  // teal-600 - Texto importante
    700: '#0f766e',  // teal-700 - Texto muy importante
    800: '#115e59',  // teal-800 - Títulos y encabezados
    900: '#134e4a',  // teal-900 - Texto principal muy oscuro
  },

  // Color Secundario - Stone (Color piel)
  secondary: {
    50: '#fafaf9',   // stone-50 - Piel muy clara
    100: '#f5f5f4',  // stone-100 - Piel clara
    200: '#e7e5e4',  // stone-200 - Piel medio claro
    300: '#d6d3d1',  // stone-300 - Piel medio
    400: '#a8a29e',  // stone-400 - Piel medio oscuro
    500: '#78716c',  // stone-500 - Piel oscuro
    600: '#57534e',  // stone-600 - Piel muy oscuro
    700: '#44403c',  // stone-700 - Piel muy oscuro
    800: '#292524',  // stone-800 - Piel casi negro
    900: '#1c1917',  // stone-900 - Piel negro
  },

  // Grises neutros
  gray: {
    50: '#f9fafb',   // gray-50
    100: '#f3f4f6',  // gray-100
    200: '#e5e7eb',  // gray-200
    300: '#d1d5db',  // gray-300
    400: '#9ca3af',  // gray-400
    500: '#6b7280',  // gray-500
    600: '#4b5563',  // gray-600
    700: '#374151',  // gray-700
    800: '#1f2937',  // gray-800
    900: '#111827',  // gray-900
  }
};

// Clases de Tailwind para uso rápido
export const tailwindClasses = {
  // Primario - Teal
  primary: {
    bg: {
      50: 'bg-teal-50',
      100: 'bg-teal-100',
      200: 'bg-teal-200',
      300: 'bg-teal-300',
      400: 'bg-teal-400',
      500: 'bg-teal-500',
      600: 'bg-teal-600',
      700: 'bg-teal-700',
      800: 'bg-teal-800',
      900: 'bg-teal-900',
    },
    text: {
      50: 'text-teal-50',
      100: 'text-teal-100',
      200: 'text-teal-200',
      300: 'text-teal-300',
      400: 'text-teal-400',
      500: 'text-teal-500',
      600: 'text-teal-600',
      700: 'text-teal-700',
      800: 'text-teal-800',
      900: 'text-teal-900',
    },
    border: {
      50: 'border-teal-50',
      100: 'border-teal-100',
      200: 'border-teal-200',
      300: 'border-teal-300',
      400: 'border-teal-400',
      500: 'border-teal-500',
      600: 'border-teal-600',
      700: 'border-teal-700',
      800: 'border-teal-800',
      900: 'border-teal-900',
    }
  },

  // Secundario - Stone
  secondary: {
    bg: {
      50: 'bg-stone-50',
      100: 'bg-stone-100',
      200: 'bg-stone-200',
      300: 'bg-stone-300',
      400: 'bg-stone-400',
      500: 'bg-stone-500',
      600: 'bg-stone-600',
      700: 'bg-stone-700',
      800: 'bg-stone-800',
      900: 'bg-stone-900',
    },
    text: {
      50: 'text-stone-50',
      100: 'text-stone-100',
      200: 'text-stone-200',
      300: 'text-stone-300',
      400: 'text-stone-400',
      500: 'text-stone-500',
      600: 'text-stone-600',
      700: 'text-stone-700',
      800: 'text-stone-800',
      900: 'text-stone-900',
    },
    border: {
      50: 'border-stone-50',
      100: 'border-stone-100',
      200: 'border-stone-200',
      300: 'border-stone-300',
      400: 'border-stone-400',
      500: 'border-stone-500',
      600: 'border-stone-600',
      700: 'border-stone-700',
      800: 'border-stone-800',
      900: 'border-stone-900',
    }
  }
};

// Combinaciones predefinidas para casos de uso comunes
export const colorCombinations = {
  // Navegación activa (como en el topbar)
  navigationActive: {
    text: 'text-teal-600',
    bg: 'bg-teal-50',
    hover: 'hover:text-teal-600'
  },
  
  // Botones primarios
  buttonPrimary: {
    bg: 'bg-teal-500',
    text: 'text-white',
    hover: 'hover:bg-teal-600',
    focus: 'focus:ring-teal-500'
  },
  
  // Botones secundarios
  buttonSecondary: {
    bg: 'bg-stone-200',
    text: 'text-stone-700',
    hover: 'hover:bg-stone-300',
    focus: 'focus:ring-stone-500'
  },
  
  // Fondos de sección
  sectionBg: {
    light: 'bg-stone-50',
    medium: 'bg-stone-100',
    dark: 'bg-stone-200'
  },
  
  // Texto
  text: {
    primary: 'text-teal-600',
    secondary: 'text-stone-600',
    muted: 'text-stone-500',
    light: 'text-stone-400'
  }
};

export default colors; 