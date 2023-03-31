import { reactive } from 'vue';

export const store = reactive({
    config: {
        urlMovie: 'https://api.themoviedb.org/3/search/movie',
        apiKey: 'a59f32821b2c16a5bbea9e90a396c5ab',
        defaultLang: 'it-IT'
    },
    movies: [],
    searchKey: ''
});