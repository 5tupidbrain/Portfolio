<template>
  <main class="flex flex-col justify-center items-center">
    <div class="my-32 px-8 lg:px-12 max-w-5xl flex flex-col space-y-12">
      <h2 class="text-3xl lg:text-5xl font-bold">
        {{ BlogMeta.title }}
      </h2>
      <img :src="BlogMeta.thumbnail" alt="" />
      <article class="font-body">
        <VueShowdown :markdown="BlogMD" />
      </article>
    </div>
  </main>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import blogs from "@/json/blogs.json";

export default {
  setup() {
    let blogSlug = ref("");
    let BlogMeta = ref("");
    let BlogMD = ref("");
    console.log("dfas")
    onMounted(() => {
      blogSlug.value = useRoute().params.slug;
      console.log(blogSlug.value);
      getMeta();
      getData();
      console.log(BlogMeta.value.title);
    });

    function getData() {
      let blogFile = import("../blog-md/" + blogSlug.value + ".md");
      blogFile.then((res) => {
        BlogMD.value = res.default;
      });
    }
    function getMeta() {
      blogs.blogs.forEach((ele) => {
        if (ele.slug === blogSlug.value) {
          BlogMeta.value = {
            title: ele.title,
            thumbnail: ele.thumbnail,
          };
        }
      });
    }
    return {
      blogSlug,
      BlogMD,
      BlogMeta,
    };
  },
};
</script>
<style scoped>
article p {
  color: red;
}
</style>
