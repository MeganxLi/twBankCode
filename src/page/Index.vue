<script setup lang="ts">
import { SearchIcon, XIcon, LinkIcon } from "@zhuowenli/vue-feather-icons";
import { ref } from "vue";
import { BankData } from "../utils/BankData";

const serchVal = ref<string>();
</script>

<template>
   <main class="p-8">
      <div class="serch-container drop-shadow-serch">
         <span class="search-icon"><SearchIcon size="1.5x" /></span>
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
            ><XIcon size="1.5x"
         /></span>
      </div>
      {{ serchVal }}
      <ol class="list">
         <li class="p-3 bg-light-FFFFFF rounded-lg drop-shadow-list" v-for="item in BankData" :key="item">
            <fieldset>
               <div class="flex justify-between items-center pb-3">
                  <span class="text-xl font-medium text-light-2C698D">{{ item.code }}</span>
                  <a
                     class="bg-light-2C698D/10 rounded-full p-1"
                     target="_blank"
                     :href="item.link"
                     :class="{ hidden: item.link === undefined }"
                     ><LinkIcon size="0.9x" class="text-light-2C698D/70"
                  /></a>
               </div>
               <p class="text-base">{{ item.cn_name }}</p>
               <p class="text-base text-gray-400">{{ item.en_name }}</p>
            </fieldset>
         </li>
      </ol>
   </main>
</template>
