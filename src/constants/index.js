import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  vue,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  getnet,
  aastu,
  threejs,
  github,
  linkedin,
  telegram,
  twitter,
  instagram,
  shemach,
  recipe,
  solflx,
  recipe2,
  minabIcon,
  kena,
  sheger,
  plan,
  a2sv,
  eyea,
  hahujobs,
  service,
  mezmure,
  aladia,
  vascom,
} from "../assets";

export const socialLinks = [
  {
    id: "github",
    icon: github,
    link: "https://github.com/selamudawitl04/",
    bg: "#181717",
  },
  {
    id: "linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/selamu-dawit-a62145265/",
    bg: "#0077B5",
  },
  {
    id: "twitter",
    icon: twitter,
    link: "https://twitter.com",
    bg: "#1DA1F2",
  },
  {
    id: "instagram",
    icon: instagram,
    link: "https://www.instagram.com/selamudev2024/",
    bg: "#E1306C",
  },
  {
    id: "telegram",
    icon: telegram,
    link: "https://t.me/Selamudev",
    bg: "#0088CC",
  },
];

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
    id: "projects",
    title: "Projects",
  },
];


 const experiences = [
  {
    title: "Lead Software Developer",
    company_name: "Ahava Company",
    location: "Addis Ababa, Ethiopia",
    date: "Feb 2023 – Present",
    points: [
      "Led the full development lifecycle of in-house software projects.",
      "Designed system architecture and defined project structure.",
      "Planned and implemented scalable database schemas.",
      "Developed core backend services and APIs using modern frameworks.",
      "Collaborated with cross-functional teams to align development with business goals.",
    ],
  },

  {
    title: "Front end Developer",
    company_name: "Minab it solutions",
    location: "Addis Ababa, Ethiopia",
    date: "Jan 2022 – Jan 2024",
    points: [
      "Built responsive CRM dashboards with modern frontend tools.",
      "Developed real-time chat using WebSockets and state management.",
      "Integrated third-party services and REST APIs.",
      "Created reusable UI components with design system standards.",
      "Performed unit, integration, and end-to-end testing.",
    ],
    
    
  },
  {
    title: "Full Stack Developer",
    company_name: "Minab IT Solutions",
    location: "Addis Ababa, Ethiopia",
    date: "Jan 2023 – Present",
    points: [
      "Developed end-to-end web apps using Node.js and Vue.js.",
      "Designed scalable APIs and integrated with PostgreSQL and Golang.",
      "Built admin dashboards with authentication and role-based access.",
      "Implemented CI/CD workflows for faster deployment cycles.",
      "Collaborated with UI/UX team to improve user experience.",
    ],
  },
 
  
  
  {
    title: "Senior Software Developer",
    company_name: "Aladia (Remote)",
    location: "Italy",
    date: "Mar 2024 – Mar 2025",
    points: [
      "Built and maintained full-stack web applications for clients across Europe.",
      "Developed REST APIs and integrated them with dynamic frontend components.",
      "Worked closely with remote teams to deliver features on time and within scope.",
      "Implemented responsive UI using modern frameworks and design systems.",
      "Handled deployments and production fixes in a cloud-based environment.",
    ],
  },
  
  // Add more...
];
 const education = [
  {
    title: "Bachelor's Degree in Software Engineering",
    subtitle: "Addis Ababa Science and Technology University",
    date: "Sep 2024",
  },
  {
    title: "Masters of Sciences in Software Engineering",
    subtitle: "Addis Ababa Science and Technology University",
    date: "2024-2026",
  },
];

// const experiences = [
//   {
//     title: "Full Stack Developer",
//     company_name: "Minab it solutions",
//     website: "https://www.minabtech.com/",
//     icon: minabIcon,
//     iconBg: "#E6DEDD",
//     date: "Oct 2023 - present",
//     points: [
//       "Developing  web application using Vue.js Go and Hasura.",
//       "Collaborating with cross-functional teams ",
//       "Implementing responsive design and ensuring cross-browser compatibility using tailwind.",
//       "Creating enterprise level website with Hasura and Nuxt.js",
//     ],
//   },

//   {
//     title: "Front end Developer intern",
//     company_name: "Get-net software solutions",
//     icon: getnet,
//     website: "https://www.getnetsoft.com/",
//     iconBg: "#E6DEDD",
//     date: "Jun 2023 - sept 2023",
//     points: [
//       "Developing  web application using React.js and other related technologies.",
//       "Collaborating with cross-functional teams ",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Masters Software Engineering student ",
//     company_name: "AASTU",
//     icon: aastu,
//     website: "http://www.aastu.edu.et/",
//     iconBg: "#E6DEDD",
//     date: "Sep 2019 - Present",
//     points: [
//       "Deepened expertise in advanced programming languages and technology stacks.",
//       "Led and contributed to complex projects, honing leadership and collaborative skills.",
//       "Specialized in advanced Software Development Life Cycle (SDLC) methodologies and comprehensive project documentation.",
//       "Enhanced problem-solving abilities and innovative thinking through rigorous coursework and research.",
//     ],
//   },
//   {
//     title: "Bachelor Software Engineering student ",
//     company_name: "AASTU",
//     icon: aastu,
//     website: "http://www.aastu.edu.et/",
//     iconBg: "#E6DEDD",
//     date: "Sep 2019 - Present",
//     points: [
//       "Studied various programming languages and technology stacks.",
//       "Participated in a variety of projects, both collaboratively within a team and individually.",
//       "Acquired knowledge in diverse Software Development Life Cycle (SDLC) methodologies and gained  documenting project requirements.",
//       "Developed teamwork skills and gained practical experience in collaborating effectively within a group.",
//     ],
//   },
// ];

const projects = [

  {
    name: "Hahu Jobs",
    description:
      " HaHuJobs a cloud services operating to capture structured data of the Ethiopian skilled and non-skilled labor market through digitally connecting thousands of job seekers in major Ethiopian cities as well as industrial parks ",
    tags: [
      {
        name: "Golang",
        color: "text-[#00ADD8]",
      },
      {
        name: "Hasura",
        color: "text-[#1EB4D4]",
      },
      {
        name: "Vue",
        color: "text-[#41B883]",
      },
      {
        name: "Nuxt.js",
        color: "text-[#00DC82]",
      },
      {
        name: "Postgres",
        color: "text-[#336791]",
      },
      {
        name: "Pinia",
        color: "text-[#FFD859]",
      },
      {
        name: "Nats",
        color: "text-[#27AE60]",
      },
    ],
    image: hahujobs,
    source_code_link: "",
    web_link: "https://hahu.jobs/",
  },
  {
  name: "Vascom ERP",
  description:
    "An integrated ERP solution designed to manage key business functions including inventory, HR, tender processes, project tracking, finance, and procurement. Built for enterprise scalability, Vascom ERP combines a robust backend and intuitive UI to streamline workflows across departments.",
  tags: [
    {
      name: "Vue Nuxt",
      color: "text-[#00DC82]",
    },
    {
      name: "Tailwind",
      color: "text-[#06B6D4]",
    },
    {
      name: "Golang",
      color: "text-[#00ADD8]",
    },
    {
      name: "Hasura",
      color: "text-[#1EB4D4]",
    },
    {
      name: "PostgreSQL",
      color: "text-[#336791]",
    },
    {
      name: "NATS",
      color: "text-[#43C6DB]",
    },
  ],
  image: vascom, // Replace this with your imported image variable
  source_code_link: "",
  web_link: "#",
},

  {
    name: "Kena",
    description:
      "Kena, under EYEA, fuels youth entrepreneurship through training, mentorship, and financial support. Its innovation competitions and strategic partnerships enrich a dynamic ecosystem, propelling the success of youth-led businesses.",
    tags: [
      {
        name: "React",
        color: "text-[#61DAFB]",
      },
      {
        name: "Next.js",
        color: "text-[#fff]",
      },
      {
        name: "Postgres",
        color: "text-[#336791]",
      },
      {
        name: "Graphql",
        color: "text-[#E10098]",
      },
      {
        name: "Tailwind",
        color: "text-[#06B6D4]",
      },
      {
        name: "Redux",
        color: "text-[#764ABC]",
      },
    ],
    image: kena,
    source_code_link: "",
    web_link: "#",
  },
  {
    name: "Sheger Gebeta",
    description:
      "The Sheger Gebeta Project is a comprehensive platform akin to Bookingcom, designed to facilitate interactions between hospitality establishments such as hotels, cafes, and restaurants, and potential patrons.",
    tags: [
      {
        name: "Vue",
        color: "text-[#41B883]",
      },
      {
        name: "Nuxt.js",
        color: "text-[#00DC82]",
      },
      {
        name: "Firebase",
        color: "text-[#FFCA28]",
      },
      {
        name: "Leaflet",
        color: "text-[#199900]",
      },
      {
        name: "Tailwind",
        color: "text-[#06B6D4]",
      },
      {
        name: "Pinia",
        color: "text-[#FFD859]",
      },
    ],
    image: sheger,
    source_code_link: "",
    web_link: "https://preview.shegergebeta.com/",
  },
  {
    name: "Plan international",
    description:
      "The goal of the project is to empower working and stay-at-home moms through establishing home-based childcare services in their own homes. In doing so, they will have their own business in a sector that is in high demand and continues to do so.",
    tags: [
      {
        name: "Vue",
        color: "text-[#41B883]",
      },
      {
        name: "Larvel.js",
        color: "text-[#FF2D20]",
      },
      {
        name: "MYSQL",
        color: "text-[#4479A1]",
      },
      {
        name: "Graphql",
        color: "text-[#E10098]",
      },
      {
        name: "Bootsrap",
        color: "text-[#7952B3]",
      },
      {
        name: "Pinia",
        color: "text-[#FFD859]",
      },
    ],
    image: plan,
    source_code_link: "",
    web_link: "#",
  },


  {
    name: "Aladia E-Learning",
    description:
      "A comprehensive e-learning platform developed for an Italian client, enabling remote education and course management. The platform features interactive learning modules, progress tracking, and a user-friendly interface for both students and instructors.",
    tags: [
      {
        name: "Nuxt.js",
        color: "text-[#00DC82]",
      },
      {
        name: "Tailwind",
        color: "text-[#06B6D4]",
      },
      {
        name: "Express",
        color: "text-[#000000]",
      },
      {
        name: "Node.js",
        color: "text-[#339933]",
      },
      {
        name: "MongoDB",
        color: "text-[#47A248]",
      },
    ],
    image: aladia,
    source_code_link: "",
    web_link: "#",
  },

  {
    name: "Wolayta mezmure lyrics",
    description:
      "A mobile app that preserves Wolayta spiritual heritage through mezmure (hymn) lyrics. Features include offline access, dark mode, and a community-driven database, making it accessible for native language speakers to search and organize their favorite lyrics.",
    tags: [
      {
        name: "Flutter",
        color: "text-[#02569B]",
      },
      {
        name: "Dart",
        color: "text-[#00B4AB]",
      },
      {
        name: "Golang",
        color: "text-[#00ADD8]",
      },
      {
        name: "Hasura",
        color: "text-[#1EB4D4]",
      },
      {
        name: "SQLite",
        color: "text-[#003B57]", // for sqflite (SQLite for mobile)
      },
      {
        name: "GraphQL",
        color: "text-[#E10098]",
      },
    ],
      
    image: mezmure,
    source_code_link: "",
    web_link: "https://play.google.com/store/apps/details?id=com.wolaytegna.lyrics",
  },

  {
    name: "EYEA",
    description:
      "The Ethiopian Youth Entrepreneurs Association (EYEA) supports young Ethiopian entrepreneurs by addressing skills gaps and financial constraints. EYEA fosters an entrepreneurial ecosystem through advocacy, networking, and tailored business services.",
    tags: [
      {
        name: "Vue",
        color: "text-[#41B883]",
      },
      {
        name: "Axios",
        color: "text-[#5A29E4]",
      },
      {
        name: "Headless",
        color: "text-[#FF6B6B]",
      },
      {
        name: "tailwind",
        color: "text-[#06B6D4]",
      },
      {
        name: "Pinia",
        color: "text-[#FFD859]",
      },
      {
        name: "Golang",
        color: "text-[#00ADD8]",
      },
    ],
    image: eyea,
    source_code_link: "",
    web_link: "#",
  },

  {
    name: "SolFlx Movie Website",
    description:
      "Solflx is Ethiopia's premier movie website, allowing users to buy tickets and book movies online. It offers a convenient platform for cinema enthusiasts to discover and reserve showtimes. Solflx enhances the movie-going experience with its user-friendly interface and seamless booking process.",
    tags: [
      {
        name: "Vue",
        color: "text-[#41B883]",
      },
      {
        name: "Hasura",
        color: "text-[#1EB4D4]",
      },
      {
        name: "graphql",
        color: "text-[#E10098]",
      },
      {
        name: "Go",
        color: "text-[#00ADD8]",
      },
      {
        name: "tailwind",
        color: "text-[#06B6D4]",
      },
      {
        name: "Pinia",
        color: "text-[#FFD859]",
      },
    ],
    image: solflx,
    source_code_link:
      "https://github.com/selamudawitl04/mnab-movie-schedule-frontend",
    web_link: "#",
  },
];


const technologies = [
  { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  { name: "Svelte", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/svelte/svelte-original.svg" },
  { name: "Vue.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg" },
  { name: "Angular", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg" },
  { name: "Next.js", icon: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
  { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" },
  { name: "Golang", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" },
  { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "Django", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" },
  { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Ionic", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg" },
  { name: "MySQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
  { name: "Firebase", icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
  { name: "Git", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
  { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
  { name: "Kubernetes", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg" },
  { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
];

const services = [
  {
    title: "Application Development",
    description: "Developing and deploying mobile applications for Android and iOS.",
    icon: "📱",
  },
  {
    title: "Software Consulting",
    description: "Delivering expert software consulting services for optimal solutions.",
    icon: "💼",
  },
  {
    title: "Web Application Development",
    description: "Designing & developing high-performance web applications.",
    icon: "💻",
  },
  {
    title: "AI & Robotics Solution",
    description: "AI chatbots, model development, and robotics solutions.",
    icon: "🤖",
  },
  {
    title: "Software & App Deployment",
    description: "Efficient deployment for your software and mobile applications.",
    icon: "🚀",
  },
  {
    title: "Software Maintenance & Support",
    description: "Performance monitoring, proactive optimization, and fast issue resolution.",
    icon: "🛠️",
  },
];

export { services, technologies, experiences, education, projects };
