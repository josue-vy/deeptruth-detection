/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '96': '24rem',  // 384px
        '104': '26rem', // 416px
        '112': '28rem', // 448px
        '120': '30rem', // 480px
        '128': '32rem', // 512px
        '136': '34rem',   // 544px
        '144': '36rem',   // 576px
        '152': '38rem',   // 608px
        '160': '40rem',   // 640px
      },
      height: {
        '96': '24rem',  // 384px
        '104': '26rem', // 416px
        '112': '28rem', // 448px
        '120': '30rem', // 480px
        '128': '32rem', // 512px
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

