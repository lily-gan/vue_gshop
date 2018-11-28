<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import {reqAdress} from "./api";


  export default {
    async mounted() {
      const result = await reqAdress('116.36867', '40.10038');
      console.log("result=", result);
    },
    name: 'App',
    components: {
      FooterGuide
    }
  }
</script>

<style>

</style>
