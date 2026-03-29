import type { Contribution } from "~/data";

function MergedIcon() {
	return (
		<svg
			viewBox="0 0 16 16"
			className="h-4 w-4 fill-purple-500 shrink-0"
		>
			<path d="M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z" />
		</svg>
	);
}

function getPrNumber(url: string) {
	const match = url.match(/\/pull\/(\d+)/);
	return match ? `#${match[1]}` : null;
}

export function ContributionCard({
	contribution,
}: {
	contribution: Contribution;
}) {
	const prNumber = getPrNumber(contribution.url);

	return (
		<a
			href={contribution.url}
			target="_blank"
			rel="noopener noreferrer"
			className="block rounded-md border border-zinc-700 bg-zinc-900 px-4 py-3 hover:bg-zinc-800 transition"
		>
			<div className="flex items-start gap-2">
				<MergedIcon />
				<div className="min-w-0">
					<span className="text-sm font-semibold text-zinc-100 hover:text-blue-400 transition">
						{contribution.title}
					</span>
					<p className="text-xs text-zinc-500 mt-0.5">
						{prNumber} merged into{" "}
						<span className="font-medium text-zinc-400">
							{contribution.repo}
						</span>
					</p>
				</div>
			</div>
		</a>
	);
}
