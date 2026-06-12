export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif']
      },
      colors: {
        obsidian: '#05070A',
        graphite: '#11151B',
        stone: '#E8E2D6',
        champagne: '#C8A96A',
        platinum: '#F4F1EA'
      },
      boxShadow: {
        glow: '0 30px 90px rgba(200,169,106,0.16)'
      }
    }
  },
  plugins: []
}
