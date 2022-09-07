<script setup lang="ts">
import { ChevronUpIcon } from "@zhuowenli/vue-feather-icons";
</script>

<script lang="ts">
export default {
   data() {
      return {
         windowOffsetTop: 0,
      };
   },
   computed: {
      isShow() {
         return this.windowOffsetTop >= 200;
      },
   },
   mounted() {
      this.windowOffsetTop = window.pageYOffset || document.documentElement.scrollTop;

      window.addEventListener("scroll", () => {
         this.windowOffsetTop = window.pageYOffset || document.documentElement.scrollTop;
      });
   },
   methods: {
      scrollToTop() {
         const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
         if (scrollTop > 0) {
            window.requestAnimationFrame(this.scrollToTop);
            window.scrollTo(0, scrollTop - scrollTop / 10);
         }
      },
   },
};
</script>

<template>
   <a id="ToTop" v-show="isShow" @click="scrollToTop()">
      <ChevronUpIcon size="1.8x" class="up-icon" />
   </a>
</template>
