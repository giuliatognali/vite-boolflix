<script>
import SearchBar from './SearchBar.vue';
    export default {
        name: 'HeaderApp',
        components: {
            SearchBar
        }
        
    }
</script>


<template>
    <header>
<SearchBar @searchRequest="$emit('searchElement')"/>

    </header>
</template>


<style lang="scss" scoped>

</style>