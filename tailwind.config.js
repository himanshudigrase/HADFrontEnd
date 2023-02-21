/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}",
   "./screens/Home.{js,jsx,ts,tsx}",
   "./screens/Login.{js,jsx,ts,tsx}",
   "./screens/DemoData.{js,jsx,ts,tsx}",
   "./screens/Signup.{js,jsx,ts,tsx}",
   "./screens/Dashboard.{js,jsx,ts,tsx}",
   "./screens/MedHistory.{js,jsx,ts,tsx}",
],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
    },
    extend: {
      colors: {
        'backgr': '#f8f2eb',
        'textColor':'#1d253b',
      },
    },
  },
  plugins: [],
}
