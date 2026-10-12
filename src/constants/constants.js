import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  python,
  kotlin,
  openai,
  powershell,
  azurefunctions,
  microsoft365,
  hudu,
  googleplay,
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
  vital,
  misionarbol,
  zerux,
  pegasus,
  tpf,
  zeruxdetail,
  vitaldetail,
  misionarboldetail,
  pegasusdetail,
  cryptotrackerdetail,
  offboarding,
  newuser,
  magicdash,
  signinmonitor
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
    date: "April 2023 - September 2024",
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
    name: "Trading Academy Platform",
    year: "2022",
    description:
      "Front end of an online trading academy, built with React in 2022 and still a work in progress. It has a landing page with the academy's offer, sign-in and sign-up forms with client-side validation, and a members area with a collapsible side menu and a list of course chapters. It talks to a Node.js, Express and MongoDB REST API with JWT authentication, published as a separate repository; connecting the course content is still pending.",
    tags: [
      {
        name: "JavaScript",
        icon: javascript,
        color: "bg-yellow-600",
      },
      {
        name: "React",
        icon: reactjs,
        color: "bg-blue-900",
      },
      {
        name: "CSS",
        color: "bg-pink-900",
      },
      {
        name: "Node.js",
        icon: nodejs,
        color: "bg-emerald-900",
      },
      {
        name: "MongoDB",
        icon: mongodb,
        color: "bg-green-900",
      },
    ],
    image: tpf,
    source_code_link: "https://github.com/Dtowerssj/tpf-web",
    live_url: "https://tpf-web.vercel.app/",
  },
  {
    name: "Shoe Store",
    year: "2022",
    documentation: {
      url: "https://github.com/Dtowerssj/shoes-store/blob/master/UML/DiagramasUML.pdf",
      icon: document},
    description:
      "Full MERN Stack Web-based platform that allows users to buy shoes, and allows administrators to manage their merchandise.",
    tags: [
      {
        name: "JavaScript",
        icon: javascript,
        color: "bg-yellow-600",
      },
      {
        name: "React",
        icon: reactjs,
        color: "bg-blue-900",
      },
      {
        name: "MongoDB",
        icon: mongodb,
        color: "bg-green-900",
      },
      {
        name: "Node.js",
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
    year: "2021",
    description:
      "Marketplace inspired by MercadoLibre, built with React, Node.js and MongoDB: product listing and detail pages, user accounts with JWT authentication and a REST API. It started from a static HTML/CSS mockup.",
    tags: [
      {
        name: "React",
        icon: reactjs,
        color: "bg-blue-900",
      },
      {
        name: "Node.js",
        icon: nodejs,
        color: "bg-emerald-900",
      },
      {
        name: "MongoDB",
        icon: mongodb,
        color: "bg-green-900",
      },
    ],
    image: mlclone,
    source_code_link: "https://github.com/Dtowerssj/ML",
  },
  // Template cards hidden for now (not real projects):
  //   {
  //     name: "Job IT",
  //     description:
  //       "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //     tags: [
  //       {
  //         name: "React",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "REST API",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "SCSS",
  //         color: "pink-text-gradient",
  //       },
  //       {
  //         name: "Tailwind",
  //         icon: tailwind,
  //         color: "bg-cyan-800",
  //       },
  //     ],
  //     image: jobit,
  //     source_code_link: "https://github.com/",
  //   },
  //   {
  //     name: "Trip Guide",
  //     description:
  //       "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //     tags: [
  //       {
  //         name: "Next.js",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "Supabase",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "CSS",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: tripguide,
  //     source_code_link: "https://github.com/",
  //   },
];

const otherProjects = [
  {
    name: "IPv4 Calculator",
    year: "2020",
    description:
      "Java Swing desktop app that analyzes an IPv4 address and mask: class (A-E), public or private, APIPA, multicast and reserved ranges, network, gateway and broadcast addresses, and host range. Each calculation is saved to PostgreSQL and can be browsed in a second window.",
    tags: [
      {
        name: "Java",
        icon: java,
        color: "bg-red-900",
      },
      {
        name: "PostgreSQL",
        icon: postgre,
        color: "bg-blue-900",
      },
    ],
    image: ipcalc,
    source_code_link: "https://github.com/Dtowerssj/IPv4-IPv6-Calculator",
  },
  {
    name: "Heart Failure Prediction",
    year: "2021",
    documentation: {
      url: "https://github.com/Dtowerssj/heart_failure_prediction/blob/main/HF_prediction.ipynb",
      icon: document},
    description:
      "University thesis in data science: exploratory analysis of a 299-patient heart failure dataset and a comparison of five classifiers (logistic regression, SVM, decision tree, random forest and gradient boosting) to predict patient mortality, reaching up to 91.67% test accuracy.",
    tags: [
      {
        name: "Python",
        icon: python,
        color: "bg-sky-800",
      },
      {
        name: "Scikit-learn",
        color: "bg-orange-800",
      },
      {
        name: "Pandas",
        color: "bg-indigo-900",
      },
    ],
    image: heartfailure,
    source_code_link: "https://github.com/Dtowerssj/heart_failure_prediction",
  },
  {
    name: "Zoo Management",
    year: "2020",
    documentation: {
      url: "https://github.com/Dtowerssj/Zoo-Management/blob/master/Diagrama%20de%20clases%20Zoo.png",
      icon: document},
    description:
      "Object-oriented Java application for managing a zoo of vertebrates. An abstract animal class is extended by mammals, birds, fish, amphibians and reptiles, with interfaces for movement, attack and defense, and a Swing menu to pick the animal class. Includes the UML class diagram.",
    tags: [
      {
        name: "Java",
        icon: java,
        color: "bg-red-900",
      },
      {
        name: "UML",
        color: "bg-purple-900",
      },
    ],
    image: zoo,
    source_code_link: "https://github.com/Dtowerssj/Zoo-Management",
  },
  {
    name: "Job Market Analysis - Technical Test",
    year: "2021",
    documentation: {
      url: "https://github.com/Dtowerssj/reed_uk_data_analyze/blob/main/TechnicalTestTorre.ipynb",
      icon: document},
    description:
      "Data analysis of the Reed UK job board, built for a data science internship technical test: job demand by region, the most popular categories and job titles, annual salaries in London and South East England, and posting trends over time.",
    tags: [
      {
        name: "Python",
        icon: python,
        color: "bg-sky-800",
      },
      {
        name: "Pandas",
        color: "bg-indigo-900",
      },
      {
        name: "Seaborn",
        color: "bg-teal-900",
      },
    ],
    image: reeduk,
    source_code_link: "https://github.com/Dtowerssj/reed_uk_data_analyze",
  },
  {
    name: "Car Racer",
    year: "2021",
    description:
      "Endless-runner browser game drawn on an HTML canvas. Jump over the pedestrians to score, with sound effects and background music. Built with no frameworks.",
    tags: [
      {
        name: "JavaScript",
        icon: javascript,
        color: "bg-yellow-600",
      },
      {
        name: "HTML",
        icon: html,
        color: "bg-orange-800",
      },
      {
        name: "CSS",
        icon: css,
        color: "bg-blue-800",
      },
    ],
    image: carracer,
    source_code_link: "https://github.com/Dtowerssj/Car-Racer-Web-Game",
  },
];

const mobileProjects = [
  {
    name: "Zerux",
    year: "2023 - 2024",
    description:
      "Smart business management platform, published on Google Play and built at Waku Software with React Native, Expo and TypeScript. It handles invoicing and accounting, manages inventory with a QR scanner, prints invoices on thermal printers through a native connection, connects to point-of-sale card terminals to take card payments, shows sales, accounts and customers in a dashboard, and includes an assistant powered by the OpenAI API that answers questions about the business data.",
    tags: [
      {
        name: "React Native",
        icon: reactjs,
        color: "bg-blue-900",
      },
      {
        name: "Expo",
        color: "bg-gray-700",
      },
      {
        name: "TypeScript",
        icon: typescript,
        color: "bg-blue-800",
      },
      {
        name: "Kotlin",
        icon: kotlin,
        color: "bg-purple-900",
      },
      {
        name: "OpenAI",
        icon: openai,
        color: "bg-emerald-900",
      },
    ],
    image: zerux,
    images: [zerux, zeruxdetail],
    live_url: "https://play.google.com/store/apps/details?id=com.dtowerssj.nevula_mobile",
    live_icon: googleplay,
  },
  {
    name: "Misión Árbol",
    year: "2023 - 2024",
    description:
      "Mobile app built at Waku Software with React Native, Expo and TypeScript for Misión Árbol, an environmental program of the Venezuelan government. It brings together a digital ID card with a QR code that gives access to the program's benefits, a plant scanner that identifies species and shows the closest matches, a green guide with each plant's family, uses and care, news, a user profile and an AI chat powered by the OpenAI (ChatGPT) API.",
    tags: [
      {
        name: "React Native",
        icon: reactjs,
        color: "bg-blue-900",
      },
      {
        name: "Expo",
        color: "bg-gray-700",
      },
      {
        name: "TypeScript",
        icon: typescript,
        color: "bg-blue-800",
      },
      {
        name: "OpenAI",
        icon: openai,
        color: "bg-emerald-900",
      },
    ],
    image: misionarbol,
    images: [misionarbol, misionarboldetail],
  },
  {
    name: "Vital",
    year: "2023 - 2024",
    description:
      "Mobile app built with React Native, Expo and TypeScript at Waku Software to manage medical supply inventories for health centers in Anzoátegui state, Venezuela. Staff sign in and register supply receptions (item, date, warehouse, supplier and purchase order or invoice number) and browse the stock with photos. Private company project, so the code is not public.",
    tags: [
      {
        name: "React Native",
        icon: reactjs,
        color: "bg-blue-900",
      },
      {
        name: "Expo",
        color: "bg-gray-700",
      },
      {
        name: "TypeScript",
        icon: typescript,
        color: "bg-blue-800",
      },
    ],
    image: vital,
    images: [vital, vitaldetail],
  },
  {
    name: "Pegasus",
    year: "2021",
    description:
      "Uber Eats-style food delivery app built with React Native and Expo for a university mobile development course, together with a classmate. Users sign in and browse the available restaurants; establishments register and manage their own product catalog (create, edit and delete). The delivery branches add a Google Maps screen and a Stripe payment prototype. It talks to a Node.js, Express and PostgreSQL REST API. The original backend is offline, so the screenshots use sample data; the map screen is rendered with OpenStreetMap tiles in place of Google Maps, which needs an API key.",
    tags: [
      {
        name: "React Native",
        icon: reactjs,
        color: "bg-blue-900",
      },
      {
        name: "Expo",
        color: "bg-gray-700",
      },
      {
        name: "JavaScript",
        icon: javascript,
        color: "bg-yellow-600",
      },
      {
        name: "Google Maps",
        color: "bg-green-900",
      },
      {
        name: "Stripe",
        color: "bg-indigo-900",
      },
    ],
    image: pegasus,
    images: [pegasus, pegasusdetail],
    source_code_link: "https://github.com/Dtowerssj/pegasus-app",
  },
  {
    name: "Crypto Tracker",
    year: "2021",
    description:
      "Mobile app that tracks the top 100 cryptocurrencies by market cap, showing live prices from the CoinGecko API with 24-hour change indicators.",
    tags: [
      {
        name: "React Native",
        icon: reactjs,
        color: "bg-blue-900",
      },
      {
        name: "JavaScript",
        icon: javascript,
        color: "bg-yellow-600",
      },
    ],
    image: cryptotracker,
    images: [cryptotracker, cryptotrackerdetail],
    source_code_link: "https://github.com/Dtowerssj/crypto-tracker-app",
  },
  // RESERVED SLOT (hidden): standalone Waku thermal printer module (its app is Zerux, shown above). Activate it once we know where the
  // code can live (it may belong to Waku's GitHub account) and what the app is called.
  // Credit Andre Carvalho's expo-serialport (MIT) if it is based on it. Needs a card image.
  // {
  //   name: "Thermal Printer Module",
  //   description:
  //     "Native Android module (Kotlin) for a React Native app at Waku Software, built to print on thermal printers supplied by the Venezuelan government that had no public documentation.",
  //   tags: [
  //     { name: "Kotlin", icon: kotlin, color: "bg-purple-900" },
  //     { name: "React Native", icon: reactjs, color: "bg-blue-900" },
  //     { name: "Android", icon: android, color: "bg-green-900" },
  //   ],
  //   image: <card image to create>,
  //   source_code_link: <repo url to decide>,
  // },
];

// Categories without projects are not rendered, so aiProjects can stay empty until it is filled.
const aiProjects = [
  {
    name: "Employee Offboarding Orchestrator",
    year: "2025 - 2026",
    description:
      "Azure Durable Functions orchestrator that automates the full offboarding of an employee in a managed Microsoft 365 tenant, built for a managed services provider. Eighteen steps in eight phases: it sets up the auto-reply, forwarding and shared mailbox, blocks sign-in, revokes sessions, resets the password, removes groups and licences, disables devices, grants OneDrive access and closes the loop in the ticketing and documentation platforms. What Graph API cannot do runs in a separate PowerShell function app. It authenticates with Managed Identity and federated credentials, so there are no client secrets, and every step reports its own result so a partial failure never hides the rest. Private company project, so the code is not public.",
    tags: [
      {
        name: "Node.js",
        icon: nodejs,
        color: "bg-emerald-900",
      },
      {
        name: "PowerShell",
        icon: powershell,
        color: "bg-slate-700",
      },
      {
        name: "Azure Functions",
        icon: azurefunctions,
        color: "bg-sky-900",
      },
      {
        name: "Microsoft Graph",
        icon: microsoft365,
        color: "bg-indigo-900",
      },
    ],
    image: offboarding,
  },
  {
    name: "New User Automation",
    year: "2025 - 2026",
    description:
      "Onboarding automation used day to day by a managed services provider. One request creates the whole user: the Microsoft 365 account with a generated password and licences, group, Teams and SharePoint memberships, a contact in the ticketing platform and a people asset in the documentation platform with the password stored and linked to the workstation. A companion function feeds each client's licences, teams and sites to the request form. It exists as a PowerShell function and as a Node.js rewrite. Private company project, so the code is not public.",
    tags: [
      {
        name: "Node.js",
        icon: nodejs,
        color: "bg-emerald-900",
      },
      {
        name: "PowerShell",
        icon: powershell,
        color: "bg-slate-700",
      },
      {
        name: "Azure Functions",
        icon: azurefunctions,
        color: "bg-sky-900",
      },
      {
        name: "Microsoft Graph",
        icon: microsoft365,
        color: "bg-indigo-900",
      },
    ],
    image: newuser,
  },
  {
    name: "Sign-in Risk Monitor",
    year: "2026",
    description:
      "Hourly monitor that reads the Entra ID sign-in logs of every managed tenant and flags successful sign-ins from outside the expected region. Each event gets a risk level (international, Entra risk flags, legacy authentication) and a triage score that weighs safe signals, such as compliant devices and named locations, against off-hours access and sensitive apps. It opens or updates a ticket with a structured note, raises its priority when needed and emails the team. A sibling monitor watches new device registrations. Private company project, so the code is not public.",
    tags: [
      {
        name: "Node.js",
        icon: nodejs,
        color: "bg-emerald-900",
      },
      {
        name: "Azure Functions",
        icon: azurefunctions,
        color: "bg-sky-900",
      },
      {
        name: "Microsoft Graph",
        icon: microsoft365,
        color: "bg-indigo-900",
      },
    ],
    image: signinmonitor,
  },
  {
    name: "Magic Dash Dashboards",
    year: "2025 - 2026",
    description:
      "Scheduled functions that publish live dashboards into the documentation platform for every managed client, refreshed each morning: Microsoft 365 licences and MFA adoption per user compared with the company-wide average, Microsoft Secure Score with a breakdown by service, and network speed-test history from the monitoring platform. Technicians see the state of each tenant at a glance instead of opening every admin portal. Private company project, so the code is not public.",
    tags: [
      {
        name: "Node.js",
        icon: nodejs,
        color: "bg-emerald-900",
      },
      {
        name: "PowerShell",
        icon: powershell,
        color: "bg-slate-700",
      },
      {
        name: "Azure Functions",
        icon: azurefunctions,
        color: "bg-sky-900",
      },
      {
        name: "Microsoft Graph",
        icon: microsoft365,
        color: "bg-indigo-900",
      },
      {
        name: "Hudu",
        icon: hudu,
        color: "bg-slate-700",
      },
    ],
    image: magicdash,
  },
  {
    name: "AI Game Recommender",
    year: "2021",
    documentation: {
      url: "https://github.com/Dtowerssj/Algoritmo-Videojuegos-IA/blob/main/Proyecto_Final_Algoritmo_de_recomendacin_de_Videojuegos.pdf",
      icon: document},
    description:
      "Team design project for a university course: a supervised recommendation algorithm that profiles players with yes/no questions, suggests a video game, and stores user picks in MongoDB to improve future results. Includes the flowchart, database schema and written report.",
    tags: [
      {
        name: "MongoDB",
        icon: mongodb,
        color: "bg-green-900",
      },
      {
        name: "Algorithms",
        color: "bg-purple-900",
      },
    ],
    image: gamerec,
    source_code_link: "https://github.com/Dtowerssj/Algoritmo-Videojuegos-IA",
  },
  {
    name: "TradingView to MT5 Bot",
    year: "2022",
    description:
      "Python bot that receives TradingView webhook alerts and executes them on MetaTrader 5: opens BUY and SELL orders with stop loss and take profit, closes positions and moves stops, sizing each trade by a configurable percentage of account risk. Includes a Tkinter control panel.",
    tags: [
      {
        name: "Python",
        icon: python,
        color: "bg-sky-800",
      },
      {
        name: "Flask",
        color: "bg-gray-700",
      },
      {
        name: "MetaTrader 5",
        color: "bg-amber-800",
      },
    ],
    image: tradingbot,
    source_code_link: "https://github.com/Dtowerssj/flask",
  },
];

// Nested, collapsible categories. A category with `projects` shows cards; one with `children` holds other
// categories. `defaultOpen` is only the initial state.
const projectCategories = [
  { title: "AI and Automation", defaultOpen: true, projects: aiProjects },
  {
    title: "Software Development",
    defaultOpen: false,
    children: [
      { title: "Mobile", defaultOpen: true, projects: mobileProjects },
      { title: "Web", defaultOpen: false, projects: webProjects },
      { title: "Others", defaultOpen: false, projects: otherProjects },
    ],
  },
];

export { services, technologies, experiences, testimonials, projectCategories };
