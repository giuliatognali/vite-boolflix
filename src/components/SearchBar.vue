<script>
    export default {
        name: 'SearchBar'
        
    }
</script>

<template>
    <div>
        <form @submit.prevent="$emit('searchRequest')" >
        <label for="search-element"></label>
<input type="search" id="search-element" placeholder="cerca un film">
<button type="submit">Cerca</button>
</form>
    </div>

</template>



<style lang="scss" scoped>

</style>