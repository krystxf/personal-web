<script lang="ts">
  import { ExperienceSimplified } from "$components/Experience";
  import { SocialsFlex } from "$components/Socials";
  import { AGE } from "$data";
</script>

<svelte:head>
  <title>Kryštof Krátký</title>
</svelte:head>

<div class="flex gap-4 items-end">
  <img
    src="/images/profile.avif"
    alt="Profile"
    class="w-16 h-16 rounded-full"
  />
  <h1 class="text-4xl font-bold text-zinc-800">Kryštof Krátký</h1>
</div>

<h2
  class="mt-6 text-xl font-bold tracking-tight text-zinc-700 sm:text-3xl max-w-2xl"
>
  I'm full stack developer with passion for frontend
</h2>

<p class="text-base text-zinc-800 max-w-2xl mt-6">
  Hey👋, my name is Kryštof Krátký and I'm currently {AGE} years old. I'm a full
  stack developer with a passion for frontend. I love to experiment with new technologies
  and build things that are useful to others.
</p>

<SocialsFlex />

<div class="flex justify-center mt-12">
  <ExperienceSimplified />
</div>
