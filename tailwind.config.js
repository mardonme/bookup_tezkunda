/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0a0a0b',
          800: '#0f0f0f',
          700: '#111111',
          600: '#151517',
          500: '#1b1b1f',
        },
        accent: {
          DEFAULT: '#ff004f',
          soft: '#ff3a73',
          glow: '#ff0050',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(255, 0, 79, 0.35)',
        'glow-lg': '0 0 80px rgba(255, 0, 79, 0.45)',
        soft: '0 10px 40px rgba(0,0,0,0.4)',
      },
      backgroundImage: {
        'grid-fade':
          'radial-gradient(ellipse at center, rgba(255,0,79,0.08), transparent 60%)',
        noise:
          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'pulse-slow': 'pulse 6s ease-in-out infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
