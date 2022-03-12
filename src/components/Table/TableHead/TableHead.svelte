<script>
    export let headData;

    function capitalize(s){
        return s.charAt(0).toUpperCase() + s.slice(1);
    }

    import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sortTable(event) {
        const target = event.target.id
		dispatch('message', {
			column: target
		});
	}
</script>
<tr>
{#each headData as data}
<th on:click={sortTable} id={data}>{capitalize(data)}</th>
{/each}
</tr>

<style>
tr{
    display:flex;
    flex-direction:row;
    justify-content: space-around;
    width:100%;
    border: 1px black solid;
}

th{
    width:20%;
    font-size: 35px;
}

th:hover{
    cursor: pointer;
}
</style>