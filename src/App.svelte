<script>
	export let people;
	import Table from "./components/Table/Table.svelte"
</script>

<main>
	<h1>People-verse</h1>
	<p>A place where you will always find new faces and names</p>
	<Table list={people}/>

</main>



<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>