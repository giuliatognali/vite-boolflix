<script>

//imported components 
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';

export default {
  name: 'App',
  components: {
    HeaderApp,
    MainApp
  },
  methods:{
    eventSearch(){
      console.log('cerco nella lista');
    }
  }
}
</script>

<template>
  <HeaderApp @searchElement="eventSearch"/>
  <MainApp />
</template>

<style lang="scss" scoped></style>
