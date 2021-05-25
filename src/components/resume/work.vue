<template>
  <section class="w-full">
    <h2 class="text-2xl font-semibold uppercase">My Works</h2>
    <div
      class="  flex md:space-x-6 md:space-y-0 space-y-6 md:flex-row flex-col items-center md:w-full md:overflow-x-scroll py-8"
    >
      <div v-for="work in Works.data" :key="work">
        <display
          :title="work.title"
          :desc="work.description"
          :thumbnail="work.thumbnail"
          :slug="work.slug"
        />
      </div>
    </div>
  </section>
</template>
<script>
import { ref } from "vue";
import display from "@/components/work/display.vue";
export default {
  components: {
    display,
  },
  setup() {
    let Works = ref("");
    let workFile = import("@/json/works.json");
    workFile.then((res) => {
      Works.value = res;
    });
    return { Works };
  },
};
</script>
<style scoped>
* {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none;
}
::-webkit-scrollbar {
  display: none;
}
</style>
