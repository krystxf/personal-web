<script lang="ts">
  import { experience } from "../../data";
</script>

<section class="p-6 rounded-2xl border border-zinc-100 max-w-sm">
  <h4 class="mb-3 flex text-sm font-semibold text-zinc-900">Work experience</h4>

  <div class="flex flex-col gap-6 mt-6">
    {#each experience as exp}
      <div class="flex">
        <img
          src={exp.logo}
          alt={`${exp.company} logo`}
          class="h-10 w-10 rounded-lg bg-zinc-100"
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
      </div>
    {/each}
  </div>
</section>
