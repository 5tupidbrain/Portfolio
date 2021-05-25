<template>
  <main class="flex items-center justify-center font-body py-32">
    <div class="flex flex-col space-y-4 max-w-5xl px-12">
      <introduction />
      <education />
      <!-- <certificates /> -->
      <skills />
      <work />
    </div>
  </main>
</template>
<script>
import introduction from "@/components/resume/introduction";
import skills from "@/components/resume/skills";
import work from "@/components/resume/work";
// import certificates from "@/components/resume/certificates";
import education from "@/components/resume/education";
export default {
  setup() {},
  components: { introduction, work, skills, education },
};
</script>
