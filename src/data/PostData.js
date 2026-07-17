// post data
//
// ── NEW POSTS ADDED: ids 1–9 ──────────────────────────────────────────────
// For each new post you still need to fill THREE things:
//   1. Image  → drop img_14.png … img_22.png into src/data/PostImg/
//               (numbering follows the order you pasted the posts)
//   2. date   → use https://ollie-boyd.github.io/Linkedin-post-timestamp-extractor/
//   3. link   → paste the post URL (you'll have it when running the extractor)
// NOTE: the img14–img22 imports below are active, so the build will fail
//       until those 9 image files exist in PostImg/.
// ──────────────────────────────────────────────────────────────────────────

import img1 from "../data/PostImg/img_1.png";
import img2 from "../data/PostImg/img_2.png";
import img3 from "../data/PostImg/img_3.png";
import img4 from "../data/PostImg/img_4.png";
import img5 from "../data/PostImg/img_5.png";
import img6 from "../data/PostImg/img_6.png";
import img7 from "../data/PostImg/img_7.png";
import img8 from "../data/PostImg/img_8.png";
import img9 from "../data/PostImg/img_9.png";
import img10 from "../data/PostImg/img_10.png";
import img11 from "../data/PostImg/img_11.png";
import img12 from "../data/PostImg/img_12.png";
import img13 from "../data/PostImg/img_13.png";
// new post images
import img14 from "../data/PostImg/img_14.png"; // Titanic Data Visualization
import img15 from "../data/PostImg/img_15.png"; // Joining Venture Launcher
import img16 from "../data/PostImg/img_16.png"; // Spectra
import img17 from "../data/PostImg/img_17.png"; // Taska
import img18 from "../data/PostImg/img_18.png"; // Lead Generation Automation
import img19 from "../data/PostImg/img_19.png"; // LinkedIn humour meme
import img20 from "../data/PostImg/img_20.png"; // 1.5 month internship reflection
import img21 from "../data/PostImg/img_21.png"; // AirCast
import img22 from "../data/PostImg/img_22.png"; // Internship wrap — Head of Data Team

export const Blogs = [
  {
    id: 1,
    name: "Venture Launcher Internship — From Intern to Data Team Head",
    tags: ["dataanalytics", "webscraping", "python"],
    date: "Fri Jul 17 2026 ",
    imgSrc: img22,
    link: "https://www.linkedin.com/posts/manglam-dubey_dataanalytics-dataanalysis-python-activity-7483739782620246016-MSeN?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvyRcoBhtPsYcjw8xGjZYdsfGo4ewHFPkA",
  },
  {
    id: 2,
    name: "AirCast — Air Quality Forecasting for 141 Indian Cities",
    tags: ["machinelearning", "python", "timeseries"],
    date: "Wed Jul 08 2026", // TODO: fill via extractor
    imgSrc: img21,
    link: "https://www.linkedin.com/posts/manglam-dubey_machinelearning-datascience-python-activity-7480555406461919232-1ym_?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvyRcoBhtPsYcjw8xGjZYdsfGo4ewHFPkA", // TODO: paste post URL
  },
  {
    id: 3,
    name: "Venture Launcher — 1.5 Month Internship Reflection",
    tags: ["internship", "webscraping", "dataengineering"],
    date: "Wed Jun 17 2026", // TODO: fill via extractor
    imgSrc: img20,
    link: "https://www.linkedin.com/posts/manglam-dubey_internship-startups-webscraping-activity-7473012273687621633-rL4k?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvyRcoBhtPsYcjw8xGjZYdsfGo4ewHFPkA", // TODO: paste post URL
  },
  {
    id: 4,
    name: "LinkedIn Humour — Every CS Student After Lunch",
    tags: ["techhumor", "developerlife", "codinglife"],
    date: "Mon May 18 2026", // TODO: fill via extractor
    imgSrc: img19,
    link: "https://www.linkedin.com/posts/manglam-dubey_linkedinhumor-indiandeveloper-csstudent-activity-7462030469543669761-ZdoH?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvyRcoBhtPsYcjw8xGjZYdsfGo4ewHFPkA", // TODO: paste post URL
  },
  {
    id: 5,
    name: "Lead Generation Automation — Python Data Pipeline",
    tags: ["python", "automation", "dataengineering"],
    date: "Thu May 14 2026", // TODO: fill via extractor
    imgSrc: img18,
    link: "https://www.linkedin.com/posts/manglam-dubey_python-automation-leadgeneration-activity-7460754130060382208-UAnL?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvyRcoBhtPsYcjw8xGjZYdsfGo4ewHFPkA", // TODO: paste post URL
  },
  {
    id: 6,
    name: "Taska — Flask, WebSockets & PostgreSQL Task Manager",
    tags: ["flask", "websockets", "postgresql"],
    date: "Sat May 09 2026", // TODO: fill via extractor
    imgSrc: img17,
    link: "https://www.linkedin.com/posts/manglam-dubey_python-flask-webdevelopment-activity-7458873056388620288-kD2J?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvyRcoBhtPsYcjw8xGjZYdsfGo4ewHFPkA", // TODO: paste post URL
  },
  {
    id: 7,
    name: "Spectra — Automated EDA Platform in Python OOP",
    tags: ["python", "oop", "streamlit"],
    date: "Thu May 07 2026", // TODO: fill via extractor
    imgSrc: img16,
    link: "https://www.linkedin.com/posts/manglam-dubey_python-datascience-oop-activity-7458142596230569984-p2tw?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvyRcoBhtPsYcjw8xGjZYdsfGo4ewHFPkA", // TODO: paste post URL
  },
  {
    id: 8,
    name: "Joining Venture Launcher — Web Scraping Engineer Intern",
    tags: ["webscraping", "python", "internship"],
    date: "Mon May 04 2026", // TODO: fill via extractor
    imgSrc: img15,
    link: "https://www.linkedin.com/posts/manglam-dubey_webscraping-python-dataengineering-activity-7457086722548531200-_Ftj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvyRcoBhtPsYcjw8xGjZYdsfGo4ewHFPkA", // TODO: paste post URL
  },
  {
    id: 9,
    name: "Data Visualization Module — Titanic Dataset Insights",
    tags: ["datavisualization", "seaborn", "eda"],
    date: "Thu Apr 23 2026", // TODO: fill via extractor
    imgSrc: img14,
    link: "https://www.linkedin.com/posts/manglam-dubey_datascience-datavisualization-seaborn-activity-7453133617561608192-DR85?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvyRcoBhtPsYcjw8xGjZYdsfGo4ewHFPkA", // TODO: paste post URL
  },
  {
    id: 10,
    name: "Data Science Job Salaries — EDA & Visualization",
    tags: ["datascience", "datavisualization", "seaborn"],
    date: "Thu Apr 23 2026",
    imgSrc: img5,
    link: "https://www.linkedin.com/posts/manglam-dubey_datascience-datavisualization-seaborn-activity-7453133617561608192-DR85?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvyRcoBhtPsYcjw8xGjZYdsfGo4ewHFPkA",
  },
  {
    id: 11,
    name: "EDA Pro — Automated EDA Web App with Streamlit",
    tags: ["datascience", "python", "streamlit"],
    date: "Mon Apr 20 2026 ",
    imgSrc: img6,
    link: "https://www.linkedin.com/posts/manglam-dubey_datascience-python-streamlit-activity-7452047440003764224-9LAE?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvyRcoBhtPsYcjw8xGjZYdsfGo4ewHFPkA",
  },
  {
    id: 12,
    name: "Cookie Clicker Automation Bot — Selenium Project",
    tags: ["python", "selenium", "automation"],
    date: "Fri Mar 27 2026",
    imgSrc: img7,
    link: "https://www.linkedin.com/posts/manglam-dubey_python-selenium-automation-activity-7443200562512367616-SIvQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvyRcoBhtPsYcjw8xGjZYdsfGo4ewHFPkA",
  },
  {
    id: 13,
    name: "Stock News Alert System — WhatsApp Notification Bot",
    tags: ["python", "apis", "automation"],
    date: "Thu Mar 19 2026",
    imgSrc: img8,
    link: "https://www.linkedin.com/posts/manglam-dubey_python-apis-automation-activity-7440277180921663490-WimV?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvyRcoBhtPsYcjw8xGjZYdsfGo4ewHFPkA",
  },
  {
    id: 14,
    name: "Rain Alert — Weather Based WhatsApp Notification",
    tags: ["python", "apis", "automation"],
    date: "Tue Mar 17 2026",
    imgSrc: img9,
    link: "https://www.linkedin.com/posts/manglam-dubey_python-apis-automation-activity-7439597463990304768-bHw3?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvyRcoBhtPsYcjw8xGjZYdsfGo4ewHFPkA",
  },
  {
    id: 15,
    name: "Session Booking System — Python Web Development",
    tags: ["python", "flask", "backenddevelopment"],
    date: "Sun Feb 15 2026",
    imgSrc: img10,
    link: "https://www.linkedin.com/posts/manglam-dubey_python-flask-backenddevelopment-activity-7428743543743168512-WGeN?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvyRcoBhtPsYcjw8xGjZYdsfGo4ewHFPkA",
  },
  {
    id: 16,
    name: "Trading Bot — REST API Development",
    tags: ["python", "backenddevelopment", "apis"],
    date: "Fri Feb 13 2026",
    imgSrc: img11,
    link: "https://www.linkedin.com/posts/manglam-dubey_python-backenddevelopment-apis-activity-7428099199575048193-n7Nr?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvyRcoBhtPsYcjw8xGjZYdsfGo4ewHFPkA",
  },
  {
    id: 17,
    name: "Password Manager — Python Desktop App",
    tags: ["python", "tkinter", "100daysofcode"],
    date: "Thu Feb 12 2026 ",
    imgSrc: img12,
    link: "https://www.linkedin.com/posts/manglam-dubey_python-tkinter-100daysofcode-activity-7427698941997150208-Ssn0?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvyRcoBhtPsYcjw8xGjZYdsfGo4ewHFPkA",
  },
  {
    id: 18,
    name: "Pomodoro Timer — Pomodoro Desktop App",
    tags: ["python", "tkinter", "100daysofcode"],
    date: "Wed Feb 11 2026",
    imgSrc: img13,
    link: "https://www.linkedin.com/posts/manglam-dubey_python-tkinter-100daysofcode-activity-7427353727029665793-ZdSy?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvyRcoBhtPsYcjw8xGjZYdsfGo4ewHFPkA",
  },
  {
    id: 19,
    name: "States Guessing Game — Interactive Map Based Python Project",
    tags: ["python", "turtle", "pandas"],
    date: "Tue Feb 03 2026",
    imgSrc: img1,
    link: "https://www.linkedin.com/posts/manglam-dubey_python-learningbydoing-projects-activity-7424478559945027584-o05x?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvyRcoBhtPsYcjw8xGjZYdsfGo4ewHFPkA",
  },
  {
    id: 20,
    name: "Turtle Crossing Game — Arcade Style OOP Game in Python",
    tags: ["python", "oop", "turtle"],
    date: "Sat Jan 31 2026",
    imgSrc: img2,
    link: "https://www.linkedin.com/posts/manglam-dubey_python-oop-gamedevelopment-activity-7423390541897269249-5KBA?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvyRcoBhtPsYcjw8xGjZYdsfGo4ewHFPkA",
  },
  {
    id: 21,
    name: "Ping Pong Game — Classic Game Built with Python Turtle",
    tags: ["python", "game-dev", "turtle"],
    date: "Thu Jan 29 2026",
    imgSrc: img3,
    link: "https://www.linkedin.com/posts/manglam-dubey_python-oop-gamedevelopment-activity-7422674153805086720-GTYv?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvyRcoBhtPsYcjw8xGjZYdsfGo4ewHFPkA",
  },
  {
    id: 22,
    name: "Snake Game — Smooth Gameplay with Score Tracking",
    tags: ["python", "oop", "game-dev"],
    date: "Thu Jan 29 2026",
    imgSrc: img4,
    link: "https://www.linkedin.com/posts/manglam-dubey_built-a-snake-game-in-python-i-recently-activity-7422673180458176512-PX6E?utm_source=share&utm_medium=member_desktop&rcm=ACoAADvyRcoBhtPsYcjw8xGjZYdsfGo4ewHFPkA",
  },
];
