<script lang="ts">
  import { experience } from "../../data";
</script>

<section class="p-6 rounded-2xl border border-zinc-100 max-w-sm">
  <h4 class="mb-3 flex text-sm font-semibold text-zinc-900">Work experience</h4>

  <div class="flex flex-col gap-6 mt-6">
    {#each experience as exp}
      <a href={`/experience#${exp["id"] ?? exp.company}`} class="flex">
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

        <div class="flex flex-col ml-auto">
          <span class="text-sm text-zinc-800">{exp.from} — {exp.to}</span>
        </div>
      </a>
    {/each}

    <a
      href="/experience"
      class="flex items-center justify-center bg-zinc-50 gap-2 px-3 py-2 text-sm rounded-md outline-offset-2 font-medium text-zinc-900 hover:bg-zinc-100"
      >Show details</a
    >
  </div>
</section>
