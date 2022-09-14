<script setup lang="ts">
import { ref } from "vue";
import { MoonIcon, SunIcon, ActivityIcon } from "@zhuowenli/vue-feather-icons";

const bEnabled = ref<boolean>(false); //true: dark, false: light

const addClassDark = (darkEnabled: boolean) => {
   if (darkEnabled) {
      document.querySelector("html")?.classList.add("dark");
   } else {
      document.querySelector("html")?.classList.remove("dark");
   }
};

if (localStorage.getItem("storedTheme") !== null) {
   bEnabled.value = JSON.parse(localStorage.getItem("storedTheme")!);
   addClassDark(bEnabled.value);
}

const chagneEnable = function () {
   bEnabled.value = !bEnabled.value;

   localStorage.setItem("storedTheme", bEnabled.value.toString());
   addClassDark(bEnabled.value);
};
</script>

<template>
   <header id="Header">
      <a class="dark:text-dark-BAE8E8" href="">GitHub</a>

      <button class="dark:text-dark-BAE8E8" @click="chagneEnable">
         <MoonIcon v-show="!bEnabled" size="1.5x" fill="currentColor" />
         <SunIcon v-show="bEnabled" size="1.5x" />
      </button>
   </header>
</template>
