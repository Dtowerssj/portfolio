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
  pegasusdetail2,
  cryptotrackerdetail,
  offboarding,
  newuser,
  magicdash,
  signinmonitor,
  iconAiAgent,
  iconAzureAutomation,
  iconM365Security,
  itsupportagent,
  docsassistant,
  emailtriage,
  aiprojectmanager,
  azuremigration,
  acpscripts
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
    id: "speaking",
    title: "Speaking",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI Agent Builder",
    icon: iconAiAgent,
  },
  {
    title: "Azure & Automation",
    icon: iconAzureAutomation,
  },
  {
    title: "Microsoft 365 & Security",
    icon: iconM365Security,
  },
  {
    title: "Full-Stack & Mobile Dev",
    icon: web,
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
    title: "IT Technician II → Service Manager",
    company_name: "Atlanta Computer Pros",
    icon: acp,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
      "Lead the service desk for a portfolio of 11 client organizations on Microsoft 365, moving from technician to service management.",
      "Built serverless automation on Azure Functions (Node.js, Microsoft Graph): a multi-tenant sign-in risk monitor with tiered alerting, a ticket intake hub for SyncroMSP, and a hardware request workflow.",
      "Built an IT support AI agent in Copilot Studio, integrated with SyncroMSP and Hudu through MCP.",
      "Drive multi-tenant security hardening: Intune/Defender Secure Score improvements, CIS baselines deployed via Nerdio, SPF/DKIM/DMARC remediation across 8+ domains after a phishing campaign, and an AV migration to Defender for Business.",
      "Migrated a client's Django application to Azure (App Service, MySQL Flexible Server, Key Vault, Managed Identity, GitHub Actions CI/CD); currently leading a full CRM rebuild on React, Node.js and PostgreSQL as sole developer.",
      "Audited network infrastructure across all client sites and centralized logging to Azure; deploy PowerShell automation fleet-wide through Syncro RMM.",
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
  {
    title: "FullStack Web Developer",
    company_name: "Addin Technologies",
    icon: addin,
    iconBg: "#FFF",
    date: "Jan 2023 - April 2023",
    points: [
      "Built and maintained web applications with React.js and Node.js, with responsive, cross-browser interfaces.",
      "Worked with designers and product managers, and took part in code reviews.",
    ],
  },
  {
    title: "FullStack Web Developer",
    company_name: "Pide un Domi",
    icon: domi,
    iconBg: "#383E56",
    date: "February 2022 - May 2022",
    points: [
      "Built front-end and back-end features for the company's web application on the MERN stack (MongoDB, Express, React, Node.js).",
      "Designed MongoDB schemas and optimized queries, working closely with product managers.",
    ],
  },
];

// Talks and community sessions, newest first. `link` is optional: when it is set the card shows a
// "View session" link.
const talks = [
  {
    title: "Serverless IT Operations: Building Smart Automation with Azure Functions",
    event: "M365 Community Days Atlanta 2026",
    location: "Atlanta, GA",
    date: "November 14, 2026",
    language: "English",
    format: "Session",
    status: "upcoming",
    description: "How a small MSP runs IT operations on serverless code: Azure Functions in Node.js on top of Microsoft Graph that turn a two-hour manual user onboarding into a two-minute automated one, monitor sign-in risk across multiple tenants, and route support tickets automatically.",
  },
  {
    title: "Building an Autonomous AI Project Manager: Proactive Intelligence with Copilot Studio",
    event: "Nashville Microsoft Community Day 2026",
    location: "Nashville, TN",
    date: "September 11, 2026",
    language: "English",
    format: "Session",
    status: "delivered",
    description: "Live build of a Copilot Studio agent that works as a project manager on its own: it reads Microsoft Planner, detects overdue and at-risk tasks, flags overloaded team members and posts proactive updates to Microsoft Teams, grounded on the project brief.",
  },
  {
    title: "Building an Autonomous AI Project Manager: Proactive Intelligence with Copilot Studio",
    event: "Memphis Microsoft Community Days 2026",
    location: "Memphis, TN",
    date: "June 5, 2026",
    language: "English",
    format: "Session",
    status: "delivered",
    description: "First English edition of the session: an autonomous agent built live in Copilot Studio with Power Automate agent flows, Planner and Teams, showing why proactive agents deliver more value than chatbots.",
  },
  {
    title: "Elabora un Project Manager Autónomo con IA: Inteligencia Proactiva con Copilot Studio",
    event: "M365 Miami 2026",
    location: "Miami, FL",
    date: "February 6, 2026",
    language: "Español",
    format: "Session",
    status: "delivered",
    description: "My first community session, delivered in Spanish: building an autonomous AI project manager with Copilot Studio, Power Automate and Microsoft Planner, almost entirely as a live demo.",
  },
  {
    title: "Responsible AI",
    event: "Atlanta CIO & CISO Strategy Meeting",
    location: "Atlanta, GA",
    date: "October 28, 2025",
    language: "English",
    format: "Roundtable facilitation",
    status: "delivered",
    description: "Facilitated a peer discussion with CIOs and CISOs on governing AI in the enterprise: AI usage policies and transparency, frameworks like the NIST AI RMF, balancing innovation with ethics, and new security risks such as shadow AI and prompt injection.",
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
    images: [zeruxdetail],
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
    images: [misionarboldetail],
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
    images: [vitaldetail],
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
    images: [pegasusdetail, pegasusdetail2],
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
    images: [cryptotrackerdetail],
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

// Private company work in the cloud category.
const cloudProjects = [
  {
    name: "Secure Azure Migration for a Django App",
    year: "2026",
    description:
      "Moved a law firm's internal project management app from a laptop-hosted setup to production on Azure, designed around security from the start. The Django app runs as a container on Azure App Service with Azure Database for MySQL Flexible Server. Every secret lives in Azure Key Vault and reaches the app through Key Vault references and a system-assigned Managed Identity with read-only secret access, so no credentials sit in the code or in plain-text settings. Deployments run through GitHub Actions CI/CD. I migrated the production data, resolved conflicting Django migration histories, and set up least-privilege access for the client's developers: Reader access in Azure, read-only database users, and time-limited Contributor access when they needed it.",
    tags: [
      {
        name: "Azure App Service",
        color: "bg-sky-900",
      },
      {
        name: "Azure Key Vault",
        color: "bg-yellow-900",
      },
      {
        name: "Managed Identity",
        color: "bg-teal-900",
      },
      {
        name: "MySQL Flexible Server",
        color: "bg-orange-900",
      },
      {
        name: "GitHub Actions",
        color: "bg-slate-700",
      },
      {
        name: "Docker",
        icon: docker,
        color: "bg-blue-800",
      },
    ],
    image: azuremigration,
  },
];

// Categories without projects are not rendered, so aiProjects can stay empty until it is filled.
const aiProjects = [
  {
    name: "IT Support Agent",
    year: "2026",
    description:
      "AI agent built in Copilot Studio for the technicians of a Microsoft-focused MSP, used daily across the service desk. It answers questions about clients, tickets, assets and internal procedures by calling Hudu through its MCP server (OAuth 2.0), SyncroMSP through a custom connector I built from a rebuilt OpenAPI 2.0 spec, and SharePoint knowledge sources, all under generative orchestration. It started as a two-agent design with a SharePoint knowledge base, chosen over Azure AI Search to avoid a $300+ monthly cost, and evolved into a single agent calling its tools directly. Internal company tool, so the code is not public.",
    tags: [
      {
        name: "Copilot Studio",
        color: "bg-purple-900",
      },
      {
        name: "MCP",
        color: "bg-slate-700",
      },
      {
        name: "Power Platform",
        color: "bg-fuchsia-900",
      },
      {
        name: "OpenAPI",
        color: "bg-green-900",
      },
      {
        name: "SharePoint",
        color: "bg-sky-900",
      },
    ],
    image: itsupportagent,
  },
  {
    name: "Scripting Documentation Assistant",
    year: "2026",
    description:
      "Copilot Studio agent that documents automation code on its own. You paste or upload a PowerShell script or an Azure Function and it infers the script type, trigger and scope, writes a standardized header, creates the knowledge base article in Hudu through MCP, commits the file to GitHub through the GitHub MCP server and saves a copy to SharePoint, checking for existing articles and files first to avoid duplicates. The only human step is approving the file name. Used regularly by the team and saves a lot of documentation time. Internal company tool, so the code is not public.",
    tags: [
      {
        name: "Copilot Studio",
        color: "bg-purple-900",
      },
      {
        name: "MCP",
        color: "bg-slate-700",
      },
      {
        name: "GitHub",
        color: "bg-slate-700",
      },
      {
        name: "Hudu",
        icon: hudu,
        color: "bg-slate-700",
      },
      {
        name: "SharePoint",
        color: "bg-sky-900",
      },
    ],
    image: docsassistant,
  },
  {
    name: "Support Email Triage",
    year: "2026",
    description:
      "Automated triage for the support inbox of an MSP, running in production. When a ticket is created from an incoming email, a Power Automate flow sends it to an AI Builder prompt that classifies it, and the result is written back to the ticket in SyncroMSP. It began as a Copilot Studio agent with Teams Adaptive Cards and ended as a pure Power Automate + AI Builder pipeline: a batch process with no conversation doesn't need an agent, and dropping it made the flow simpler and cheaper. Internal company tool, so the code is not public.",
    tags: [
      {
        name: "Power Automate",
        color: "bg-blue-900",
      },
      {
        name: "AI Builder",
        color: "bg-violet-900",
      },
      {
        name: "SyncroMSP",
        color: "bg-orange-900",
      },
      {
        name: "Webhooks",
        color: "bg-gray-700",
      },
    ],
    image: emailtriage,
  },
  {
    name: "Autonomous AI Project Manager",
    year: "2026",
    description:
      "Autonomous agent in Copilot Studio that works as a project manager without being asked: it reads Microsoft Planner on a schedule, flags overdue and at-risk tasks, detects overloaded team members, celebrates completed work and posts updates to the project's Microsoft Teams channel, including @team mentions through Microsoft Graph, which the native connector doesn't support. Used on real company projects, and the live demo of my talks at M365 Miami, Memphis and Nashville Community Days.",
    tags: [
      {
        name: "Copilot Studio",
        color: "bg-purple-900",
      },
      {
        name: "Power Automate",
        color: "bg-blue-900",
      },
      {
        name: "Microsoft Planner",
        color: "bg-emerald-900",
      },
      {
        name: "Microsoft Teams",
        color: "bg-indigo-900",
      },
      {
        name: "Microsoft Graph",
        icon: microsoft365,
        color: "bg-indigo-900",
      },
    ],
    image: aiprojectmanager,
  },
  {
    name: "Automation Hub for Microsoft Teams",
    year: "2025 - 2026",
    description:
      "Microsoft Teams app that gives the technicians of a managed services provider one place to run the company's automations from a form instead of running scripts by hand. It is a Teams personal tab built with React, Fluent UI and the Teams SDK, signed in with Microsoft Entra ID single sign-on and hosted on Azure Static Web Apps, provisioned with Teams Toolkit and Bicep. It has guided forms to onboard a new user, off-board an employee (company and user pickers, matching with the ticketing and documentation platforms, security, mailbox and OneDrive options, with live progress while the workflow runs), request a new workstation and clean up unlicensed users, and it calls the Azure Functions in Node.js and PowerShell that do the work. Private company project, so the code is not public.",
    tags: [
      {
        name: "React",
        icon: reactjs,
        color: "bg-blue-900",
      },
      {
        name: "Microsoft Teams",
        color: "bg-indigo-900",
      },
      {
        name: "Fluent UI",
        color: "bg-sky-900",
      },
      {
        name: "Entra ID",
        color: "bg-blue-800",
      },
      {
        name: "Azure Static Web Apps",
        color: "bg-cyan-900",
      },
      {
        name: "Bicep",
        color: "bg-slate-700",
      },
    ],
    image: acpscripts,
  },
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
// categories. `defaultOpen` is only the initial state; `collapsible: false` makes a plain heading.
const projectCategories = [
  { title: "AI and Automation", defaultOpen: true, projects: aiProjects },
  { title: "Cloud & Infrastructure", defaultOpen: true, projects: cloudProjects },
  {
    title: "Software Development",
    collapsible: false,
    children: [
      { title: "Mobile", defaultOpen: false, projects: mobileProjects },
      { title: "Web", defaultOpen: false, projects: webProjects },
      { title: "Others", defaultOpen: false, projects: otherProjects },
    ],
  },
];

export { services, technologies, experiences, talks, testimonials, projectCategories };
