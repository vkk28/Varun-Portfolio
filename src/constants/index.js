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
  redux,
  tailwind,
  nodejs,
  mongodb,
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
    title: "UI/UX Designer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Interactive Designer",
    icon: creator,
  },
  {
    title: "Design Systems Engineer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  }
];

const experiences = [
  {
    title: "UI/UX Designer & Frontend Developer",
    company_name: "Flipkart GRiD 5.0",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2023",
    points: [
      "National Finalist (Top 100 teams among 10,000+ participants)",
      "Led the UI/UX design and frontend development of the project",
      "Implemented responsive design patterns and interactive user interfaces",
      "Collaborated with team members to create an innovative solution"
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Personal Projects",
    icon: shopify,
    iconBg: "#383E56",
    date: "2021 - Present",
    points: [
      "Developed Uber Clone with focus on intuitive user interface and seamless user experience",
      "Created interactive Pathfinding Visualizer with engaging animations and user controls",
      "Built Bloggerz platform with modern design principles and responsive layouts",
      "Implemented real-time features and optimized performance for better user experience"
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Varun proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Varun does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Varun optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Uber Clone",
    description: "A modern ride-hailing application with focus on intuitive user experience, real-time tracking, and seamless booking flow. Features include interactive maps, smooth animations, and responsive design.",
    tags: [
      {
        name: "react",
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
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Pathfinding Visualizer",
    description: "An interactive tool that visualizes pathfinding algorithms with stunning animations and intuitive controls. Achieved 95% user satisfaction through thoughtful UI design and smooth user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "algorithms",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Bloggerz",
    description: "A modern blogging platform with focus on typography, readability, and user engagement. Features include dark mode, responsive layouts, and optimized content presentation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
