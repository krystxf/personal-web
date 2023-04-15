<script lang="ts">
  import { NAV_LINKS } from "$data";
</script>

<nav class="fixed top-6 left-1/2 -translate-x-1/2 leading-6 z-50">
  <div
    class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur leading-6"
  >
    {#each NAV_LINKS as link}
      <a class="relative block px-3 py-2 hover:text-indigo-500" href={link.path}
        >{link.label}</a
      >
    {/each}
  </div>
</nav>
