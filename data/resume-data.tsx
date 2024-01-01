import ConsultlyLogo from "@/public/images/logos/consultly.svg";
import MonitoLogo from "@/public/images/logos/monito.svg";
import IncentedLogo from "@/public/images/logos/icented.png";
import StoveLogo from "@/public/images/logos/STOVE_FULL_LOGO_TRANS.jpg";
import Minimal from "@/public/images/logos/minimal.svg";
import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "Jephthah Mbah",
  initials: "JM",
  location: "Nigeria",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:
    "Frontend Engineer focused on building products with extra attention to details",
  summary:
    "As a Frontend Engineer, I have successfully taken multiple products from 0 to production. I work mostly with Nextjs, TypeScript, Reactjs, Node.js, Tailwindcss and Supabase. I have over 3 years of experience in working remotely with companies all around the world.",
  avatarUrl: "/images/profile-pic.jpeg",
  personalWebsiteUrl: "https://jephthah-mbah-woad.vercel.app/",
  contact: {
    email: "jephthah.mbah@outlook.com",
    tel: "+2347065406165",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/sproutjeph",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jephthah-mbah-jw-71244263/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/JephthahMbah",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Institute of Management and Technology IMT Enugu",
      degree:
        "Higer National Diploma in Electrical and Electronics engineering",
      start: "2010",
      end: "2015",
    },
  ],
  work: [
    {
      company: "Incented",
      link: "https://incented.co/",
      badges: ["Remote"],
      title: "Frontend Developer",
      logo: IncentedLogo,
      start: "2023",
      end: "Present",
      description:
        "Crafted user-friendly, intuitive interfaces for proposition, prioritization, execution, and validation phases of tasks. Collaborated closely with designers and backend engineers to translate high-fidelity mockups into pixel-perfect, responsive UIs. Harnessed the power of Nextjs 14, TailwindCSS, Redux, Supabase, and TypeScript to build clean, and efficient code",
    },
    {
      company: "Stove",
      link: "https://stovepos.com/",
      badges: ["Remote"],
      title: "Frontend Stack Developer",
      logo: StoveLogo,
      start: "2022",
      end: "2023",
      description:
        "Develop and maintain features for a dynamic food delivery app using Next.js and React. Implement responsive UI components with Tailwind CSS. Ensure code quality and maintainability through Typescript",
    },
    {
      company: "Freelancer.com",
      link: "https://freelancer.com/",
      badges: ["Remote"],
      title: "Full Stack Developer",
      logo: StoveLogo,
      start: "2020",
      end: "2022",
      description: `Created a field-service application with Typescript and Reactjs. Gidyson-online-store: Developing, debugging and implementing new features on an E-commerce store, Technologies used Typescript, Nextjs, Redux, React-Query, React and Nodejs. Developed an online food ordering Software, my part on this job was to develop the UI with Reactjs, Redux for client state management and React-Query for server state management, Debugging and helping other employees to go forward with their projects`,
    },
  ],
  skills: [
    "Nextjs",
    "TypeScript",
    "JavaScript",
    "Reactjs",
    "Nodejs",
    "Expressjs",
    "MongoDB",
    "Redux",
    "Tailwindcss",
    "HTML Email Developer",
  ],
  projects: [
    {
      title: "Instant MVP",
      techStack: [
        "Side Project",
        "TypeScript",
        "Nextjs",
        "Supabase",
        "Tailwindcss",
        "Nextui",
      ],
      description:
        "The starting point for your next startup project based on Nextjs-14, Tailwindcss, NextUI and Supabase for backend.",
      logo: ConsultlyLogo,
      link: {
        label: "Instantmvp.vercel.app",
        href: "https://next-sass-template.vercel.app/",
      },
    },
    {
      title: "Exam GPT",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Nodejs",
        "Expressjs",
        "MongoDB",
      ],
      description:
        "The Best AI Tool to Prepare for your O-Level Exams Slove Exam past Questions with AI",
      logo: MonitoLogo,
      link: {
        label: "exam-gpt.vercel.app",
        href: "https://exam-gpt.vercel.app/",
      },
    },

    {
      title: "My Portfolio",
      techStack: ["Side Project", "Next.js", "Typescript"],
      description: "My personal website. Built with Next.js",
      logo: Minimal,
      link: {
        label: "github.com",
        href: "https://jephthah-mbah-woad.vercel.app/",
      },
    },
  ],
} as const;
