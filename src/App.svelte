<script>
	export let people;
	import Table from "./components/Table/Table.svelte"
</script>

<main>
	<h1>People-verse</h1>
	<p>A place where you will always find new people</p>
	<Table list={people}/>

</main>



<style>
	main {
		background-image: url("/comfy.jpg");
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ffffff;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: bold;
    	text-shadow: 4px 4px #1f1e1e;
	}
	p{
		font-size:28px;
		color: #ffffff;
		text-shadow: 4px 4px #1f1e1e;
	}

	

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>