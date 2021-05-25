<template>
  <div id="MainDiv" class="bg-black text-white">
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Navigation, Footer },
};
</script>
<style >
@import url('./blog-md/style.css');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: url("./assets/cursor.png") 10 3, url("./assets/pointer.png") 10 3, none;
}
</style>
