<script lang="ts">
  import "$styles/global.css";

  import Footer from "$components/Footer/Footer.svelte";
  import Navbar from "$components/Navbar/Navbar.svelte";
</script>

<div class=" sm:px-8">
  <div
    class="mx-auto max-w-7xl border-x border-zinc-100 bg-white min-h-screen leading-6"
  >
    <Navbar />

    <!-- main content -->
    <main
      class="mx-auto max-w-5xl px-5 md:px-24 pt-32 pb-24 w-full min-h-screen transition-all ease-in-out duration-150"
    >
      <slot />
    </main>

    <Footer />
  </div>
</div>
