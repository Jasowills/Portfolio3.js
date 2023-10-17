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
    title: "Web Developer",
    icon: web,
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

];

const experiences = [
  {
    title: "Front-end Developer",
    company_name: "HNG Internship X",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sept 2023 - Oct 2023",
    points: [
      "During my HNG Internship, I had the opportunity to work on a wide range of projects. These projects varied in complexity and scope, providing me with valuable hands-on experience in different aspects of software development.",
      "Throughout the internship, I not only honed my technical skills but also developed strong teamwork abilities. Collaborating with colleagues on these diverse projects allowed me to learn from others and contribute effectively to the team's success.",
    ],
  },
  
  {
    title: "Full stack Developer",
    company_name: "FreeLancer",
    icon: web,
    iconBg: "#E6DEDD",
    date: "July 2023 - Aug 2023",
    points: [
      "As a freelancer, I undertook the complete development of a full-stack application for an organization. This encompassed every phase of the project, from conceptualization to deployment.",
      "I maintained a close and collaborative relationship with the client throughout the project. This client-centered approach allowed me to understand their specific needs and objectives, ensuring that the final solution was tailored to their requirements.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Jason proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jason does.",
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
    name: "E-commerce App",
    description:
      "Elevate your digital presence with Neuronmart, my professional e-commerce web development expertise.",
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
        name: "Nest.js",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Jasowills/Neuronmart",
  },
  {
    name: "Wayfarer",
    description:
      "Embark on an extraordinary journey with Wayfare's intuitive booking system. Discover unparalleled convenience in planning and reserving your dream trips.",
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
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://wayfarer-frontend.onrender.com/",
  },
  {
    name: "Twittbook",
    description:
      "Enhance your online brand presence with Twittbook, the ultimate social media app. My expert social media management services curate captivating content, foster audience engagement, and drive meaningful interactions across platforms.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Nest.js",
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
