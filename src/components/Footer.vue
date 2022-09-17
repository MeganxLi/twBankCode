<script setup lang="ts">
import { ref } from "vue";

const bEnabled = ref<boolean>(false);

const chagneEnable = function () {
   bEnabled.value = !bEnabled.value;
};
</script>

<template>
   <footer class="flex items-center flex-col text-sm pb-4">
      <p>
         Made by @
         <a href="https://github.com/MeganxLi" class="text-light-2C698D visited:text-light-2C698D dark:text-dark-BAE8E8"
            >Megan Lee</a
         >
      </p>
   </footer>
</template>
