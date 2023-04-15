<script>
  import { page } from "$app/stores";
</script>

<div
  class="absolute pt-14 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col"
>
  <h1 class="px-2 mt-6 text-4xl font-bold text-zinc-800 sm:text-5xl max-w-2xl">
    <span class="text-zinc-400 text-2xl">Error {$page.status}:</span>
    <br /><span>{$page.error?.message}</span>
  </h1>
  <a
    href="/"
    class="px-2 mt-4 text-zinc-500 hover:text-indigo-500 transition-all ease-in-out duration-100 flex gap-1 hover:gap-3 font-medium"
  >
    Back to the homepage <span>></span></a
  >
</div>
