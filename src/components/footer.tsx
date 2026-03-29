import Link from "next/link";
import { NAV_LINKS } from "~/data";

export function Footer() {
	return (
		<footer className="border-t border-zinc-100 pb-16 pt-10 px-5 md:px-24 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-evenly sm:justify-between text-sm">
			<ul className="flex justify-evenly gap-6 px-4">
				{NAV_LINKS.map((link) => (
					<li key={link.path} className="hover:text-indigo-500">
						<Link href={link.path}>{link.label}</Link>
					</li>
				))}
			</ul>

			<a
				href="https://github.com/krystxf/personal-web"
				className="hover:text-indigo-400 text-zinc-400 flex gap-2 items-center sm:m-0 m-auto"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-5 h-5"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
					/>
				</svg>
				View source code
			</a>
		</footer>
	);
}
