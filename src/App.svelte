<script lang="ts">
  import { ExperienceSimplified } from "./components/Experience";
  import Layout from "./components/Layout/Layout.svelte";
  import { SocialsFlex } from "./components/Socials";
</script>

<Layout>
  <main class="mx-auto max-w-5xl px-24 pt-32 pb-24 w-full">
    <img
      src="/images/profile.avif"
      alt="Profile"
      class="w-16 h-16 rounded-full"
    />

    <h1
      class="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl max-w-2xl"
    >
      Full stack developer with a passion for frontend
    </h1>

    <p class="text-base text-zinc-800 max-w-2xl mt-6">
      Hey, my name is Kryštof Krátký and I'm a full stack developer with a
      passion for frontend. I love to experiment with new technologies and build
      things that are useful to others.
    </p>

    <SocialsFlex />

    <div class="flex justify-center mt-12">
      <ExperienceSimplified />
    </div>

    <!-- <SocialsList /> -->
  </main>
</Layout>
