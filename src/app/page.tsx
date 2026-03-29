import Image from "next/image";
import { ExperienceSimplified } from "~/components/experience-simplified";
import { SocialsFlex } from "~/components/socials-flex";
import { AGE } from "~/data";

export default function HomePage() {
	return (
		<>
			<div className="flex gap-4 items-end">
				<Image
					src="/images/profile.jpeg"
					alt="Profile"
					width={64}
					height={64}
					className="w-16 h-16 rounded-full"
				/>
				<h1 className="text-4xl font-bold text-zinc-800">
					Kryštof Krátký
				</h1>
			</div>

			<h2 className="mt-6 text-xl font-bold tracking-tight text-zinc-700 sm:text-3xl max-w-2xl">
				I&apos;m full stack developer with passion for frontend
			</h2>

			<p className="text-base text-zinc-800 max-w-2xl mt-6">
				Hey, my name is Kryštof Krátký and I&apos;m currently {AGE}{" "}
				years old. I&apos;m a full stack developer with a passion for
				frontend. I love to experiment with new technologies and build
				things that are useful to others.
			</p>

			<SocialsFlex />

			<div className="flex justify-center mt-12">
				<ExperienceSimplified />
			</div>
		</>
	);
}
