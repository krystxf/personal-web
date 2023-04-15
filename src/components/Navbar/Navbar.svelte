<script lang="ts">
  import { NAV_LINKS } from "$data";
  import { page } from "$app/stores";
</script>

<nav class="fixed top-6 left-1/2 -translate-x-1/2 leading-6 z-50">
  <ul
    class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur leading-6"
  >
    {#each NAV_LINKS as link}
      <li>
        <a
          class={`${
            link.path === $page.url.pathname
              ? "text-indigo-500"
              : "text-zinc-800 hover:text-indigo-500"
          } relative block px-3 py-2`}
          href={link.path}
        >
          {link.label}

          {#if link.path === $page.url.pathname}
            <span
              class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 to-teal-500/0 via-indigo-400"
            />
          {/if}
        </a>
      </li>
    {/each}
  </ul>
</nav>
