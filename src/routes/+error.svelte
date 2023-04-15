<script>
  import { page } from "$app/stores";
</script>

<div
  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col"
>
  <h1
    class="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl max-w-2xl"
  >
    Error {$page.status}:
    {$page.error?.message}
  </h1>
  <a href="/" class="mt-8 text-zinc-500"> Back to the homepage ></a>
</div>
