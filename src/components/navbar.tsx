"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "~/data";

export function Navbar() {
	const pathname = usePathname();

	return (
		<nav className="fixed top-6 left-1/2 -translate-x-1/2 leading-6 z-50">
			<ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur leading-6">
				{NAV_LINKS.map((link) => (
					<li key={link.path}>
						<Link
							className={`${
								link.path === pathname
									? "text-indigo-500"
									: "text-zinc-800 hover:text-indigo-500"
							} relative block px-3 py-2`}
							href={link.path}
						>
							{link.label}
							{link.path === pathname && (
								<span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 to-teal-500/0 via-indigo-400" />
							)}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
