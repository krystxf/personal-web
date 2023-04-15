<script lang="ts">
  import { NAV_LINKS } from "$data";
  import Icon from "heroicons-for-svelte";
  import { Code } from "heroicons-for-svelte/icons/outline";
</script>

<footer
  class="border-t border-zinc-100 pb-16 pt-10 px-5 md:px-24 flex flex-col sm:flex-row gap-4 sm:gap-0 justify-evenly sm:justify-between text-sm"
>
  <ul class="flex justify-evenly gap-6 px-4">
    {#each NAV_LINKS as link}
      <li class="hover:text-indigo-500">
        <a href={link.path}>{link.label}</a>
      </li>
    {/each}
  </ul>

  <a
    href="https://github.com/krystxf/personal-web"
    class="hover:text-indigo-400 text-zinc-400 flex gap-2 items-center sm:m-0 m-auto"
  >
    <Icon icon={Code} />
    View source code
  </a>
</footer>
