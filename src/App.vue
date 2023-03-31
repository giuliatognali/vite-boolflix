<script>
import axios from 'axios';

import { store } from './store';
//imported components 
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';

export default {
  name: 'App',
  components: {
    HeaderApp,
    MainApp
  },
  data() {
    return {
      store
    }
  },
  methods: {

    //definisco una funzione con 2 argomenti
    callSearch(url, endpoint) {

      axios.get(url + endpoint, {
        //parametri necessari per eseguire la chiamata all'API
        params: {
          api_key: this.store.config.apiKey,
          lang: this.store.config.defaultLang,
          query: this.store.searchKey
        }
      }).then((response) => {
        console.log(response);
        // ci salviamo i risultati dell'API nell'array movies o tvseries a seconda del caso.
        if (endpoint === '/search/movie') {
          this.store.movies = response.data.results;
        } else {
          this.store.tvSeries = response.data.results;
        }
      })
    },
    eventSearch() {
      //richiamo la funzione
      this.callSearch(this.store.config.urlApi, this.store.config.endPointMovie);
      this.callSearch(this.store.config.urlApi, this.store.config.endPointTv);
    }
  }

}
</script>

<template>
  <HeaderApp @searchElement="eventSearch" />
  <MainApp />
</template>

<style lang="scss" scoped></style>
