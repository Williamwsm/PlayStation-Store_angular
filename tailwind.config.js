/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {  backgroundImage: {
      'custom-gradient': 'linear-gradient(90deg, rgb(225, 224, 224) 0%, rgb(237, 236, 236) 0%, rgb(230, 230, 230) 100%)',
    },
    backgroundImage: {
      'fundo-playstation': "url('https://image.api.playstation.com/pr/bam-art/198/224/863feb97-dfc4-4862-af6d-d2f78dd4342a.jpg?w=1920&thumb=false')"
    }
  },
  },
  plugins: [],
}
