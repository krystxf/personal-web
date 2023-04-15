export const EXPERIENCE = [
  {
    company: "Česká spořitelna",
    logo: "/images/csas.svg",
    position: "Front-end developer",
    from: "2023",
    to: "Present",
    duration: 4,
    technologies: ["React", "TypeScript", "Nx", "Github actions", "Storybook"],
    description: `
- web apps for Erste premium banking
- automated the process of deploying a legacy application using Github actions and shell scripts
`,
  },
  {
    company: "Decentree",
    logo: "/images/decentree.avif",
    position: "Full-stack developer",
    from: "2022",
    to: "2023",
    duration: 14,
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
    from: new Date(2021, 6),
    to: new Date(2021, 11),
    duration: 4,
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
    from: new Date(2021, 5),
    to: new Date(2021, 8),
    duration: 3,
    technologies: ["C++", "CMake", "Git"],
    description: `bidirectional translator from proprietary text documents to XML`,
  },
  {
    company: "Eldis",
    logo: "/images/eldis.avif",
    position: "C++ developer",
    from: new Date(2020, 6),
    to: new Date(2020, 7),
    duration: 2,
    technologies: ["C++", "GTK", "KML"],
    description: `
– radar range visualization in different altitudes using KML (Google Earth)
– translation from proprietary documents to KML
`,
  },
];
