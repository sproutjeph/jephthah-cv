import ConsultlyLogo from "@/public/images/logos/consultly.svg";
import AmbitLogo from "@/public/images/logos/ambit.png";
import BarepapersLogo from "@/public/images/logos/barepapers.svg";
import BimLogo from "@/public/images/logos/bim.png";
import CDGOLogo from "@/public/images/logos/cdgo.png";
import ClevertechLogo from "@/public/images/logos/clevertech.png";
import EvercastLogo from "@/public/images/logos/evercast.svg";
import Howdy from "@/public/images/logos/howdy.png";
import JarockiMeLogo from "@/public/images/logos/jarocki.svg";
import JojoMobileLogo from "@/public/images/logos/jojomobile.png";
import MonitoLogo from "@/public/images/logos/monito.svg";
import MobileVikingsLogo from "@/public/images/logos/mv.png";
import NSNLogo from "@/public/images/logos/nsn.svg";
import IncentedLogo from "@/public/images/logos/icented.png";
import TastyCloudLogo from "@/public/images/logos/tastycloud.png";
import YearProgressLogo from "@/public/images/logos/yearprogress.svg";
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
  avatarUrl:
    "https://jephthah-mbah-woad.vercel.app/_next/image?url=%2Fprofile-pic.jpg&w=384&q=95",
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
      link: "https://parabol.co",
      badges: ["Remote"],
      title: "Full Stack Developer",
      logo: IncentedLogo,
      start: "2023",
      end: "Present",
      description:
        "Implemented new features, led squad, worked on improving the way developers ship the code, started migration from Emotion to Tailwind CSS and more. Technologies: React, TypeScript, GraphQL",
    },
    {
      company: "Clevertech",
      link: "https://clevertech.biz",
      badges: ["Remote"],
      title: "Lead Android Developer → Full Stack Developer",
      logo: ClevertechLogo,
      start: "2015",
      end: "2021",
      description:
        "Created Android mobile apps and led teams for companies like Vision Media, DKMS, or AAA. Built live streaming application for Evercast from scratch. Technologies: Android, Kotlin, React, TypeScript, GraphQL",
    },
    {
      company: "Jojo Mobile",
      link: "https://bsgroup.eu/",
      badges: [],
      title: "Android Developer → Lead Android Developer",
      logo: JojoMobileLogo,
      start: "2012",
      end: "2015",
      description:
        "Built an Android team, created Android apps for biggest Polish companies like LOT, Polskie Radio, Agora, PolskaPress",
    },
    {
      company: "Nokia Siemens Networks",
      link: "https://www.nokia.com",
      badges: [],
      title: "C/C++ Developer",
      logo: NSNLogo,
      start: "2010",
      end: "2012",
      description: "Creating and testing software for LTE base stations",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Redux",
    "Node.js",
    "Tailwindcss",
  ],
  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: IncentedLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
