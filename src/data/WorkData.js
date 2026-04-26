// work data

export const Work = [
  {
    id: 1,
    name: "EDA Pro - Automated EDA Web App",
    description:
      "A professional-grade Exploratory Data Analysis tool built with OOP principles. Automatically generates statistical summaries, detects outliers, computes correlations, surfaces human-readable insights, and exports PDF/HTML reports — all through an interactive Streamlit interface.",
    tags: [
      "python",
      "pandas",
      "numpy",
      "streamlit",
      "matplotlib",
      "seaborn",
      "oop",
    ],

    demo: "https://eda-pro-manglam.streamlit.app/",
    github: "https://github.com/Manglam11/eda_pro",
  },
  {
    id: 2,
    name: "Cookie Clicker Automation Bot",
    description:
      "A Selenium-based automation bot that plays Cookie Clicker autonomously. Continuously clicks the cookie, tracks real-time cookie count, extracts product names and prices from the dynamic DOM, and intelligently buys the most expensive affordable upgrade. Handles common Selenium exceptions like StaleElementReferenceException using JavaScript fallback clicks.",
    tags: ["python", "selenium", "automation", "web-scraping"],

    demo: "",
    github: "https://github.com/Manglam11/cookie_palying_bot",
  },
  {
    id: 3,
    name: "Deal Finder - Amazon Price Tracker",
    description:
      "A Python automation tool that scrapes live product prices from Amazon and sends an HTML email alert when the price drops below a target value. Automated to run daily using GitHub Actions, with secure credential management via environment variables.",
    tags: [
      "python",
      "beautifulsoup",
      "requests",
      "web-scraping",
      "automation",
      "smtplib",
    ],

    demo: "",
    github: "https://github.com/Manglam11/deal_finder",
  },

  {
    id: 4,
    name: "Stock News Alert System",
    description:
      "A Python automation system that monitors stock price movements using the Alpha Vantage API and sends real-time WhatsApp alerts with relevant news articles when the price change exceeds a set threshold. Combines financial data analysis, news aggregation, and the WhatsApp Cloud API.",
    tags: [
      "python",
      "requests",
      "alpha-vantage-api",
      "news-api",
      "whatsapp-api",
      "automation",
    ],

    demo: "",
    github: "https://github.com/Manglam11/trading_news_alert",
  },

  {
    id: 5,
    name: "Rain Alert - Weather Notification Bot",
    description:
      "A Python script that fetches hourly weather forecasts from the OpenWeather API, detects rain-related conditions using weather ID codes, and automatically sends a WhatsApp alert to carry an umbrella. Secure credential management using python-dotenv.",
    tags: [
      "python",
      "openweather-api",
      "whatsapp-api",
      "automation",
      "rest-api",
    ],

    demo: "",
    github: "https://github.com/Manglam11/rain_alert_sms",
  },
  {
    id: 6,
    name: "India States Guessing Game",
    description:
      "An interactive Python game that helps users learn Indian states by guessing their names on a map. Built using Turtle graphics and Pandas for data handling.",
    tags: ["python", "turtle", "pandas"],

    demo: "",
    github: "https://github.com/Manglam11/state_guessing_game",
  },
  {
    id: 7,
    name: "Turtle Crossing Game",
    description:
      "A classic arcade-style crossing game built in Python using OOP concepts. Includes increasing difficulty, collision detection, and smooth gameplay logic.",
    tags: ["python", "oop", "game-dev"],

    demo: "",
    github: "https://github.com/Manglam11/turtle_crossing",
  },
];
