<template>
  <section>
    <h2 class="text-2xl font-semibold uppercase">Skills</h2>
    <div
      class="grid grid-cols-1 items-center justify-center md:grid-cols-2 gap-x-12 py-4"
    >
      <div
        class="flex w-full  py-4 md:py-6 text-gray-300 hover:text-white space-x-2 items-center justify-between"
        v-for="(value, name) in skills"
        :key="name"
      >
        <h2 class="min-w-max text-sm font-semibold">{{ name }}</h2>
        <div class="flex flex-col w-full items-end -mt-4">
          <p class="text-sm text-white">
            <b>{{ value }}</b
            >%
          </p>
          <span class="block h-px w-full bg-gray-500 rounded-full"></span>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  setup() {
    let skills = {
      "HTML & CSS": 80,
      JavaScript: 80,
      ReactJS: 60,
      VueJS: 75,
      ExpressJS: 65,
      NodeJS: 60,
    };
    return {
      skills,
    };
  },
};
</script>
