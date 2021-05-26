<template>
  <section class="min-h-screen font-body flex flex-col items-center">
    <div class="py-20 pt-12 max-w-6xl w-full flex flex-col space-y-20">
      <h2 class="text-4xl mx-auto md:mx-0 md:px-12 font-bold">Blogs</h2>
      <div
        class="flex flex-col space-y-8"
        v-for="blog in blogs.blogs"
        :key="blog"
      >
        <display
          :title="blog.title"
          :desc="blog.description"
          :thumbnail="blog.thumbnail"
          :date="blog.date"
          :tags="blog.tags"
          :slug="blog.slug"
        />
      </div>
    </div>
  </section>
</template>
<script>
import display from "@/components/blog/display";
import blogs from "@/json/blogs.json";
export default {
  setup() {
    return {
      blogs,
    };
  },
  components: { display },
};
</script>
