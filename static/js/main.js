// Configuración aislada del motor de Tailwind CSS para mapear tus clases
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'ods-bg':      '#E6E6FA', // Fondo Lavanda Claro
        'ods-white':   '#F0F0F0', // Paneles de interfaz
        'ods-purple':  '#A020F0', // Morado corporativo
        'ods-dark':    '#1A1A24', // Texto de contraste
        'ods-border':  '#D1D1E9', // Bordes
      },
      fontFamily: {
        display: ['Barlow Condensed', 'sans-serif'],
        ui:      ['Rajdhani', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
    }
  }
}