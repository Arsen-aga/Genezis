 module.exports = {
   content: ["./app/*.html", "./app/**/*.svg"],
   theme: {
     screens: {
       xs: "375px",
       sm: "468px",
       md: "540px",
       lg: "720px",
       xl: "960px",
       "2xl": "1140px",
       "3xl": "1200px",
       "4xl": "1360px",
       "5xl": "1550px",
     },
     container: {
       center: true,
       padding: {
         DEFAULT: "20px",
         xs: "16px",
         sm: "16px",
       },
     },
     fontFamily: {
       "manrope-700": "Manrope-Bold",
       "manrope-600": "Manrope-SemiBold",
       "manrope-500": "Manrope-Medium",
       "manrope-400": "Manrope-Regular",
       "manrope-200": "Manrope-ExtraLight",
     },
     extend: {
       colors: {
         accent: "#157EAA",
         default: "#202020",
         brand: "#EF7F1A",
         milk: "#FFFAFA",
         gray: "#686868",
         divider: "#E5E2EE",
         neutrallight: "#C4C5D9",
         jadelight: "#F2FBFF",
         jadegravel: "#30ACDC",
         neutral: "#7A7687",
         alpha: "#FFFAFAB2",
         pastel: "#D5D1E1",
         rose: "#FFF5F6",
       },
       backgroundImage: {
         banner: "url('../img/banner/1.png')",
         "service-top": "url('../img/content/service/bg.jpg')",
       },
       boxShadow: {
         popup:
           "0px 8px 12px 0px rgba(18, 19, 22, 0.15), 0px 0px 1px 0px rgba(18, 19, 22, 0.31)",
       },
     },
   },
   plugins: [],
 };