<template>
  <section id="contact" class="max-w-5xl my-12 p-20 px-12 md:px-20">
    <div class="flex lg:flex-row flex-col lg:space-x-12 ">
      <div
        class="flex flex-col  items-center lg:items-start lg:py-12 px-4 space-y-6 lg:space-y-0 py-12 justify-between"
      >
        <div>
          <h2 class="lg:text-3xl text-2xl text-center lg:text-left font-bold">
            Intrested in working together?
          </h2>
          <p></p>
        </div>
        <div class="text-gray-400 text-sm ">
          <a
            href="mailto:hellosaranshh@gmail.com"
            class="p-4 flex items-center border border-gray-500 rounded-md transition-all duration-300 hover:border-white hover:text-white"
          >
            <span class="inline-block mr-4"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                /></svg
            ></span>
            hellosaranshh@gmail.com
          </a>
        </div>

        <div class="text-gray-400 flex space-x-6">
          <a
            v-for="(value, name) in Socials"
            :href="value"
            :key="value"
            class="transition-all duration-300 hover:text-white"
          >
            {{ name }}
          </a>
        </div>
        
      </div>
      <div
        class="flex flex-col space-y-4 border-2 text-black bg-white rounded-lg px-8 p-6"
      >
        <h2 class="text-2xl font-medium">Contact Form</h2>
        <div class="flex flex-col space-y-6 pt-8">
          <div class="flex flex-col space-y-2">
            <label class="text-sm" for="">Your Name</label>
            <input
              class="p-2 text-sm outline-none rounded-lg  border-2 border-gray-300 focus:border-gray-500"
              type="text"
            />
          </div>
          <div class="flex flex-col space-y-2">
            <label class="text-sm" for="">Your email</label>
            <input
              class="p-2 text-sm outline-none rounded-lg  border-2 border-gray-300 focus:border-gray-500"
              type="text"
            />
          </div>
          <div class="flex flex-col space-y-2">
            <label class="text-sm" for="">Message</label>
            <textarea
              class="p-2 text-sm outline-none rounded-lg  border-2 border-gray-300 focus:border-gray-500"
              rows="4"
            />
          </div>
          <div class="flex w-full items-end">
            <button class="p-3 px-6 bg-black text-white rounded-full max-w-max">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  setup() {
    let Socials = {
      GitHub: "https://github.com/5tupidbrain/",
      LinkedIn: "https://linkedin.com/in/5tupidbrain",
      Instagram: "https://www.instagram.com/5tupidbrain/",
    };
    return {
      Socials,
    };
  },
};
</script>
