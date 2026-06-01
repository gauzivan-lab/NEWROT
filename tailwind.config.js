/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ecru: '#EFE9E3',
        ivory: '#FAF8F5',
        sage: {
          light: '#DCD8C9',
        },
        olive: {
          mist: '#B5B09C',
          deep: '#6B705C',
          'deep-hover': '#5E6452',
        },
        taupe: {
          warm: '#A48F7A',
        },
        graphite: '#3A3A3A',
        slate: '#5A5A5A',
        border: '#E2DED6',
        gold: {
          light: '#D4AF37',
        },
        error: '#D66A6A',
        success: '#7AAE88',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h2': ['48px', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '600' }],
        'h3': ['32px', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h4': ['24px', { lineHeight: '1.35', fontWeight: '500' }],
        'body-l': ['18px', { lineHeight: '1.6', letterSpacing: '-0.005em' }],
        'body-m': ['16px', { lineHeight: '1.6' }],
        'body-s': ['15px', { lineHeight: '1.6' }],
        'caption': ['14px', { lineHeight: '1.5' }],
        'h1-mobile': ['40px', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '600' }],
        'h2-mobile': ['32px', { lineHeight: '1.25', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'container': '1200px',
      },
      borderRadius: {
        'card': '16px',
        'card-lg': '20px',
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(0, 0, 0, 0.04), 0 2px 8px rgba(0, 0, 0, 0.03)',
        'hover': '0 8px 40px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 32px rgba(107, 112, 92, 0.15)',
        'premium': '0 12px 48px rgba(0, 0, 0, 0.08), 0 6px 20px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
