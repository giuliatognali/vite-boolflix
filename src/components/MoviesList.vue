<script>
import { store} from '../store'; 

import CardApp from './CardApp.vue';
export default {
    nome: 'MoviesList',
    components: {
        CardApp
    },
    data() {
        return {
            store
        }
    }


}
</script>
<template>
    <div>
        <ul>
            <li v-for="movie in store.movies">
                <CardApp/>
            </li>
        </ul>
        
    </div>
</template>



<style lang="scss" scoped></style>