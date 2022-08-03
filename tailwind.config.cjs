module.exports = {
  content: ["./src/pages/**/*.tsx", "./src/components/**/*.tsx"],
  theme: {
    fontFamily: {
      'latin': ['Amiri', 'serif'],
      'cyrilic': ['Vollkorn', 'serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'paper': '#f5f5f0',
      'cardboard': '#fff8ed',
      'carmine': '#330033',
      'black': '#000000',
      'ink': '#333333',
      'stamp': '#666666',
    },
    spacing: {
      '0': '0',
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
    },
    borderRadius: {
      'none': '0',
      'sm': '2px',
      DEFAULT: '8px',
      'md': '12px',
      'lg': '16px',
      'xl': '24px',
    },
  },
  plugins: [],
}
