<script>
    export let list;
    let listOfPeople = list.listOfPeople
    const headData = Object.keys(listOfPeople[0]);

    import TableHead from "./TableHead/TableHead.svelte"
    import TableRow from "./TableRow/TableRow.svelte"

    function sort(event){
        const target =event.detail.column;
        listOfPeople = listOfPeople.sort(function(a,b){
            let x = a[target]
            let y = b[target]
            if(x<y) return -1;
            if(y>x) return 1;
            return 0;
        })

    }
</script>
<table>
<TableHead headData={headData} on:message={sort}/>
{#each listOfPeople as person}
<TableRow personData={person}/>
{/each}
</table>

<style>

table{
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    width: 100%;
    border: 1px black solid;
}


</style>

