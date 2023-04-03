<script>
import { store } from '../store';
export default {
    name: 'SearchBar',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div>
        <form @submit.prevent="$emit('searchRequest')" class="input-group">
            <label for="search-element" class="d-none">Search a movie/tv serie</label>
            <input type="search" class="form-control" id="search-element" placeholder="Search a movie/tv serie" v-model="store.searchKey">
            <button type="submit" class="btn btn-outline-secondary">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
            </button>
        </form>
    </div>
    

</template>



<style lang="scss" scoped>

@use "../assets/scss/_partial/variables" as *;
input{
    color: $secondary-color;
    background-color: $primary-color;
}

</style>


