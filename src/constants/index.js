import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  imun,

  wanderlust,
  complier,
  des,
  ai,
  chat,
  devstar,

  javalogo,
  coincent,
  ieee,
  gssoc,
  gfgs,
  microsoft,
  google,
  icip,
  holopin,
  c,
  cpp,
  bootstrap,
  mysql,
  ex,
  mckinsey,
  cefimun,
  paper,
  ehe,
  postman,
  devp,
  hp,
  nvidia,
  tcs,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Google ",
    date: "July 2024",
    icon: google,
    url: "https://www.credly.com/badges/988da082-2171-482b-bc70-e6f63ff4b9be/public_url",
  },
  
  {
    title: "Microsoft ",
    icon: microsoft,
    date: "July 2023",
    url: "https://www.credly.com/badges/61b1aeeb-b447-4718-a417-dcfde0ef8fba/public_url",
  },
  {
    title: "McKinsey.org",
    icon: mckinsey,
    url: "https://www.credly.com/badges/a26f88ea-e9f6-4719-aac0-4b9262cdc7e9/public_url",
  },
  {
    title: "OPSWAT Academy",
    icon: icip,
    date: "June 2024",
    url: "https://www.credly.com/badges/d206e1f6-c566-4085-83bd-43f7a3db0048/public_url",
  },
  {
    title: "HacktoberFest Holopin",
    icon: holopin,
    url: "https://holopin.io/@siddhanth4",
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Express JS",
    icon: ex,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "javalogo",
    icon: javalogo,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
 
];

const experiences = [
  
  // {
  //   title: "Internship Trainee",
  //   company_name: "Coincent.ai",
  //   icon: coincent,
  //   iconBg: "#E6DEDD",
  //   date: "May 2023 - August 2023",
  //   points: [
  //     "Acquired knowledge in cybersecurity concepts, basic SQL, and Linux commands.",
  //     "Strengthened understanding of penetration testing and ethical hacking methodologies.",
  //     "Worked with tools like Linux, Virtual Machines, Metasploit, and Nmap",
  //     "Explored cybersecurity tools and techniques to identify and mitigate potential vulnerabilities.",
  //   ],
  // },
  
  {
    title: "Full stack Developer Intern",
    company_name: "IEEE Bombay Section x Alhansat Solution",
    icon: ieee,
    iconBg: "#E6DEDD",
    date: "Sept 2023 - Oct 2023",
    points: [
      "Developed a student loan calculator module using the SvelteKit framework.",
      "Engaged in code reviews and peer programming to ensure high-quality deliverables.",
      "Collaborated with a team to design and implement different types of calculators.",
      "Enhanced skills in web development and project collaboration.",
    ],
  },
  {
    title: "Project Mentor",
    company_name: "GirlScript Foundation (GSSoC Extended)",
    icon: gssoc,
    iconBg: "#383E56",
    date: "Oct 2024 - Nov 2024",
    points: [
      "Reviewed and provided constructive feedback on code submissions to enhance project quality.",
      "Assisted in resolving technical issues and challenges faced by participants.",
      "Encouraged collaborative development and facilitated knowledge sharing within the community.",
    ],
  },
  {
    title: "Public Relation Coordinator",
    company_name: "GeeksforGeeks Student Chapter",
    icon: gfgs,
    iconBg: "#383E56",
    date: "Sept 2024 - June 2025",
    points: [
      "Enhancing the student chapter’s visibility and engagement within the college community.",
      "Collaborated with the core team to develop and execute marketing strategies, including social media campaigns and on-campus promotions.",
      "Built and maintained relationships with industry professionals to facilitate guest lectures and mentorship opportunities for chapter members.",
    ],
  },
];

const testimonials = [
  {
    name: "cefiMUN",
    image: cefimun,
  },
  {
    name: "Paper Presentation",
    image: paper,
  },
  {
    name: "EHE",
    image: ehe,
  },
  {
    name: "POSTMAN", 
    image: postman,
  },
  {
    name: "TCS", 
    image: tcs,
  },
  {
    name: "NVIDIA", 
    image: nvidia,
  },
  {
    name: "HP", 
    image: hp,
  },
  {
    name: "DEVP", 
    image: devp,
  },
 
];

const projects = [
  {
    name: "WanderLust",
    description:
      "An online platform that allows people to check hotels for short-term stays, as well as add new hotel listings offering by own. It is based on CRUD operations and RESTful APIs.",
    tags: [
      {
        name: "express",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "fullstack",
        color: "text-gradient",
      },
    ],
    image: wanderlust,
    source_code_link: "https://github.com/siddhanth4/wanderlust",
  },
  {
    name: "Online Compiler",
    description:
      "This web application allows users to compile and run C++ and Python code directly from their browser. It's built with a Node.js backend and a React frontend & Redis for  processing.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "c++",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "redis",
        color: "text-gradient",
      },
    ],
    image: complier,
    source_code_link: "https://github.com/siddhanth4/Online_Compiler",
  },

  {
    name: "Judicial AI Assistant",
    description:
      "This project was created as prototype for the SIH 2024. It is an AI assistant that helps users to get information about legal cases and laws. It is built with React and the Gemini API.",
    tags: [
      {
        name: "gemini_api",
        color: "blue-text-gradient",
      },
      {
        name: "sih",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: ai,
    source_code_link: "https://github.com/siddhanth4/ai_assistant-",
  },
  {
    name: "Encrypted Socket Chat",
    description:
      "This project demonstrates a basic client-server communication using sockets in Java. The communication between client and server is encrypted by Substitution Cipher.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "substution_cipher",
        color: "green-text-gradient",
      },
      {
        name: "socket_io",
        color: "pink-text-gradient",
      },
      
    ],
    image: chat,
    source_code_link: "https://github.com/siddhanth4/Encyrpted_Socket_Chat?tab=readme-ov-file",
  },

  {
    name: "D.E.S. Tool",
    description:
      "This project is a Data Encryption Standard (DES) Encryption/Decryption Tool built with React. It provides a simple web interface to encrypt and decrypt messages using DES.",
    tags: [
      {
        name: "cryptography",
        color: "blue-text-gradient",
      },
      {
        name: "alogrithm",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: des,
    source_code_link: "https://github.com/siddhanth4/DES_Encryption-Decryption",
  },
  {
    name: "Devstar Loan Calculator",
    description:
      "This project is a Data Encryption Standard (DES) Encryption/Decryption Tool built with React. It provides a simple web interface to encrypt and decrypt messages using DES.",
    tags: [
      {
        name: "svelte",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "toolkit",
        color: "pink-text-gradient",
      },
      {
        name: "pie_chart",
        color: "text-gradient",
      },
    ],
    image: devstar,
    source_code_link: "https://github.com/siddhanth4/devstar_Calculator",
  },
];

export { services, technologies, experiences, testimonials, projects };
