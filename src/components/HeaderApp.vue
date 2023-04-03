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
    <header class="row flex-sm-column flex-md-row">
        <div class="col">
            <h1>Boolflix</h1>
        </div>
        <div class="col search-bar">
            <SearchBar @searchRequest="$emit('searchElement')" />
        </div>
    </header>
</template>


<style lang="scss" scoped>
@use "../assets/scss/_partial/variables" as *;

header {
    z-index: 5;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: $primary-color;
    border-bottom: 1px solid $secondary-color;

}

.col {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
}

h1 {
    font-weight: 900;
    font-size: 4rem;
    color: red;
    padding: 10px;
    text-align: center;

}</style>