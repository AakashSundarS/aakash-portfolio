import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  nodejs,
  mongodb,
  git,
  docker,
  python,
  angular,
  express,
  tensorflow,
  aws,
  flask,
  qoruz,
  goschedule,
  sql2sheet,
  anywheredrive,
  sentiment,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "ML Engineer",
    icon: creator,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
];

const technologies: TTechnology[] = [
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Express.js",
    icon: express,
  },
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Flask",
    icon: flask,
  },
];

const experiences: TExperience[] = [
  {
    title: "Software Developer",
    companyName: "Qoruz",
    icon: qoruz,
    iconBg: "#383E56",
    date: "June 2022 - November 2024",
    points: [
      "Led end-to-end development of backend systems, achieving 90% increase in efficiency and performance.",
      "Improved client ROI by ~30% through refined influencer scoring algorithms.",
      "Developed custom regression models to enhance Qoruz Scoring algorithm and transform unstructured data.",
      "Conducted research on influencer cost prediction, increasing accuracy by 25%.",
      "Created unit tests ensuring 90% test coverage and mentored 4+ Junior engineers.",
      "Technologies: Python, ML Models, AWS (S3), ElasticSearch, Flask, SQL, scikit-learn, TensorFlow.",
    ],
  },
  {
    title: "Lead Developer",
    companyName: "GoSchedule",
    icon: goschedule,
    iconBg: "#E6DEDD",
    date: "January 2020 - June 2022",
    points: [
      "Implemented modular application architecture using MEAN stack for iterative deployment.",
      "Engineered responsive UI components with Angular, reducing development time by 50%.",
      "Architected microservices infrastructure using Docker, enhancing deployment efficiency by 70%.",
      "Developed hybrid application using Ionic and Capacitor for web and Android platforms.",
      "Technologies: MEAN Stack, Nginx, Linode VPS, PM2, Docker, Ionic, Capacitor.",
    ],
  },
];

const overview = `Experienced Software Developer with over four years of expertise in backend engineering, data analytics, and performance optimization. Proficient in a wide range of technologies including the MEAN stack, Python, SQL, TensorFlow, PyTorch, and cloud platforms like AWS and GCP. Known for delivering scalable solutions and transforming complex data into actionable insights.`;

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Aakash's expertise in machine learning and data analytics significantly improved our influencer scoring system. His work directly contributed to a 30% increase in client ROI.",
    name: "Praanesh Ravichandran",
    designation: "Engineering Manager",
    company: "Qoruz",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "Working with Aakash on the GoSchedule platform was exceptional. His architectural decisions and implementation of microservices transformed our deployment efficiency.",
    name: "Deepak Kumar",
    designation: "Technical Lead",
    company: "GoSchedule",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    testimonial:
      "Aakash's mentorship was invaluable to our junior developers. His ability to break down complex problems and guide the team through solutions greatly improved our development process.",
    name: "Priya Sharma",
    designation: "Senior Developer",
    company: "Qoruz",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "SQL2Sheet",
    description:
      "A Google Apps Script-powered tool that enables users to import SQL database data directly into Google Sheets through a user-friendly sidebar interface.",
    tags: [
      {
        name: "google-apps-script",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "green-text-gradient",
      },
      {
        name: "automation",
        color: "pink-text-gradient",
      },
    ],
    image: sql2sheet,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "AnywhereDrive",
    description:
      "A solution utilizing ngrok for IP forwarding to provide secure remote access to local storage, allowing users to access selected local folders from anywhere without cloud storage.",
    tags: [
      {
        name: "ngrok",
        color: "blue-text-gradient",
      },
      {
        name: "ip-forwarding",
        color: "green-text-gradient",
      },
      {
        name: "security",
        color: "pink-text-gradient",
      },
    ],
    image: anywheredrive,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Instagram Sentiment Analysis",
    description:
      "A hybrid sentiment analysis model combining VADER lexicon and named entity recognition for analyzing Instagram content, achieving 85% accuracy in content classification.",
    tags: [
      {
        name: "tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "nlp",
        color: "pink-text-gradient",
      },
    ],
    image: sentiment,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects, overview };
