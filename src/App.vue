<script>
import axios from 'axios';

import { store} from './store';
//imported components 
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';

export default {
  name: 'App',
  components: {
    HeaderApp,
    MainApp
  },
  data(){
    return{
      store
    }
  },
  methods:{
    eventSearch(){
      console.log('cerco nella lista');
      console.log(this.store.searchKey);

      axios.get(this.store.config.urlMovie, {
      //parametri necessari per eseguire la chiamata all'API
        params: { 
          api_key: this.store.config.apiKey,
          lang: this.store.config.defaultLang,
          query: this.store.searchKey
        }
      }).then((response) =>{
      console.log(response);
    // ci salviamo i risultati dell'API e salviamo nell'array movie
        this.store.movies = response.data.results;
  })

    }
  }
}
</script>

<template>
  <HeaderApp @searchElement="eventSearch"/>
  <MainApp />
</template>

<style lang="scss" scoped></style>
