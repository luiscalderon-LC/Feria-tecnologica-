// Inicialización exacta de tu paleta y tipografía de Tailwind CSS
window.tailwind.config = {
  theme: {
    extend: {
      colors: {
        'ods-bg':      '#E6E6FA', // Tu fondo Lavanda Claro original
        'ods-white':   '#F0F0F0', // Gris/Blanco para los paneles e interfaz
        'ods-purple':  '#A020F0', // Tu Morado principal
        'ods-dark':    '#1A1A24', // Texto oscuro para que resalte en el fondo claro
        'ods-border':  '#D1D1E9', // Bordes suaves
      },
      fontFamily: {
        display: ['Barlow Condensed', 'sans-serif'],
        ui:      ['Rajdhani', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
      },
    }
  }
};