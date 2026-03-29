import "~/styles/globals.css";

import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Footer } from "~/components/footer";
import { Navbar } from "~/components/navbar";

export const metadata: Metadata = {
	title: "Kryštof Krátký",
	description: "Personal website of Kryštof Krátký",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
	subsets: ["latin"],
	variable: "--font-geist-sans",
});

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html className={`${geist.variable}`} lang="en">
			<body>
				<div className="sm:px-8">
					<div className="mx-auto max-w-7xl border-x border-zinc-100 bg-white min-h-screen leading-6">
						<Navbar />
						<main className="mx-auto max-w-5xl px-5 md:px-24 pt-32 pb-24 w-full min-h-screen transition-all ease-in-out duration-150">
							{children}
						</main>
						<Footer />
					</div>
				</div>
			</body>
		</html>
	);
}
