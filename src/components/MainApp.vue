<script>
import MoviesList from './MoviesList.vue';
export default {
    name: 'MainApp',
    components: {
        MoviesList
    }

}
</script>


<template>
    <main>
                <MoviesList />
    </main>
</template>


<style lang="scss" scoped>
@use "../assets/scss/_partial/variables" as *;

main {
    margin: 0 20px;
    padding-top: 150px;
        overflow-y: auto;
    h2 {
    color: $secondary-color;
    text-align: center;
}
}


</style>