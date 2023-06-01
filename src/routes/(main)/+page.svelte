<script lang="ts">
  import { ExperienceSimplified } from "$components/Experience";
  import { SocialsFlex } from "$components/Socials";
  import { AGE } from "$data";
</script>

<svelte:head>
  <title>Kryštof Krátký</title>
</svelte:head>

<img src="/images/profile.avif" alt="Profile" class="w-16 h-16 rounded-full" />

<h1
  class="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl max-w-2xl"
>
  Full stack developer with a passion for frontend
</h1>

<p class="text-base text-zinc-800 max-w-2xl mt-6">
  Hey👋, my name is Kryštof Krátký and I'm currently {AGE} years old. I'm a full
  stack developer with a passion for frontend. I love to experiment with new technologies
  and build things that are useful to others.
</p>

<SocialsFlex />

<div class="flex justify-center mt-12">
  <ExperienceSimplified />
</div>
