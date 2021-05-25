<template>
  <div
    class="opacity-80 hover:opacity-100 transition-all duration-300 flex flex-col space-y-2"
  >
    <img :src="thumbnail" class="h-36 w-60 rounded" />
    <div class="flex flex-col space-y-1">
      <h2 class="text-xl font-bold w-60 line-clamp-1">{{ title }}</h2>
      <p class="text-sm line-clamp-2 w-60 text-gray-400">
        {{ desc }}
      </p>
    </div>
    <a
      :href="`https://${slug}.vercel.app`"
      class="items-center flex max-w-max hover:text-white transitionall duration-300 text-gray-500 text-sm"
      >Read More
      <span class="block ml-2"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clip-rule="evenodd"
          /></svg></span
    ></router-link>
  </div>
</template>
<script>
export default {
  props: ["title", "desc", "thumbnail", "slug"],
  setup() {},
};
</script>
