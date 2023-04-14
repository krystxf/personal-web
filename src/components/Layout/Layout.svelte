<script lang="ts">
  import Footer from "../Footer/Footer.svelte";
  import Navbar from "../Navbar/Navbar.svelte";
</script>

<div class="bg-zinc-50 sm:px-8">
  <div
    class="mx-auto max-w-7xl border-x border-zinc-100 bg-white min-h-screen leading-6"
  >
    <Navbar />

    <!-- main content -->
    <slot />

    <Footer />
  </div>
</div>
