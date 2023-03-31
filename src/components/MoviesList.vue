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
    <main>
        <ul>
            <li v-for="movie in store.movies">
                <CardApp :info="movie"/>
            </li>
        </ul>
        <ul>
            <li v-for="serie in store.tvSeries">
                <CardApp :info="serie"/>
            </li>
        </ul>
        
    </main>
</template>



<style lang="scss" scoped></style>