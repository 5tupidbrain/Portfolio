<template>
  <main class="font-pop flex flex-col justify-center items-center">
    <Intro />
    <About />
    <Contact/>
  </main>
</template>

<script>
// @ is an alias to /src
import About from "@/components/About";
import Intro from "@/components/Intro";
import Contact from "@/components/Contact";
export default {
  name: "Home",
  components: { About, Intro,Contact },
};
</script>

<style scoped></style>
