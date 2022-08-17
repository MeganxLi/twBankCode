<script setup lang="ts">
import { ref } from "vue";
import { MoonIcon, SunIcon, ActivityIcon } from "@zhuowenli/vue-feather-icons";

const bEnabled = ref<boolean>(false);

const chagneEnable = function () {
   bEnabled.value = !bEnabled.value;

   if (bEnabled.value) {
      document.querySelector("html")?.classList.add("dark");
   } else {
      document.querySelector("html")?.classList.remove("dark");
   }
};
</script>

<template>
   <header id="Header">
      <a href="">GitHub</a>

      <button @click="chagneEnable">
         <MoonIcon v-show="!bEnabled" size="1.5x" fill="currentColor" />
         <SunIcon v-show="bEnabled" size="1.5x" fill="currentColor" />
      </button>
   </header>
</template>
