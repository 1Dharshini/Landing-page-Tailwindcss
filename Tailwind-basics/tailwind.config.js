module.exports = {
  content: [
    
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colorS: {
        'pure-red':'#FF0000',
        'dharshini-orange':"#E64A19"
      },
      fontweight:{
        "Dharshinibold":500
      }
    },
  
  fontFamily:{
    bebas:['Bebas Neue','sans-serif']
  },
  fontsize:{
    sm:'08rem',
    base:'1rem',
    xl:'1.25rem',
    '2xl':'1.563rem',
    '3xl':'1.953rem',
    '4xl':'2.441rem',
    '5xl':'3.052rem',
    '6xl':'4.252rem',
  },
  screens:{
    'tablet':'640px',
    'laptop':'1024px',
    'desktop':'1280px',
  }
  },
  plugins: [],
  darkMode:"selector"
}
