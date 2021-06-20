<template>
  <section
    class="max-w-2xl lg:max-w-4xl my-20 text-center flex flex-col p-20 px-12 md:px-20 space-y-4 items-center justify-center"
  >
    <img
      class="h-44 filter grayscale  rounded-full"
      src="https://github.com/5tupidbrain.png"
      alt=""
    />
    <h4 class="text-lg font-medium">
      Hi, I'm Saransh <span class="filter grayscale">🐼</span>
    </h4>
    <h2 class="text-3xl sm:text-4xl font-semibold">
      I am a minimalist,<br />
      I like saying the most with the least.
    </h2>
    <p class="text-gray-400 relative">
      I Enjoy creating things that live on the internet, whether that be
      websites, applications, or anything in between
      <span class="blinkCursor"></span>
    </p>
    <div>
      <a
        href="#contact"
        class="block mt-6 bg-white transition duration-300 text-black rounded-full p-3 px-6 ring-2 ring-white hover:bg-black hover:text-white"
      >
        Get in touch <span>🙌</span>
      </a>
    </div>
  </section>
</template>
<style scoped>
.blinkCursor {
  content: " ";
  position: absolute;
  margin-left: 4px;
  bottom: 6px;
  width: 8px;
  height: 3px;
  background: #fff;
  animation: blinking 0.9s infinite;
}
@keyframes blinking {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
