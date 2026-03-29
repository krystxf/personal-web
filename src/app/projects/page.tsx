import type { Metadata } from "next";
import { ContributionCard } from "~/components/contribution-card";
import { ProjectCard } from "~/components/project-card";
import { CONTRIBUTIONS, PROJECTS } from "~/data";

export const metadata: Metadata = {
	title: "Projects | Kryštof Krátký",
};

export default function ProjectsPage() {
	return (
		<>
			<h2 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800">
				Projects I&apos;ve worked on recently
			</h2>
			<p className="mt-6 text-zinc-600">
				I&apos;ve worked on tons of little projects over the years but
				these are the ones that I&apos;m most proud of. All of them are
				open-source, so if you see something that piques your interest,
				feel free to check out the source code.
			</p>

			<div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
				{PROJECTS.map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</div>

			<h2 className="mt-12 text-4xl font-bold tracking-tight text-zinc-800">
				My contributions to open-source software
			</h2>

			<div className="mt-6 flex flex-col gap-3">
				{CONTRIBUTIONS.map((contribution) => (
					<ContributionCard
						key={contribution.url}
						contribution={contribution}
					/>
				))}
			</div>
		</>
	);
}
