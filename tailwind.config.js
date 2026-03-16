/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#CC5500',
          dark: '#AA4400',
          light: '#EE6600',
        },
        secondary: {
          DEFAULT: '#E85D2E',
          dark: '#B84724',
          light: '#FF9E6B',
        },
        bg: {
          DEFAULT: '#0A0A0A',
          surface: '#141414',
          variant: '#1F1F1F',
        },
        border: '#2D2D2D',
        success: '#4ADE80',
        error: '#F87171',
        warning: '#FBBF24',
        info: '#60A5FA',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'marquee': 'marquee 30s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        glow: {
          from: { boxShadow: '0 0 20px rgba(204,85,0,0.3)' },
          to: { boxShadow: '0 0 60px rgba(204,85,0,0.7)' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
}
