import Image from "next/image";
import Link from "next/link";
import { EXPERIENCE } from "~/data";
import { getDuration, parseDate } from "~/utils/parse-date";

export function ExperienceSimplified() {
	return (
		<section className="p-6 rounded-2xl border border-zinc-100 max-w-xl w-full">
			<h4 className="mb-3 flex text-sm font-semibold text-zinc-900">
				Work experience
			</h4>

			<ul className="flex flex-col gap-6 mt-6">
				{EXPERIENCE.map((exp) => (
					<li key={exp.company}>
						<Link
							href={`/experience#${exp.company}`}
							className="flex"
						>
							<Image
								src={exp.logo}
								alt={`${exp.company} logo`}
								width={44}
								height={44}
								className="h-11 w-11 p-[2px] rounded-lg border border-zinc-100"
							/>
							<div className="flex flex-col ml-4">
								<h5 className="text-base font-medium text-zinc-800">
									{exp.company}
								</h5>
								<span className="text-sm text-zinc-800">
									{exp.position}
								</span>
							</div>

							<div className="flex flex-col ml-auto text-right text-sm text-zinc-800">
								<span>
									{parseDate(exp.from)} —{" "}
									{parseDate(exp.to)}
								</span>
								<span className="text-zinc-400">
									{getDuration(exp.from, exp.to)}
								</span>
							</div>
						</Link>
					</li>
				))}

				<Link
					href="/experience"
					className="flex items-center justify-center bg-zinc-50 gap-1 px-3 py-2 text-sm rounded-md outline-offset-2 font-medium text-zinc-900 hover:bg-zinc-100"
				>
					Show details
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-4 h-4 rotate-45 text-zinc-500"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
						/>
					</svg>
				</Link>
			</ul>
		</section>
	);
}
