/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace'],
      },
      colors: {
        brand: {
          50:  '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
      },
      animation: {
        'fade-up':      'fadeUp 0.7s ease-out forwards',
        'fade-up-slow': 'fadeUp 0.9s ease-out 0.2s forwards',
        'fade-in':      'fadeIn 0.8s ease-out forwards',
        'float':        'float 6s ease-in-out infinite',
        'glow-pulse':   'glowPulse 3s ease-in-out infinite',
        'blink':        'blink 1.1s step-end infinite',
        'slide-in':     'slideIn 0.5s ease-out forwards',
        'slide-right':  'slideRight 0.6s ease-out forwards',
        'orb-1':        'orb1 22s ease-in-out infinite',
        'orb-2':        'orb2 28s ease-in-out infinite',
        'orb-3':        'orb3 34s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139,92,246,0.25)' },
          '50%':      { boxShadow: '0 0 45px rgba(139,92,246,0.55)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        slideIn: {
          '0%':   { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        orb1: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '25%':      { transform: 'translate(120px, -90px) scale(1.06)' },
          '50%':      { transform: 'translate(70px, 130px) scale(0.96)' },
          '75%':      { transform: 'translate(-90px, 60px) scale(1.04)' },
        },
        orb2: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%':      { transform: 'translate(-110px, 100px) scale(1.09)' },
          '66%':      { transform: 'translate(100px, -110px) scale(0.92)' },
        },
        orb3: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%':      { transform: 'translate(-80px, -100px)' },
        },
      },
    },
  },
  plugins: [],
}
