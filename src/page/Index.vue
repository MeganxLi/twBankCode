<script setup lang="ts">
import { SearchIcon, XIcon } from "@zhuowenli/vue-feather-icons";
import { ref } from "vue";

const serchVal = ref<string>();
</script>

<template>
   <main>
      <div class="serch-container">
         <span class="search-icon"><SearchIcon size="1.2x" /></span>
         <input
            type="text"
            placeholder="搜尋台灣銀行"
            class="search-input placeholder:text-slate-400"
            v-model="serchVal"
         />
         <span
            class="clean-icon cursor-pointer"
            @click="serchVal = undefined"
            :class="{ '!hidden': serchVal === undefined }"
            ><XIcon size="1.2x"
         /></span>
      </div>
      <div>
         {{ serchVal }}
      </div>
   </main>
</template>
