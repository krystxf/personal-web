import type { Metadata } from "next";
import Image from "next/image";
import { EXPERIENCE, SKILLS } from "~/data";
import { getDuration, parseDate } from "~/utils/parse-date";

export const metadata: Metadata = {
	title: "Experience | Kryštof Krátký",
};

function parseDescription(description: string) {
	return description
		.replace(/\n/, "") // remove first line break
		.replace(/\n/g, "<br>") // replace line breaks with <br>
		.replace(
			/(\[([^\]]+)\]\(([^)]+)\))/g,
			'<a href="$3" target="_blank" class="text-indigo-500">$2</a>',
		); // replace markdown links with <a>
}

export default function ExperiencePage() {
	return (
		<>
			<h2 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800">
				Skills
			</h2>
			<ul className="flex flex-wrap gap-1 gap-y-0 mt-8">
				{SKILLS.map((skill, index) => (
					<span key={skill}>
						{index > 0 && SKILLS.length > 1 && <span> · </span>}
						<span>{skill}</span>
					</span>
				))}
			</ul>

			<h2 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800">
				Experience
			</h2>

			<ul className="flex flex-col gap-16 mt-8">
				{EXPERIENCE.map((exp) => (
					<li
						key={exp.company}
						className="flex gap-4"
						id={exp.company}
					>
						{exp.link ? (
							<a href={exp.link} target="_blank" rel="noopener noreferrer">
								<Image
									src={exp.logo}
									alt={`${exp.company} logo`}
									width={48}
									height={48}
									className="h-12 w-12 p-[2px] mt-2 rounded-lg border border-zinc-100"
								/>
							</a>
						) : (
							<Image
								src={exp.logo}
								alt={`${exp.company} logo`}
								width={48}
								height={48}
								className="h-12 w-12 p-[2px] mt-2 rounded-lg border border-zinc-100"
							/>
						)}

						<div>
							<h3 className="text-2xl font-bold text-zinc-800">
								{exp.company}
							</h3>
							<p className="text-lg text-zinc-500">
								{exp.position}
							</p>
							<p className="text-sm text-zinc-500">
								{`${parseDate(exp.from)} — ${parseDate(exp.to)} · ${getDuration(exp.from, exp.to)}`}
							</p>

							<p
								dangerouslySetInnerHTML={{
									__html: parseDescription(exp.description),
								}}
							/>

							{exp.technologies.length > 0 && (
								<>
									<div className="mt-4 font-semibold text-zinc-600 text-sm">
										Technologies:
									</div>
									<div className="flex flex-wrap gap-1 gap-y-0">
										{exp.technologies.map((tech, index) => (
											<span key={tech}>
												<span className="text-sm text-zinc-500">
													{tech}
												</span>
												{index <
													exp.technologies.length -
														1 && (
													<span className="text-sm text-zinc-500">
														·
													</span>
												)}
											</span>
										))}
									</div>
								</>
							)}
						</div>
					</li>
				))}
			</ul>
		</>
	);
}
