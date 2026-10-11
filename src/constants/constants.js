import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  python,
  kotlin,
  java,
  android,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  postgre,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  aws,
  firebase,
  shoestore,
  domi,
  acp,
  addin,waku,
  carracer,
  gamerec,
  cryptotracker,
  zoo,
  heartfailure,
  ipcalc,
  mlclone,
  reeduk,
  tradingbot,
  vital
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Android",
    icon: android,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "postgre",
    icon: postgre,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "FullStack Web Developer",
    company_name: "Pide un Domi",
    icon: domi,
    iconBg: "#383E56",
    date: "February 2022 - May 2022",
    points: [
      "Designing, developing, and maintaining a web application, both front-end and back-end components. Using MERN stack, and other related technologies.",
      "Collaborating with product managers, and other developers.",
      "Writing clean, efficient, and well-documented code in languages such as HTML, CSS, JavaScript. And Frameworks like React.js, NodeJS, Express.",
      "Developing and maintaining a MongoDB database, including designing schemas, optimizing queries, and ensuring data integrity."
    ],
  },
  {
    title: "IT Technician Manager",
    company_name: "Atlanta Computer Pros",
    icon: acp,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Developing, maintaining, and documenting PowerShell scripts for automation tasks.",
      "Documenting internal IT procedures for troubleshooting, maintenance, and user support, using Hudu. ",
      "Troubleshooting hardware and software issues for end-users, remotely, using SyncroMSP.",
      "Installing, configuring, and maintaining desktops, laptops, servers, printers and peripheral devices.",
      "Assisting with network infrastructure setup and maintenance, including routers, switches, and firewalls.",
      "Managing and maintaining Active Directory and 365 accounts. ",
      "Training and mentoring junior IT staff."
    ],
  },
  {
    title: "FullStack Web Developer",
    company_name: "Addin Technologies",
    icon: addin,
    iconBg: "#FFF",
    date: "Jan 2023 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js, Node.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Mobile Developer",
    company_name: "Waku Software",
    icon: waku,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Developing and maintaining mobile applications utilizing React Native, Expo, TypeScript, and incorporated Native Modules (Kotlin).",
      "Innovative features development, including the implementation of an AI-driven chat using Chat-GPT, a QR code scanner for efficient inventory and billing management of products, and building the native Android (Kotlin) module that connects the React Native app to thermal printers supplied by the Venezuelan government, which had no public documentation.",
      "Proficiently addressed and resolved software bugs to ensure optimal application performance.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products"
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I was amazed by Diego’s commitment to innovation! His work always truly showcased just how much potential he has. It was truly a pleasure to work with him.",
    name: "Paola Rodíguez",
    designation: "University Professor",
    company: "Universidad Rafael Urdaneta",
    image: "",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const webProjects = [
  {
    name: "Shoe Store",
    documentation: {
      url: "https://github.com/Dtowerssj/shoes-store/blob/master/UML/DiagramasUML.pdf",
      icon: document},
    description:
      "Full MERN Stack Web-based platform that allows users to buy shoes, and allows administrators to manage their merchandise.",
    tags: [
      {
        name: "javascript",
        icon: javascript,
        color: "bg-yellow-600",
      },
      {
        name: "react",
        icon: reactjs,
        color: "bg-blue-900",
      },
      {
        name: "mongodb",
        icon: mongodb,
        color: "bg-green-900",
      },
      {
        name: "nodejs",
        icon: nodejs,
        color: "bg-emerald-900",
      },
    ],
    image: shoestore,
    source_code_link: "https://github.com/Dtowerssj/shoes-store",
    live_url: "https://shoes-store-gamma.vercel.app/"
  },
  {
    name: "MercadoLibre Clone",
    description:
      "Marketplace inspired by MercadoLibre, built with React, Node.js and MongoDB: product listing and detail pages, user accounts with JWT authentication and a REST API. It started from a static HTML/CSS mockup.",
    tags: [
      {
        name: "react",
        icon: reactjs,
        color: "bg-blue-900",
      },
      {
        name: "nodejs",
        icon: nodejs,
        color: "bg-emerald-900",
      },
      {
        name: "mongodb",
        icon: mongodb,
        color: "bg-green-900",
      },
    ],
    image: mlclone,
    source_code_link: "https://github.com/Dtowerssj/ML",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        icon: tailwind,
        color: "bg-cyan-800",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const otherProjects = [
  {
    name: "Car Racer",
    description:
      "Endless-runner browser game drawn on an HTML canvas. Jump over the pedestrians to score, with sound effects and background music. Built with no frameworks.",
    tags: [
      {
        name: "javascript",
        icon: javascript,
        color: "bg-yellow-600",
      },
      {
        name: "html",
        icon: html,
        color: "bg-orange-800",
      },
      {
        name: "css",
        icon: css,
        color: "bg-blue-800",
      },
    ],
    image: carracer,
    source_code_link: "https://github.com/Dtowerssj/Car-Racer-Web-Game",
  },
  {
    name: "Game Recommender",
    documentation: {
      url: "https://github.com/Dtowerssj/Algoritmo-Videojuegos-IA/blob/main/Proyecto_Final_Algoritmo_de_recomendacin_de_Videojuegos.pdf",
      icon: document},
    description:
      "Team design project for a university course: a supervised recommendation algorithm that profiles players with yes/no questions, suggests a video game, and stores user picks in MongoDB to improve future results. Includes the flowchart, database schema and written report.",
    tags: [
      {
        name: "mongodb",
        icon: mongodb,
        color: "bg-green-900",
      },
      {
        name: "algorithms",
        icon: document,
        color: "bg-purple-900",
      },
    ],
    image: gamerec,
    source_code_link: "https://github.com/Dtowerssj/Algoritmo-Videojuegos-IA",
  },
  {
    name: "Zoo Management",
    documentation: {
      url: "https://github.com/Dtowerssj/Zoo-Management/blob/master/Diagrama%20de%20clases%20Zoo.png",
      icon: document},
    description:
      "Object-oriented Java application for managing a zoo of vertebrates. An abstract animal class is extended by mammals, birds, fish, amphibians and reptiles, with interfaces for movement, attack and defense, and a Swing menu to pick the animal class. Includes the UML class diagram.",
    tags: [
      {
        name: "java",
        icon: java,
        color: "bg-red-900",
      },
      {
        name: "uml",
        icon: document,
        color: "bg-purple-900",
      },
    ],
    image: zoo,
    source_code_link: "https://github.com/Dtowerssj/Zoo-Management",
  },
  {
    name: "Heart Failure Prediction",
    documentation: {
      url: "https://github.com/Dtowerssj/heart_failure_prediction/blob/main/HF_prediction.ipynb",
      icon: document},
    description:
      "University thesis in data science: exploratory analysis of a 299-patient heart failure dataset and a comparison of five classifiers (logistic regression, SVM, decision tree, random forest and gradient boosting) to predict patient mortality, reaching up to 91.67% test accuracy.",
    tags: [
      {
        name: "python",
        icon: python,
        color: "bg-sky-800",
      },
      {
        name: "scikit-learn",
        color: "bg-orange-800",
      },
      {
        name: "pandas",
        color: "bg-indigo-900",
      },
    ],
    image: heartfailure,
    source_code_link: "https://github.com/Dtowerssj/heart_failure_prediction",
  },
  {
    name: "IPv4 Calculator",
    description:
      "Java Swing desktop app that analyzes an IPv4 address and mask: class (A-E), public or private, APIPA, multicast and reserved ranges, network, gateway and broadcast addresses, and host range. Each calculation is saved to PostgreSQL and can be browsed in a second window.",
    tags: [
      {
        name: "java",
        icon: java,
        color: "bg-red-900",
      },
      {
        name: "postgresql",
        icon: postgre,
        color: "bg-blue-900",
      },
    ],
    image: ipcalc,
    source_code_link: "https://github.com/Dtowerssj/IPv4-IPv6-Calculator",
  },
  {
    name: "Reed UK Job Market Analysis",
    documentation: {
      url: "https://github.com/Dtowerssj/reed_uk_data_analyze/blob/main/TechnicalTestTorre.ipynb",
      icon: document},
    description:
      "Data analysis of the Reed UK job board, built for a data science internship technical test: job demand by region, the most popular categories and job titles, annual salaries in London and South East England, and posting trends over time.",
    tags: [
      {
        name: "python",
        icon: python,
        color: "bg-sky-800",
      },
      {
        name: "pandas",
        color: "bg-indigo-900",
      },
      {
        name: "seaborn",
        color: "bg-teal-900",
      },
    ],
    image: reeduk,
    source_code_link: "https://github.com/Dtowerssj/reed_uk_data_analyze",
  },
  {
    name: "TradingView to MT5 Bot",
    description:
      "Python bot that receives TradingView webhook alerts and executes them on MetaTrader 5: opens BUY and SELL orders with stop loss and take profit, closes positions and moves stops, sizing each trade by a configurable percentage of account risk. Includes a Tkinter control panel.",
    tags: [
      {
        name: "python",
        icon: python,
        color: "bg-sky-800",
      },
      {
        name: "flask",
        color: "bg-gray-700",
      },
      {
        name: "metatrader5",
        color: "bg-amber-800",
      },
    ],
    image: tradingbot,
    source_code_link: "https://github.com/Dtowerssj/flask",
  },
];

const mobileProjects = [
  {
    name: "Vital",
    description:
      "Mobile app built with React Native at Waku Software to manage medical supply inventories for health centers in Anzoátegui state, Venezuela. Staff sign in and register supply receptions (item, date, warehouse, supplier and purchase order or invoice number) and browse the stock with photos. Private company project, so the code is not public.",
    tags: [
      {
        name: "react native",
        icon: reactjs,
        color: "bg-blue-900",
      },
    ],
    image: vital,
  },
  {
    name: "Crypto Tracker",
    description:
      "Mobile app that tracks the top 100 cryptocurrencies by market cap, showing live prices from the CoinGecko API with 24-hour change indicators.",
    tags: [
      {
        name: "react native",
        icon: reactjs,
        color: "bg-blue-900",
      },
      {
        name: "javascript",
        icon: javascript,
        color: "bg-yellow-600",
      },
    ],
    image: cryptotracker,
    source_code_link: "https://github.com/Dtowerssj/crypto-tracker-app",
  },
  // RESERVED SLOT (hidden): Waku thermal printer module. Activate it once we know where the
  // code can live (it may belong to Waku's GitHub account) and what the app is called.
  // Credit Andre Carvalho's expo-serialport (MIT) if it is based on it. Needs a card image.
  // {
  //   name: "Thermal Printer Module",
  //   description:
  //     "Native Android module (Kotlin) for a React Native app at Waku Software, built to print on thermal printers supplied by the Venezuelan government that had no public documentation.",
  //   tags: [
  //     { name: "kotlin", icon: kotlin, color: "bg-purple-900" },
  //     { name: "react native", icon: reactjs, color: "bg-blue-900" },
  //     { name: "android", icon: android, color: "bg-green-900" },
  //   ],
  //   image: <card image to create>,
  //   source_code_link: <repo url to decide>,
  // },
];

const projectCategories = [
  { title: "Web", projects: webProjects },
  { title: "Mobile", projects: mobileProjects },
  { title: "Others", projects: otherProjects },
];

export { services, technologies, experiences, testimonials, projectCategories };
