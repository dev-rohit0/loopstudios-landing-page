module.exports = {
  content: ["*"],
  theme: {

    screens: {
      'mobile': '375px',
      'desktop': '580px',
      'sm': '620px',
      'md': '750px',
      'lg': '1024px',
      'xl': '1180px'
    },
    extend: {
      colors: {
        'veryDarkGray': 'hsl(0, 0%, 41%)',
        'darkGray': 'hsl(0, 0%, 55%)',
      },
      fontFamily: {
        'alata':['Alata', 'sans-serif'],
        'josefin':['Josefin Sans', 'sans-serif'],
      },
      fontSize:{
        'loop':'15px'
      }
    },
  },
  plugins: [],
}