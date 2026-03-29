import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import type { Project } from "~/data";

export function ProjectCard({ project }: { project: Project }) {
	return (
		<Link
			href={`/projects/${project.slug}`}
			className="hover:bg-zinc-50 rounded-xl p-4 flex flex-col"
		>
			<ViewTransition name={`project-logo-${project.slug}`}>
				<Image
					src={project.logo}
					alt={`${project.title} logo`}
					width={44}
					height={44}
					className="h-11 w-11 p-[2px] rounded-lg border border-zinc-100 bg-white object-fill aspect-square"
				/>
			</ViewTransition>

			<ViewTransition name={`project-title-${project.slug}`}>
				<h3 className="mt-2 text-base font-semibold text-zinc-800">
					{project.title}
				</h3>
			</ViewTransition>

			<ViewTransition name={`project-desc-${project.slug}`}>
				<p className="relative z-10 mt-2 text-sm text-zinc-600">
					{project.description}
				</p>
			</ViewTransition>
		</Link>
	);
}
