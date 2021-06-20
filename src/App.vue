<template>
  <div class="cursor"></div>
  <div id="MainDiv" class="bg-black text-white">
    <Navigation />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Navigation from "./components/Navigation.vue";
import Footer from "./components/Footer.vue";
import { onMounted } from "@vue/runtime-core";

export default {
  components: { Navigation, Footer },
  setup() {
    onMounted(() => {
      let cursor = document.querySelector(".cursor");
      window.addEventListener("mousemove", (e) => {
        cursor.style.top = e.pageY + "px";
        cursor.style.left = e.pageX + "px";
      });
    });
  },
};
</script>
<style>
@import url("./blog-md/style.css");
*{
  cursor: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.cursor {
  width: 1rem;
  height: 1rem;
  border: 4px solid #fff;
  border-radius: 50%;
  position: absolute;
  z-index: 9999;
}
</style>
