<script setup lang="ts">
import { SearchIcon, XIcon, LinkIcon } from "@zhuowenli/vue-feather-icons";
import { ref } from "vue";
import { BankData } from "../utils/BankData";

const searchInput = ref<string>();

const BankCodeSort = BankData.sort(function (a, b) {
   return a.code - b.code;
});

const serchVal = () => {
   if (searchInput.value !== undefined) searchInput.value.trim().toLowerCase();
};

const flatten = (input) => {
   if (typeof input === "object") {
      return (Array.isArray(input) ? input : Object.values(input)).reduce((acc, x) => acc.concat(flatten(x)), []);
   } else {
      return [input];
   }
};

const BankCodeFiltered = () => {
   if (searchInput.value === undefined) return BankCodeSort;
   return BankCodeSort.filter((list: BankCodeType) => {
      return flatten(list).includes(searchInput.value.trim().toLowerCase());
   });
};
</script>

<template>
   <main class="p-8">
      <div class="serch-container drop-shadow-serch">
         <span class="search-icon dark:text-dark-E3F6F5"><SearchIcon size="1.5x" /></span>
         <input
            type="text"
            placeholder="搜尋台灣銀行"
            class="search-input placeholder:text-slate-400 dark:text-dark-E3F6F5 dark:bg-dark-2E3A50"
            v-model="searchInput"
         />
         <span
            class="clean-icon cursor-pointer dark:text-dark-E3F6F5"
            @click="searchInput = undefined"
            :class="{ '!hidden': searchInput === undefined }"
            ><XIcon size="1.5x"
         /></span>
      </div>
      {{ searchInput }}

      <ol class="list">
         <li class="p-3 bg-light-FFFFFF rounded-lg drop-shadow-list" v-for="item in BankCodeFiltered()" :key="item">
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
