<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	let count = 0;
</script>

<main class="flex h-screen w-screen justify-center items-center flex-col gap-10">
	<p class="text-3xl font-light">Count: {count}</p>
	<h1 class="text-7xl font-bold">Hello World!</h1>
	<Button size="lg" on:click={() => count++}>Click Me</Button>
</main>
