<script>
import { store} from '../store'; 
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
        <form @submit.prevent="$emit('searchRequest')">
            <label for="search-element"></label>
            <input type="search" id="search-element" placeholder="cerca un film" v-model="store.searchKey">
            <button type="submit">Cerca</button>
        </form>
    </div>
</template>



<style lang="scss" scoped></style>