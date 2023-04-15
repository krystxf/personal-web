<script lang="ts">
  import { NAV_LINKS } from "$data";
</script>

<footer class="border-t border-zinc-100 pb-16 pt-10 px-16 flex justify-between">
  <ul class="flex gap-6 px-4">
    {#each NAV_LINKS as link}
      <li class="hover:text-indigo-500">
        <a href={link.path}>{link.label}</a>
      </li>
    {/each}
  </ul>

  <a
    href="https://github.com/krystxf/personal-web"
    class="hover:text-indigo-400 text-zinc-400">View source code</a
  >
</footer>
