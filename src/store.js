import { reactive } from 'vue';

export const store = reactive({
    config: {
        urlApi:'https://api.themoviedb.org/3',
        endPointMovie: '/search/movie',
        endPointTv:'/search/tv',
        apiKey: 'a59f32821b2c16a5bbea9e90a396c5ab',
        defaultLang: 'it-IT'
    },
    movies: [],
    tvSeries:[],
    searchKey: ''
});