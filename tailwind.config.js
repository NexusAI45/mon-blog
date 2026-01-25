/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neural': {
          bg: '#0B0E14',
          grid: '#1A1F2B',
          cyan: '#00F5FF',
          magenta: '#FF007A',
        }
      },
      fontFamily: {
        'heading': ['Michroma', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 20px #00F5FF',
        'glow-magenta': '0 0 20px #FF007A',
        'glow-cyan-lg': '0 0 40px #00F5FF, 0 0 80px #00F5FF33',
        'glow-magenta-lg': '0 0 40px #FF007A, 0 0 80px #FF007A33',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'grid-move': 'grid-move 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'grid-move': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
