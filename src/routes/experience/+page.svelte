<script lang="ts">
  import { EXPERIENCE } from "$data";
  import { parseDuration, parseDate } from "$utils";

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

<h2 class="mt-6 text-4xl font-bold tracking-tight text-zinc-800">
  Working experience
</h2>

<ul class="flex flex-col gap-16 mt-8">
  {#each EXPERIENCE as exp}
    <li class="flex gap-4" id={exp.company}>
      <img
        src={exp.logo}
        alt={`${exp.company} logo`}
        class="h-12 w-12 p-[2px] mt-2 rounded-lg border border-zinc-100"
      />

      <div>
        <h3 class="text-2xl font-bold text-zinc-800">{exp.company}</h3>
        <p class="text-lg text-zinc-500">{exp.position}</p>
        <p class="text-sm text-zinc-500">
          {`${parseDate(exp.from)} — ${parseDate(exp.to)} · ${parseDuration(
            exp.duration
          )}`}
        </p>

        <p>
          {@html parseDescription(exp.description)}
        </p>

        {#if exp.technologies}
          <div class="mt-4 font-semibold text-zinc-600">Technologies:</div>
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
