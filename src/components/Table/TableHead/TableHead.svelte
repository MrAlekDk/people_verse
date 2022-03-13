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
    background-color: rgba(58, 57, 57, 0.55);
}

th{
    width:20%;
    font-size: 35px;
    user-select: none;
    color: white;
    text-shadow: 4px 4px #1f1e1e;
}

th:hover{
    cursor: pointer;
}
</style>