<script lang="ts">
  import ProjectCard from "$components/ProjectCard/ProjectCard.svelte";
  import { PROJECTS, CONTRIBUTIONS } from "$data";
</script>

<h2 class="mt-6 text-4xl font-bold tracking-tight text-zinc-800">
  Projects I've worked on recently
</h2>
<p class="mt-6 text-zinc-600">
  I’ve worked on tons of little projects over the years but these are the ones
  that I’m most proud of. All of them are open-source, so if you see something
  that piques your interest, feel free to check out the source code.
</p>

<!-- projects -->
<div
  class="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3"
>
  {#each PROJECTS as project}
    <ProjectCard {project} />
  {/each}
</div>

<h2 class="mt-6 text-4xl font-bold tracking-tight text-zinc-800">
  My contributions to open-source software
</h2>
<!-- contributions -->
<div
  class="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3"
>
  {#each CONTRIBUTIONS as contribution}
    <ProjectCard project={contribution} />
  {/each}
</div>
