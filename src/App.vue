<script>

//imported components 
import HeaderApp from './components/HeaderApp.vue';
import MainApp from './components/MainApp.vue';

export default {
  name: 'App',
  components: {
    HeaderApp,
    MainApp
  }
}
</script>

<template>
  <HeaderApp />
  <MainApp />
</template>

<style lang="scss" scoped></style>
