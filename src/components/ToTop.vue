<script setup lang="ts">
import { ref } from "vue";
import { ChevronUpIcon } from "@zhuowenli/vue-feather-icons";

const isVisible = ref<boolean>(false);
</script>

<template>
   <a id="ToTop" href="#Header">
      <ChevronUpIcon size="1.8x" class="up-icon" />
   </a>
</template>
