<template>
  <router-link :to="`/blog/${slug}`">
    <div
      class=" px-6 md:px-12 opacity-80 hover:opacity-100 transition-all duration-300   flex flex-col items-center md:items-start md:flex-row md:space-x-8"
    >
      <img
        :src="`${thumbnail}`"
        class="rounded-lg flex items-center justify-center h-48 w-full max-w-lg md:max-w-xs"
      />
      <div
        class=" flex flex-col justify-between h-full space-y-5 max-w-lg lg:max-w-3xl"
      >
        <div class="space-y-2">
          <h2 class="text-2xl font-semibold py-0 line-clamp-2">{{ title }}</h2>
          <p class="text-gray-400 line-clamp-2">
            {{ desc }}
          </p>
        </div>
        <div class="flex flex-col space-y-2">
          <div>
            <div
              class="text-black bg-white font-medium text-xs p-2 py-1 rounded max-w-max"
            >
              Tags
            </div>
          </div>
          <p class="text-sm text-gray-400">{{ date }}</p>
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ["title", "desc", "thumbnail", "date", "slug"],
  setup() {},
};
</script>
