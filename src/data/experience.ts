const experience = [
  {
    company: "Česká spořitelna",
    id: "Ceska-sporitelna",
    logo: "/images/csas.svg",
    position: "Front-end developer",
    from: "2023",
    to: "Present",
    duration: 4,
    technologies: ["React", "TypeScript", "Nx", "Github actions", "Storybook"],
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
  },
  {
    company: "eDelta",
    logo: "/images/delta.avif",
    position: "Front-end developer",
    from: new Date(2021, 6),
    to: new Date(2021, 11),
    duration: 4,
    technologies: ["TypeScript", "Next.js", "SCSS", "GraphQL", "Apollo"],
  },
  {
    company: "Retia",
    logo: "/images/retia.avif",
    position: "C++ developer",
    from: new Date(2021, 5),
    to: new Date(2021, 8),
    duration: 3,
    technologies: ["C++", "CMake", "Git"],
  },
  {
    company: "Eldis",
    logo: "/images/eldis.avif",
    position: "C++ developer",
    from: new Date(2020, 6),
    to: new Date(2020, 7),
    duration: 2,
    technologies: ["C++", "GTK", "KML"],
  },
] as const;

export default experience;
