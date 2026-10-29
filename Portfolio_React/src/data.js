import { GitHubIcon, LinkedInIcon } from "./components/Icons";

export const navLinks = [
  {
    label: "About",
    ref: "#about",
  },
  {
    label: "Experience",
    ref: "#experience",
  },
  {
    label: "Education",
    ref: "#education",
  },
  {
    label: "Projects",
    ref: "#projects",
  },
  {
    label: "Contact Me",
    ref: "#contact",
  },
];
export const socialLinks = [
  {
    label: "GitHub",
    url: "https://github.com/NamrathaMa?tab=repositories",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/namratham/",
    icon: LinkedInIcon,
  },
];
export const about = {
  jobExp:
    "Most recently I was a Full-Stack Software Engineer at Chubb, working in Angular, TypeScript and SQL on insurance applications. Before that I was at Danlaw and spent three years at Deloitte working on Oracle HCM Cloud.",
  eduExp:
    "I studied Computer Science at NYU Courant (MS) and PES University (B.Tech). Here are the technologies I work with most:",
  skills: [
    "TypeScript",
    "JavaScript",
    "Angular",
    "React",
    "HTML",
    "CSS",
    "Node.js",
    "SQL",
    "MongoDB",
  ],
  imgUrl: "images/Nammie_Photo.jpg",
  imgAlt: "Namratha Manikonda",
};

export const experiences = [
  {
    name: "Chubb",
    buttonData: "chubb",
    title: "Full-Stack Software Engineer",
    url: "https://www.chubb.com/us-en/",
    date: "Mar 2023 – Jul 2026",
    location: "UNITED STATES",
    exp: [
      "Developed customer-facing quote workflows and reusable Angular components—including dialogs, loading modals, and standalone pages—using TypeScript to streamline Chubb’s small-business insurance quoting experience.",
      "Developed and tested a SQL stored procedure to reconcile rate modification factors for 2,000–7,000 California workers’ compensation policies each month against WCIRB data, demonstrating approximately 80% automated validation coverage while routing unresolved discrepancies for manual review to mitigate inaccurate submissions and potential regulatory fines.",
      "Owned enhancement and incident intake workflows for 5–6 Workers’ Compensation teams by designing and maintaining Microsoft Forms and Power Automate flows, standardizing request data for Jira and ServiceNow, creating Jira tickets, and communicating ticket status and critical issues to requesters and leadership.",
    ],
  },
  {
    name: "Danlaw",
    buttonData: "danlaw",
    title: "Software Engineer, Applications Intern",
    url: "https://www.danlawinc.com/",
    date: "May 2022 – Dec 2022",
    location: "UNITED STATES",
    exp: [
      "Created and presented dashboard wireframes to stakeholders, then prototyped an internal QA application for validating journey-level data—including speed, acceleration, and hard-braking events—transmitted by vehicle telemetry devices.",
      "Modeled telemetry and user data in MongoDB and developed Node.js and Express.js REST APIs supporting CRUD operations and prototype login functionality, along with the dashboard’s initial HTML and CSS interface.",
    ],
  },
  {
    name: "Deloitte",
    buttonData: "deloitte",
    title: "Software Engineer / Analyst",
    url: "https://www.deloitte.com/ui/en/about.html",
    date: "Aug 2018 – Apr 2021",
    location: "INDIA",
    exp: [
      "Collaborated directly with stakeholders from Fortune 500 clients to gather requirements and configure and test REST API integrations supporting the migration of employee data from legacy systems to Oracle HCM Cloud.",
      "Developed and tested Oracle HCM Cloud data-extraction and reporting solutions using HCM Extracts, Fast Formulas, and Oracle BI Publisher to support recurring payroll, benefits, and sensitive employee-data reporting for client teams.",
      "Performed root-cause analysis and optimized PL/SQL reporting queries by correcting inefficient joins, reducing execution time by 14% based on before-and-after performance testing.",
    ],
  },
];

export const education = [
  {
    name: "New York University, Courant Institute",
    degree: "MS Computer Science",
    year: "2021 – 2022",
  },
  {
    name: "PES University",
    degree: "B.Tech, Information Science and Engineering",
    year: "2014 – 2018",
  },
];

export const statusCodes = {
  done: "built & tested",
  live: "live",
  wip: "in progress",
};

export const projects = [
  {
    title: "Personal Portfolio",
    description:
      "The site you're looking at. A fun website about me, and what I love doing.",
    status: "live",
    tech: ["HTML", "CSS", "React"],
    repo: "https://github.com/NamrathaMa/React_Course_Projects/tree/main/Portfolio_React",
  },
  {
    title: "Guess My Number",
    description:
      "A number is randomly generated and the player needs to guess the number which is between 1-20. They have 20 tries to do so and if you are unable to guess, you lose!",
    status: "done",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/NamrathaMa/JavaScript_Projects/tree/main/Guess-My-Number-Game",
  },
  {
    title: "Pig Game",
    description:
      "Two-player game where each player rolls the dice to increase their total. Both players take turns and the first to reach 100 wins!",
    status: "done",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/NamrathaMa/JavaScript_Projects/tree/main/Pig-Game",
  },
  {
    title: "Modal Window",
    description:
      "Just a simple app that opens a modal window when the buttons are clicked, and there are various ways to close the modal. This was an application just to explore different events that happen in the DOM.",
    status: "done",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/NamrathaMa/JavaScript_Projects/tree/main/Modal-Window",
  },
];
