<template>
  <section class="max-w-4xl my-12 p-20 px-12 md:px-20">
    <div class="flex flex-col space-y-8 text-base  text-gray-400 sm:text-lg">
      <div class="flex flex-col space-y-4">
        <h2 class="text-white text-center text-3xl tracking-wide font-bold">
          About Me
        </h2>
        <p class="text-center sm:text-left">
          <span class="text-2xl">I'</span>m an person with high attention to
          detail ! and enjoy creating things that live on the internet, whether
          that be websites, applications, or anything in between. My goal is to
          always build products that provide pixel-perfect, performant
          experiences.
        </p>
      </div>
      <div class="space-y-6">
        <h4 class="underline text-white font-bold text-2xl">Skills</h4>
        <p>
          The main area of my expertise is front end development (client side of
          the web).
        </p>
        <ul
          class="grid md:grid-flow-col grid-cols-2 md:grid-cols-none text-gray-600"
        >
          <li
            v-for="skill in skills"
            :key="skill"
            class="hover:text-gray-200 transition-all duration-300 cursor-default"
          >
            <span>></span> {{ skill }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  setup() {
    let skills = [
      "HTML & CSS",
      "JavaScript",
      "VueJS",
      "ReactJS",
      "NodeJS",
      "ExpressJS",
    ];
    return {
      skills,
    };
  },
};
</script>
<style scoped>
li{
  cursor: none;
}
</style>
