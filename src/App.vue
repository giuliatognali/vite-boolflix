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
    eventSearch() {
      console.log('cerco nella lista');
      console.log(this.store.searchKey);

      //todo fai una sola chiamata per movie e tvserie
      
      axios.get(this.store.config.url + this.store.config.endPointMovie, {
        //parametri necessari per eseguire la chiamata all'API
        params: {
          api_key: this.store.config.apiKey,
          lang: this.store.config.defaultLang,
          query: this.store.searchKey
        }
      }).then((response) => {
        console.log(response);
        // ci salviamo i risultati dell'API e salviamo nell'array movies
        this.store.movies = response.data.results;
      })
      axios.get(this.store.config.url + this.store.config.endPointTv, {
        //parametri necessari per eseguire la chiamata all'API
        params: {
          api_key: this.store.config.apiKey,
          lang: this.store.config.defaultLang,
          query: this.store.searchKey
        }
      }).then((response) => {
        console.log(response);
        // ci salviamo i risultati dell'API e salviamo nell'array tvSeries 
        this.store.tvSeries = response.data.results;
      })
    }
  }
}
</script>

<template>
  <HeaderApp @searchElement="eventSearch" />
  <MainApp />
</template>

<style lang="scss" scoped></style>
