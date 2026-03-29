import Image from "next/image";

export function SocialsFlex() {
	return (
		<section className="mt-6 flex gap-6">
			<a href="https://github.com/krystxf">
				<Image
					src="/icons/github.svg"
					alt="Github"
					width={20}
					height={20}
					className="inline w-5 h-5"
				/>
			</a>
			<a href="https://www.linkedin.com/in/krystofkratky/">
				<Image
					src="/icons/linkedin.svg"
					alt="LinkedIn"
					width={20}
					height={20}
					className="inline w-5 h-5 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
				/>
			</a>
			<a href="mailto:krystof.kratky2003@gmail.com">
				<Image
					src="/icons/email.svg"
					alt="Email"
					width={20}
					height={20}
					className="inline w-5 h-5 text-red-500"
				/>
			</a>
		</section>
	);
}
