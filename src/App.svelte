<script lang="ts">
  import { ExperienceSimplified } from "./components/Experience";
  import Footer from "./components/Footer";
  import Navbar from "./components/Navbar";
  import { SocialsFlex, SocialsList } from "./components/Socials";
</script>

<div class="bg-zinc-50">
  <div
    class="mx-auto max-w-7xl border-x border-zinc-100 bg-white min-h-screen leading-6"
  >
    <Navbar />

    <main class="mx-auto max-w-5xl px-4 py-36">
      <h1
        class="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl max-w-2xl"
      >
        Full stack developer with a passion for frontend
      </h1>

      <p class="text-base text-zinc-800 max-w-2xl mt-6">
        Hey, my name is Kryštof Krátký and I'm a full stack developer with a
        passion for frontend. I love to experiment with new technologies and
        build things that are useful to others.
      </p>

      <!-- Socials -->
      <SocialsFlex />

      <ExperienceSimplified />

      <SocialsList />
    </main>
    <Footer />
  </div>
</div>
