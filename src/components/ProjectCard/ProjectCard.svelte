<script lang="ts">
  import type { Project } from "$data";

  export let project: Project;

  const getUrlTitle = (title: string | undefined, url: string) => {
    return url.includes("github.com")
      ? "Source code"
      : title ??
          url
            .replace(/^http.:\/\/(www\.)?/, "")
            .replace(/\/?(pulls|issues)?\?.*$/, "");
  };
</script>

<div class="hover:bg-zinc-50 rounded-xl p-4 flex flex-col">
  <img
    src={project.logo}
    alt={`${project.title} logo`}
    class="h-11 w-11 p-[2px] rounded-lg border border-zinc-100"
  />

  <h3 class="mt-2 text-base font-semibold text-zinc-800">
    {project.title}
  </h3>

  <p class="relative z-10 mt-2 text-sm text-zinc-600">
    {project.description}
  </p>

  <ul
    class="relative z-10 mt-5 flex flex-col gap-2 text-sm font-medium text-zinc-400 transition h-full justify-end"
  >
    {#each project.links as link}
      <li>
        <a
          href={link.url}
          target="_blank"
          class="flex text-sm font-medium text-zinc-400 transition hover:text-indigo-500"
        >
          {getUrlTitle(link.label, link.url)}
        </a>
      </li>
    {/each}
  </ul>
</div>
