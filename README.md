# 🧬 Laboratorio Aracil - Sitio Web Institucional

> **Patología de Precisión Personalizada desde 1984**

Sitio web institucional del Laboratorio Aracil, el laboratorio de anatomía patológica más antiguo de Tandil, oficialmente habilitado y comprometido con la excelencia en el diagnóstico médico.

## 🌟 Características Principales

- **🏠 Página de Inicio** - Presentación institucional con hero section y características destacadas
- **👥 Sobre Nosotros** - Historia y misión del laboratorio desde 1984
- **🔬 Servicios** - Información detallada sobre histopatología e inmunohistoquímica
- **👨‍⚕️ Equipo** - Perfiles del equipo médico especializado
- **📋 Instructivos** - Guías y procedimientos para pacientes
- **📞 Contacto** - Información de contacto y ubicación
- **💬 WhatsApp Flotante** - Botón de contacto directo vía WhatsApp
- **📱 Diseño Responsivo** - Optimizado para dispositivos móviles y desktop

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 18** - Biblioteca principal para la interfaz de usuario
- **Vite** - Herramienta de construcción rápida y moderna
- **React Router DOM** - Enrutamiento del lado del cliente
- **Tailwind CSS** - Framework de CSS utilitario
- **Framer Motion** - Animaciones y transiciones suaves

### Componentes UI
- **Radix UI** - Componentes accesibles y sin estilos
- **Lucide React** - Iconografía moderna y consistente
- **React Helmet** - Gestión de metadatos SEO

### Herramientas de Desarrollo
- **ESLint** - Linting de código JavaScript
- **PostCSS** - Procesamiento de CSS
- **Autoprefixer** - Prefijos CSS automáticos

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes de interfaz base
│   ├── Header.jsx      # Navegación principal
│   ├── Footer.jsx      # Pie de página
│   ├── HeroImage.jsx   # Componente de imagen hero personalizada
│   └── WhatsAppFloat.jsx # Botón flotante de WhatsApp
├── pages/              # Páginas de la aplicación
│   ├── Home.jsx        # Página principal
│   ├── About.jsx       # Sobre nosotros
│   ├── Services.jsx    # Servicios
│   ├── Team.jsx        # Equipo
│   ├── Instructions.jsx # Instructivos
│   └── Contact.jsx     # Contacto
├── lib/                # Utilidades y helpers
└── main.jsx           # Punto de entrada de la aplicación
```

## 🛠️ Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/agusruiz11/lab_web.git
   cd lab_web
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Vista previa de la construcción de producción

## 🎨 Personalización

### Colores del Tema
El proyecto utiliza una paleta de colores profesional centrada en azules:
- **Azul Principal**: `#1e40af` (blue-800)
- **Azul Secundario**: `#3b82f6` (blue-500)
- **Azul Claro**: `#dbeafe` (blue-100)

### Favicon Personalizado
El sitio incluye un favicon SVG personalizado con el ícono de microscopio que mantiene consistencia visual con el logo del header.

### Componentes Personalizables
- **HeroImage**: Tarjeta informativa personalizable con datos del laboratorio
- **Header**: Navegación con logo y menú responsivo
- **Footer**: Información institucional y enlaces

## 📱 Funcionalidades Específicas

### SEO Optimizado
- Meta tags dinámicos por página
- Estructura semántica HTML5
- Open Graph tags para redes sociales
- Sitemap automático

### Accesibilidad
- Componentes Radix UI accesibles
- Navegación por teclado
- Contraste de colores optimizado
- Etiquetas ARIA apropiadas

### Performance
- Lazy loading de imágenes
- Optimización de bundles con Vite
- Compresión automática de assets
- Caching estratégico

## 🚀 Despliegue

### Vercel (Recomendado)
El proyecto está configurado para despliegue automático en Vercel:

1. Conecta tu repositorio de GitHub a Vercel
2. El despliegue se realiza automáticamente en cada push
3. URL de producción: `https://lab-web-zeta.vercel.app/`

### Configuración de Vercel
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node.js Version**: 18.x

## 📊 Información del Laboratorio

### Datos Institucionales
- **Nombre**: Laboratorio Aracil
- **Especialidad**: Anatomía Patológica
- **Ubicación**: Tandil, Argentina
- **Fundación**: 1984
- **Estado**: Oficialmente habilitado

### Servicios Ofrecidos
- Histopatología general
- Inmunohistoquímica
- Diagnósticos de precisión
- Trabajo con obras sociales y prepagas

## 🤝 Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y pertenece al Laboratorio Aracil.

## 📞 Contacto

- **Sitio Web**: [https://laboratorioaracil.ar](https://laboratorioaracil.ar)
- **WhatsApp**: +54 249 442-1234
- **Ubicación**: Tandil, Argentina

---

*Desarrollado con ❤️ para el Laboratorio Aracil - "Donde usted no es nuestro paciente, usted es nuestra preocupación"*
