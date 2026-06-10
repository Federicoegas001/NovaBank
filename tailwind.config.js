/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        nova: {
          bg: '#080920',
          card: '#0e1035',
          'card-alt': '#111440',
          border: 'rgba(255,255,255,0.08)',
          purple: '#7c3aed',
          'purple-light': '#8b5cf6',
          'purple-dim': 'rgba(124,58,237,0.15)',
          muted: '#7b82a8',
          'muted-light': '#a0a8c8',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 0 0 1px rgba(255,255,255,0.08), 0 32px 64px rgba(0,0,0,0.5)',
        input: '0 0 0 2px rgba(124,58,237,0.5)',
        btn: '0 4px 24px rgba(124,58,237,0.4)',
      },
    },
  },
  plugins: [],
}
