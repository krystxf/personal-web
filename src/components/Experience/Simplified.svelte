<script lang="ts">
  import { EXPERIENCE } from "$data";
  import { parseDuration, parseDate } from "$utils";
  import Icon from "heroicons-for-svelte";
  import { ArrowUp } from "heroicons-for-svelte/icons/outline";
</script>

<section class="p-6 rounded-2xl border border-zinc-100 max-w-xl w-full">
  <h4 class="mb-3 flex text-sm font-semibold text-zinc-900">Work experience</h4>

  <ul class="flex flex-col gap-6 mt-6">
    {#each EXPERIENCE as exp}
      <li>
        <a href={`/experience#${exp.company}`} class="flex">
          <img
            src={exp.logo}
            alt={`${exp.company} logo`}
            class="h-11 w-11 p-[2px] rounded-lg border border-zinc-100"
          />
          <div class="flex flex-col ml-4">
            <h5 class="text-base font-medium text-zinc-800">
              {exp.company}
            </h5>
            <span class="text-sm text-zinc-800">{exp.position}</span>
          </div>

          <div class="flex flex-col ml-auto text-right text-sm text-zinc-800">
            <span>{parseDate(exp.from)} — {parseDate(exp.to)}</span>
            <span class="text-zinc-400">
              {parseDuration(exp.duration)}
            </span>
          </div>
        </a>
      </li>
    {/each}

    <a
      href="/experience"
      class="flex items-center justify-center bg-zinc-50 gap-1 px-3 py-2 text-sm rounded-md outline-offset-2 font-medium text-zinc-900 hover:bg-zinc-100"
    >
      Show details
      <Icon icon={ArrowUp} class="rotate-45 scale-[0.8] text-zinc-500" />
    </a>
  </ul>
</section>
