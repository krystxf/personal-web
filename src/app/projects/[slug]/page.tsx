import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import { PROJECTS } from "~/data";

function getUrlTitle(title: string | undefined, url: string) {
	return url.includes("github.com")
		? "Source code"
		: (title ??
				url
					.replace(/^http.:\/\/(www\.)?/, "")
					.replace(/\/?(pulls|issues)?\?.*$/, ""));
}

export function generateStaticParams() {
	return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const project = PROJECTS.find((p) => p.slug === slug);
	return {
		title: project
			? `${project.title} | Kryštof Krátký`
			: "Project not found",
	};
}

export default async function ProjectDetailPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const project = PROJECTS.find((p) => p.slug === slug);

	if (!project) notFound();

	return (
		<>
			<Link
				href="/projects"
				className="text-sm text-zinc-500 hover:text-indigo-500 transition"
			>
				&larr; Back to projects
			</Link>

			<div className="mt-8 flex items-center gap-4">
				<ViewTransition name={`project-logo-${project.slug}`}>
					<Image
						src={project.logo}
						alt={`${project.title} logo`}
						width={64}
						height={64}
						className="h-16 w-16 p-[2px] rounded-lg border border-zinc-100 bg-white object-fill aspect-square"
					/>
				</ViewTransition>

				<ViewTransition name={`project-title-${project.slug}`}>
					<h1 className="text-4xl font-bold text-zinc-800">
						{project.title}
					</h1>
				</ViewTransition>
			</div>

			<ViewTransition name={`project-desc-${project.slug}`}>
				<p className="mt-6 text-lg text-zinc-600">
					{project.description}
				</p>
			</ViewTransition>

			<div className="mt-8 flex flex-col gap-3">
				{project.links.map((link) => (
					<a
						key={link.url}
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-indigo-500 transition"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-4 h-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
							/>
						</svg>
						{getUrlTitle(link.label, link.url)}
					</a>
				))}
			</div>
		</>
	);
}
