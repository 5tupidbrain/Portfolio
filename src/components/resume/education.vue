<template>
  <section>
    <h2 class="text-2xl mt-12 font-semibold uppercase">Education</h2>
    <div class="w-full py-6 flex flex-col space-y-4">
      <div
        class="bg-white bg-opacity-5 rounded p-4"
        v-for="val in Edu"
        :key="val"
      >
        <div class="w-full flex flex-col md:flex-row justify-between md:items-center">
          <h2 class="font-semibold">{{ val.Education }}</h2>
          <p clas
          s="text-xs text-gray-300">{{ val.Year }}</p>
        </div>
        <span class="block h-px w-full my-2 bg-white bg-opacity-10 rounded-full"></span>
        <a
          :href="val.Website"
          class="text-sm hover:text-gray-200 max-w-max duration-300 transition-all text-gray-500 mt-2 block"
        >
          {{ val.Institute }}
        </a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  setup() {
    let Edu = [
      {
        Education: "Computer Science (B.Tech)",
        Institute:
          "Gyan Ganga Institute of Technology and Sciences, Jablapur (M.P.)",
        Website: "https://ggits.org/",
        Year: "2018 - Current",
      },
      {
        Education: "10th & 12th Education",
        Institute: "St. Augustine Sr. Sec School, Jablapur (M.P.)",
        Year: "Passed out at 2018",
        Website: "",
      },
    ];
    return { Edu };
  },
};
</script>
