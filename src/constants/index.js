import {
  mobile,
  backend,
  creator,
  web,
  HNG,
  one,
  messenger,
  two,
  three,
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
  dictionary,
  reactNative,
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
    title: "Frontend-Developer",
    icon: web,
  },
 
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: mobile,
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
  {
    name: "React-native",
    icon: reactNative
  }

];

const experiences = [
  {
    title: "Front-end Developer",
    company_name: "HNG Internship X",
    icon: HNG,
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
    name: "Emmanuel Chibuike",
    designation: "CFO",
    company: "Acme Co",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jason does.",
    name: "Mark Essien",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Jason optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Michael Wang",
    designation: "CTO",
    company: "456 Enterprises",
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
    image: one,
    source_code_link: "https://github.com/Jasowills/Neuronmart",
  },
  {
    name: "Neuron Dictionary Web app",
    description:
      "Neuron Dictionary Web App is your go-to digital resource for comprehensive language reference and exploration. This sleek and user-friendly application is designed to provide users with quick and easy access to a vast database of words, phrases, and their meanings.",
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
    image: dictionary,
    source_code_link: "https://github.com/Jasowills/Dictionary",
  },
  {
    name: "Neuron messenger",
    description:
      "NeuronMessenger: Streamlined communication, inspired by the brain. Connect instantly, share thoughts effortlessly, and engage in meaningful conversations with our innovative messenger app.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwindcss",
        color: "pink-text-gradient",
      },{
        name: "Websockets",
        color: "pink-text-gradient",
      },
    ],
    image: messenger,
    source_code_link: "https://github.com/Jasowills/Neuron-messenger",
  },
];

export { services, technologies, experiences, testimonials, projects };
