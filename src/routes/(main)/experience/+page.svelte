<script lang="ts">
  import { EXPERIENCE, SKILLS } from "$data";
  import { parseDate, getDuration } from "$utils";

  const parseDescription = (description: string) => {
    return description
      .replace(/\n/, "") // remove first line break
      .replace(/\n/g, "<br>") // replace line breaks with <br>
      .replace(
        /(\[([^\]]+)\]\(([^)]+)\))/g,
        '<a href="$3" target="_blank" class="text-indigo-500">$2</a>'
      ); // replace markdown links with <a>
  };
</script>

<svelte:head>
  <title>Experience | Kryštof Krátký</title>
</svelte:head>

<h2 class="mt-6 text-4xl font-bold tracking-tight text-zinc-800">Skills</h2>
<ul class="flex flex-wrap gap-1 gap-y-0 mt-8">
  {#each SKILLS as skill, index}
    {#if index > 0 && SKILLS.length > 1}
      <span> · </span>
    {/if}
    <span>{skill}</span>
  {/each}
</ul>

<h2 class="mt-6 text-4xl font-bold tracking-tight text-zinc-800">Experience</h2>

<ul class="flex flex-col gap-16 mt-8">
  {#each EXPERIENCE as exp}
    <li class="flex gap-4" id={exp.company}>
      {#if exp.link}
        <a href={exp.link} target="_blank">
          <img
            src={exp.logo}
            alt={`${exp.company} logo`}
            class="h-12 w-12 p-[2px] mt-2 rounded-lg border border-zinc-100"
          />
        </a>
      {:else}
        <img
          src={exp.logo}
          alt={`${exp.company} logo`}
          class="h-12 w-12 p-[2px] mt-2 rounded-lg border border-zinc-100"
        />
      {/if}

      <div>
        <h3 class="text-2xl font-bold text-zinc-800">{exp.company}</h3>
        <p class="text-lg text-zinc-500">{exp.position}</p>
        <p class="text-sm text-zinc-500">
          {`${parseDate(exp.from)} — ${parseDate(exp.to)} · ${getDuration(
            exp.from,
            exp.to
          )}`}
        </p>

        <p>
          {@html parseDescription(exp.description)}
        </p>

        {#if exp.technologies}
          <div class="mt-4 font-semibold text-zinc-600 text-sm">
            Technologies:
          </div>
          <div class="flex flex-wrap gap-1 gap-y-0">
            {#each exp.technologies as tech, index}
              <span class="text-sm text-zinc-500">{tech}</span>
              {#if index < exp.technologies.length - 1}
                <span class="text-sm text-zinc-500">·</span>
              {/if}
            {/each}
          </div>
        {/if}
      </div>
    </li>
  {/each}
</ul>
