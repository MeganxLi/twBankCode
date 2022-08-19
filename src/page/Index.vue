<script setup lang="ts">
import { SearchIcon, XIcon } from "@zhuowenli/vue-feather-icons";
import { ref } from "vue";
</script>

<template>
   <main>
      <div class="serch-container">
         <span class="search-icon"><SearchIcon size="1.2x" /></span>
         <input type="text" placeholder="搜尋台灣銀行" class="search-input placeholder:text-slate-400" />
         <span class="close-icon cursor-pointer"><XIcon size="1.2x" /></span>
      </div>
      <div>list</div>
   </main>
</template>
