export type Project = {
  title: string;
  description: string;
  logo: string;
  links: {
    label?: string | undefined;
    url: string;
  }[];
};

export const PROJECTS: Project[] = [
  {
    title: "Kbar Angular",
    description:
      "Plug-n-play tool for efficient navigation in your web application.",
    logo: "/images/kbar-angular.svg",
    links: [
      { url: "https://github.com/krystxf/kbar-angular" },
      {
        label: "Demo",
        url: "https://kbar-angular.vercel.app",
      },
    ],
  },
  {
    title: "Package-lock graph",
    description: "Represent your package-lock.json as a graph in Neo4j",
    logo: "/icons/source.svg",
    links: [{ url: "https://github.com/krystxf/lockfiles-graph" }],
  },
];

export const CONTRIBUTIONS: Project[] = [
  {
    title: "Beanconqueror",
    description: "I added several filters and made some design changes",
    logo: "https://raw.githubusercontent.com/graphefruit/Beanconqueror/master/resources/icon.png",
    links: [
      {
        url: "https://www.github.com/graphefruit/Beanconqueror/pulls?q=is%3Apr+author%3Akrystxf",
      },
    ],
  },
  {
    title: "Beekeeper studio",
    description:
      "I fixed functions used to export the materialized view query and remove materialized view.",
    links: [
      {
        url: "https://github.com/beekeeper-studio/beekeeper-studio/pulls?q=is%3Apr+author%3Akrystxf+",
      },
    ],
    logo: "https://avatars.githubusercontent.com/u/53234021",
  },
  {
    title: "Gitpod",
    description: "Mobile responsiveness bug fixes",
    links: [
      {
        url: "https://github.com/gitpod-io/gitpod/pulls?q=is%3Apr+author%3Akrystxf+label%3Aapproved",
      },
    ],
    logo: "https://avatars.githubusercontent.com/u/37021919",
  },
];
