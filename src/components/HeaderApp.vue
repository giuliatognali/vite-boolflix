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
        <h1>Boolflix</h1>
        <SearchBar @searchRequest="$emit('searchElement')" />
    </header>
</template>


<style lang="scss" scoped>
@use "../assets/scss/_partial/variables" as *;

header {
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $primary-color;
    z-index: 5;
}

h1 {
    font-weight: 900;
    font-size: 5rem;
    color: red;
    padding: 20px 30px;

}
</style>