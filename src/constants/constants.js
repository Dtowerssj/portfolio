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
  addin,waku
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
      "Innovative features development, including the implementation of an AI-driven chat using Chat-GPT, a QR code scanner for efficient inventory and billing management of products, and establishing a seamless native connection with a thermal printer through native Android code.",
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

const projects = [
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

export { services, technologies, experiences, testimonials, projects };
