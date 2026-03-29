export type Project = {
	slug: string;
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
		slug: "metro-now",
		title: "metro-now",
		description: "Public transport departures from nearest station",
		logo: "/icons/source.svg",
		links: [{ url: "https://github.com/krystxf/metro-now" }],
	},
	{
		slug: "worktree-workflow",
		title: "worktree-workflow",
		description:
			"Create, list, and remove git worktrees with a TUI picker. Syncs gitignored files to new worktrees via hard links and runs post-copy hooks.",
		logo: "/icons/source.svg",
		links: [{ url: "https://github.com/krystxf/worktree-workflow" }],
	},
	{
		slug: "ui-interactions",
		title: "ui-interactions",
		description: "My favorite web interactions",
		logo: "/icons/source.svg",
		links: [{ url: "https://github.com/krystxf/ui-interactions" }],
	},
	{
		slug: "kbar-angular",
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
		slug: "package-lock-graph",
		title: "Package-lock graph",
		description: "Represent your package-lock.json as a graph in Neo4j",
		logo: "/icons/source.svg",
		links: [{ url: "https://github.com/krystxf/lockfiles-graph" }],
	},
];

export type Contribution = {
	repo: string;
	title: string;
	url: string;
	state: "merged" | "closed";
	logo: string;
};

export const CONTRIBUTIONS: Contribution[] = [
	{
		repo: "graphefruit/Beanconqueror",
		title: "brews & beans filtered count",
		url: "https://github.com/graphefruit/Beanconqueror/pull/502",
		state: "merged",
		logo: "https://raw.githubusercontent.com/graphefruit/Beanconqueror/master/resources/icon.png",
	},
	{
		repo: "graphefruit/Beanconqueror",
		title: "add: beans roast range filter",
		url: "https://github.com/graphefruit/Beanconqueror/pull/499",
		state: "merged",
		logo: "https://raw.githubusercontent.com/graphefruit/Beanconqueror/master/resources/icon.png",
	},
	{
		repo: "beekeeper-studio/beekeeper-studio",
		title: "FIX: Postgres create and delete materialized view",
		url: "https://github.com/beekeeper-studio/beekeeper-studio/pull/1502",
		state: "merged",
		logo: "https://avatars.githubusercontent.com/u/53234021",
	},
	{
		repo: "gitpod-io/gitpod",
		title: "Fix overflow on port not found page",
		url: "https://github.com/gitpod-io/gitpod/pull/8121",
		state: "merged",
		logo: "https://avatars.githubusercontent.com/u/37021919",
	},
	{
		repo: "gitpod-io/gitpod",
		title: "Web responsiveness",
		url: "https://github.com/gitpod-io/gitpod/pull/7665",
		state: "merged",
		logo: "https://avatars.githubusercontent.com/u/37021919",
	},
	{
		repo: "gitpod-io/gitpod",
		title: "separator fix",
		url: "https://github.com/gitpod-io/gitpod/pull/7065",
		state: "merged",
		logo: "https://avatars.githubusercontent.com/u/37021919",
	},
];
