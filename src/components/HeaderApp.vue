<script>
import { store} from '../store'; 
import SearchBar from './SearchBar.vue';
    export default {
        name: 'HeaderApp',
        components: {
            SearchBar
        }
        
    }
</script>


<template>
    <div>
<SearchBar @searchRequest="$emit('searchElement')"/>
<br>
    </div>
</template>


<style lang="scss" scoped>

</style>