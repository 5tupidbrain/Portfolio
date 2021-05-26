<template>
  <nav class="w-full font-pop">
    <div
      class="mx-auto max-w-screen-2xl py-6 px-6 flex items-center justify-between"
    >
      <div>
        <a href="/" class="font-bold text-3xl">5</a>
      </div>
      <div class="sm:hidden">
        <button
          v-on:click="MobileMenu"
          class="p-2 outline-none focus:outline-none hover:bg-gray-900 focus:bg-gray-900 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div class="hidden sm:flex items-center space-x-12 text-xs text-gray-600">
        <router-link
          to="/"
          class="font-semibold tracking-wider uppercase transition-all duration-300 hover:text-white"
          >Home</router-link
        >
        <router-link
          :to="`/${menuItem}`"
          v-for="menuItem in MenuList"
          :key="menuItem"
          class="font-semibold tracking-wider uppercase transition-all duration-300 hover:text-white"
          >{{ menuItem }}</router-link
        >
      </div>
    </div>

    <div class="hidden sm:hidden" id="MobileMenu">
      <div
        class="w-full flex flex-col items-center px-6 pb-6 space-y-4 shadow-sm py-2 text-sm text-white"
      >
        <router-link
          to="/"
          class=" font-semibold tracking-wider uppercase transition-all duration-300 hover:text-white"
          >Home</router-link
        >
        <router-link
          :to="`/${menuItem}`"
          v-for="menuItem in MenuList"
          :key="menuItem"
          >{{ menuItem }}</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  setup() {
    let MobileMenu = () => {
      let menu = document.getElementById("MobileMenu");
      menu.classList.toggle("hidden");
    };
    let MenuList = ["blog", "resume"];
    return {
      MobileMenu,
      MenuList,
    };
  },
};
</script>

<style scoped>
* {
  cursor: url("../assets/cursor.png") 10 3, none;
}
.router-link-active {
  color: #fff;
  position: relative;
}
.router-link-active::after {
  content: " ";
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #fff;
  opacity: 0.4;
  animation-name: zero-full;
  animation-duration: 0.8s;
}
@keyframes zero-full {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
