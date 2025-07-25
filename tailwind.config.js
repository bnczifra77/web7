module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "consulting-blue": "#007BFF",
      },
      backgroundImage: {
        "consulting-gradient": "linear-gradient(to right, #007BFF, #00BFFF)",
        "consulting-hero-gradient": "linear-gradient(to bottom right, #007BFF, #004080)",
      },
      boxShadow: {
        elegant: "0 10px 20px rgba(0,0,0,0.15)",
        soft: "0 5px 10px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
