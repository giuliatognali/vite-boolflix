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
    <header class="row">
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    .search-bar{
        padding-bottom: 20px;
    }
}

.col {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $primary-color;

}

h1 {
    font-weight: 900;
    font-size: 5rem;
    color: red;
    padding: 20px 30px;
    text-align: center;

}</style>