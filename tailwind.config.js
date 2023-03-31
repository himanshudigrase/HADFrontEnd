/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}",
   "./screens/Home.{js,jsx,ts,tsx}",
   "./screens/Blog.{js,jsx,ts,tsx}",
   "./screens/Login.{js,jsx,ts,tsx}",
   "./screens/DemoData.{js,jsx,ts,tsx}",
   "./screens/Signup.{js,jsx,ts,tsx}",
   "./screens/Dashboard.{js,jsx,ts,tsx}",
   "./screens/MedHistory.{js,jsx,ts,tsx}",
   "./screens/DoctorList.{js,jsx,ts,tsx}",
   "./screens/breath.{js,jsx,ts,tsx}",
    "./components/Input.{js,jsx,ts,tsx}",
    "./components/Doctor.{js,jsx,ts,tsx}",
    "./components/DoctorCard.{js,jsx,ts,tsx}",
    "./components/Blogs.{js,jsx,ts,tsx}",
    "./components/BlogCard.{js,jsx,ts,tsx}",
    "./components/Activities.{js,jsx,ts,tsx}",
    "./components/ActivityCard.{js,jsx,ts,tsx}",
    "./components/Header.{js,jsx,ts,tsx}",
    "./components/CustomDrawer.{js,jsx,ts,tsx}",
    
    
],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'inter':['inter-black'],
      'interBold':['inter-bold'],
      'interRegular':['inter-regular'],
      'interSBold':['inter-semibold'],
      'interBlack':['inter-black'],
      'interEBold' :['inter-extrabold'],
      'interELight':['inter-extralight'],
      'interLight': ['inter-light'],
      'interMedium':['inter-medium'],

    },
    extend: {
      colors: {
        'backgr': '#f8f2eb',
        'textColor':'#1d253b',
        'texttt':'ffa500'
      },
    },
  },
  plugins: [],
  assets:['./assets/fonts']
}
