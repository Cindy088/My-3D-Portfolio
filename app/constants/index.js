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
  cyberay,
  fotopie,
  fotopieweb,
  findpromptsweb,
  secondstyleweb,
} from '@/public/assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Full Stack Developer',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: 'Full Stack Developer Intern',
    company_name: 'Cyberay',
    icon: cyberay,
    iconBg: '#E6DEDD',
    date: 'Jun 2023 - Present',
    points: [
      'Developing web applications using React.js, Node.js, Azure functions and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Full Stack Developer (Freelance)',
    company_name: 'FotoPie',
    icon: fotopie,
    iconBg: '#383E56',
    date: 'Dec 2022 - May 2023',
    points: [
      'Developed FotoPie website in seperate frontend and backend frameworks with 16 team members to provide users with photo sharing, AI image generation and subscription service.',
      'Built back-end RESTful APIs in Nest.js framework with Typescript and Node.js',
      'Built responsive front-end pages and reusable components in Next.js framework with Typescript, React.js and Material-UI',
      'Designed database schemas and implemented MongoDB Atlas as cloud database solution.',
      'Implemented CI/CD pipeline with Github Action to realise deployment automation and deployed the project to AWS using docker, ECS, Cloud Front, Route 53, and ALB.',
      'Collaborated with the team in Agile development methodology using Jira/Scrum and adopted Git/Github as version control.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'FotoPie Photography Website',
    description:
      'Web-based platform that allows users to search, subscribe, and download photos from various photographers, and users also can access AI image generation services.',
    tags: [
      {
        name: 'next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'nest.js',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'pink-text-gradient',
      },
    ],
    image: fotopieweb,
    source_code_link: 'https://www.fotopie.net',
  },
  {
    name: 'Find Prompts Website',
    description:
      'Full-stack Web application that enables users to share and search for prompts for ChatGPT.Used React.js, Tailwindcss, Node.js, MongoDB, Next.js, NextAuth.js. Used Google OAuth for user authentication, providing secure sign-in through Google accounts.',
    tags: [
      {
        name: 'next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'OAuth',
        color: 'pink-text-gradient',
      },
    ],
    image: findpromptsweb,
    source_code_link: 'https://find-prompts.vercel.app/',
  },
  {
    name: '2nd Style Website',
    description:
      'A full-stack second-hand clothing platform, users can post information for their second-hand clothes,accessories and shoes for sale.',
    tags: [
      {
        name: 'react.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'typescript',
        color: 'green-text-gradient',
      },
      {
        name: 'node.js',
        color: 'pink-text-gradient',
      },
    ],
    image: secondstyleweb,
    source_code_link: 'https://2nd-style.netlify.app/',
  },
];

export { services, technologies, experiences, testimonials, projects };
