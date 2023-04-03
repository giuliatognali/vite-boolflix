<script>
import { store } from '../store';

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
    <div class="list-card">
        <div class="row">
            <div class="col cols-4 d-flex">
                <div class="px-2 py-2" v-for="movie in store.movies">
                    <CardApp :info="movie" />
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col cols-4 d-flex  ">
            <div class="px-2 py-2" v-for="serie in store.tvSeries">
                <CardApp :info="serie" />
            </div>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.row{
    margin: 0;
}
.col{
    flex-wrap: wrap;
    justify-content: center;
padding: 0;
}
</style>