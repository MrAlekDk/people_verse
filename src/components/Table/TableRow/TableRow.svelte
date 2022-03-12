<script>
    export let personData;

    const listOfData = Object.keys(personData)


    function checkIfAvatar(key){
        if(key ==='avatar'){
            return true}
        else{
            return false}
    }

</script>
<tr>
    {#each listOfData as data}
    {#if checkIfAvatar(data)}
    <td><img src="{personData[data]}" alt="An avatar of a person"></td>
    {:else}
    <td>{personData[data]}</td>
    {/if}
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
td{
    width:20%;
    align-self: center;
    font-size: 20px;
    font-weight: bolder;
}
</style>