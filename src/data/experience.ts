import { getDate } from "$utils/parseDate";

export type ExperienceType = {
  company: string;
  logo: string;
  link?: string;
  position: string;
  from: Date;
  to: Date | "now";
  technologies: string[];
  description: string;
};

const EXPERIENCE: ExperienceType[] = [
  {
    company: "Datamole",
    logo: "/images/datamole.avif",
    position: "Front-end developer",
    from: getDate(2023, 7),
    to: "now",
    technologies: ["Next.js", "TypeScript", "Chart.js"],
    description: ``,
  },
  {
    company: "Česká spořitelna",
    logo: "/images/csas.svg",
    position: "Front-end developer",
    from: getDate(2023, 1),
    to: getDate(2023, 7),
    technologies: [
      "React",
      "TypeScript",
      "Nx",
      "Chart.js",
      "Github actions",
      "Storybook",
    ],
    description: `
- web apps for Erste premium banking
- automated the process of deploying a legacy application using Github actions and shell scripts
`,
  },
  {
    company: "Decentree",
    logo: "/images/decentree.avif",
    link: "https://decentree.com/",
    position: "Full-stack developer",
    from: getDate(2021, 12),
    to: getDate(2023, 1),
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Chakra UI",
      "PostgreSQL",
      "Hasura",
      "GraphQL",
      "Apollo",
      "Node.js",
      "Firebase functions",
      "SCSS",
    ],
    description: `
Developing modern web applications using mostly Next.js with Chakra UI & GraphQL
– frontend for registration of documents, orders, clients, etc
– frontend for NFT marketplace
`,
  },
  {
    company: "eDelta",
    logo: "/images/delta.avif",
    position: "Front-end developer",
    from: getDate(2021, 6),
    to: getDate(2021, 10),
    technologies: ["TypeScript", "Next.js", "SCSS", "GraphQL", "Apollo"],
    description: `
– frontend for “highschool comparison web” including administration UI
- web scraping using Puppeteer
`,
  },
  {
    company: "Retia",
    logo: "/images/retia.avif",
    position: "C++ developer",
    from: getDate(2021, 6),
    to: getDate(2021, 8),
    technologies: ["C++", "CMake", "Git"],
    description: `bidirectional translator from proprietary text documents to XML`,
  },
  {
    company: "Eldis",
    logo: "/images/eldis.avif",
    position: "C++ developer",
    to: getDate(2020, 8),
    from: getDate(2020, 6),
    technologies: ["C++", "GTK", "KML"],
    description: `
– radar range visualization in different altitudes using KML (Google Earth)
– translation from proprietary documents to KML
`,
  },
];

const POLISHED_EXPERIENCE = EXPERIENCE.filter(
  (experience) => experience.from.getTime() < new Date().getTime()
)
  .sort((a, b) => {
    if (a.to === "now" && b.to !== "now") return -1;
    if (a.to !== "now" && b.to === "now") return 1;
    return b.from.getTime() - a.from.getTime();
  })
  .map((experience) => {
    if (experience.to === "now") return experience;
    if (experience.to.getTime() > new Date().getTime())
      return {
        ...experience,
        to: "now",
      };
    return experience;
  }) as ExperienceType[];

export { POLISHED_EXPERIENCE as EXPERIENCE };
