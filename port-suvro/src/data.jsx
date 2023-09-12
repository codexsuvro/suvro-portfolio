import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1-c.jpg';
import Work2 from './assets/project-2-c.jpg';
import Work3 from './assets/project-3-c.jpg';
import Work4 from './assets/project-4-c.jpg';
import Work5 from './assets/project-5-c.jpg';
import Work6 from './assets/project-7-c.jpeg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Suvrodeep',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Debnath',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '20 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Kolkata',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+91-9874774674',
  },

  {
    id: 8,
    title: 'Email : ',
    description: 'codexsuvro@gmail.com',
  },

  {
    id: 9,
    title: 'GitHub : ',
    description: 'codexsuvro',
  },

  {
    id: 10,
    title: 'Langages : ',
    description: 'English, Bengali',
  },
];

export const stats = [
  {
    id: 1,
    no: '2+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '15+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '20+',
    title: 'Websites <br /> Build',
  },

  {
    id: 4,
    no: '15+',
    title: ' Valid <br /> Certifications',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 - PRESENT',
    title: 'Web Developer / ML <span> GDSC-FIEM </span>',
    desc: 'Versatile web developer skilled in machine learning for advanced AI applications.',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2021 - 2023',
    title: 'Android Developer <span> Oasis Infobyte </span>',
    desc: 'Masterful Android developer excels in app design, optimization, and troubleshooting.',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2020 - 2021',
    title: 'ML Developer <span> LetsGrowMore </span>',
    desc: 'Employs unique algorithms to optimize machine learning models for efficiency.',
  },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020 - Present',
    title: 'B.Tech <span> Future Institute of Engineering and Management </span>',
    desc: 'Persuing ECE with carrying 9.12 CGPA till now from MAKAUT university.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018 - 2020',
    title: 'Higher Secondary <span> Gangapuri Siksha Sadan </span>',
    desc: 'Passed with 91.16% on average with science stream from West Bengal Council of Higher SecondaryEducation Board.',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2011-2018',
    title: 'Secondary <span> Gangapuri Siksha Sadan </span>',
    desc: 'Passed with 87.25% on avearge from West Bengal Board of Secondary Education Board.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '80',
  },

  {
    id: 2,
    title: 'JavaScript',
    percentage: '75',
  },

  {
    id: 3,
    title: 'CSS',
    percentage: '80',
  },

  {
    id: 4,
    title: 'AI-ML',
    percentage: '70',
  },

  {
    id: 5,
    title: 'Android',
    percentage: '65',
  },

  {
    id: 6,
    title: 'Jquery',
    percentage: '60',
  },

  {
    id: 7,
    title: 'MongoDB',
    percentage: '75',
  },

  {
    id: 8,
    title: 'React',
    percentage: '90',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Purpose : ',
        desc: 'Xplorica',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.xplorica.in',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Purpose : ',
        desc: 'Self',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'github.com/codexsuvro',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Purpose : ',
        desc: 'Xplorica',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.xplorica.in',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Blockchain',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Web3',
      },
      {
        icon: <FiUser />,
        title: 'Purpose : ',
        desc: 'Self',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Solidity, DAO',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'Published soon',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Android',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Android',
      },
      {
        icon: <FiUser />,
        title: 'Purpose : ',
        desc: 'Oasis Infobyte',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Android Studio, Kotlin',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'Published soon',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Machine Learning',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'AI - ML',
      },
      {
        icon: <FiUser />,
        title: 'Purpose : ',
        desc: 'Self',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Python',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'github.com/codexsuvro',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
