<script>
	let count = 0;
	const increment = () => {
		count += 1;
	};
</script>

<div class="flex flex-col items-center justify-center gap-10 h-screen">
	<h1 class="text-4xl">Counter: {count}</h1>
	<button class="bg-blue-400 px-3 py-2 rounded text-white" on:click={increment}>increment</button>
	{#if count > 10}
		<p>{count} is greater than 10</p>
	{:else}
		<p>{count} is between 0 and 10</p>
	{/if}
</div>
