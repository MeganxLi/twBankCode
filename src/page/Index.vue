<script setup lang="ts">
import { SearchIcon, XIcon, LinkIcon } from "@zhuowenli/vue-feather-icons";
import { ref } from "vue";
import { BankData, uploadBankDate } from "../utils/BankData";
import ToTop from "../components/ToTop.vue";

const searchInput = ref<string>();

const BankCodeSort = BankData.sort(function (a: BankCodeType, b: BankCodeType) {
   return Number(a.code) - Number(b.code);
});

const BankCodeFiltered = () => {
   if (searchInput.value === undefined) return BankCodeSort;
   return BankCodeSort.filter((list: { [key: string]: any }) => {
      return Object.keys(list).some((key: string) => {
         return ("" + list[key]).toLowerCase().includes(searchInput.value?.trim().toLowerCase()!);
      });
   });
};

const fileDate = () => {
   var newDate = new Date(document.lastModified);

   const leadingZeros = (num: number): string => {
      return num.toString().padStart(2, "0");
   };

   return newDate.getFullYear() + "/" + leadingZeros(newDate.getMonth() + 1) + "/" + leadingZeros(newDate.getDate());
};
</script>

<script lang="ts">
export default {
   name: "search-onKeyPress",
   methods: {
      onKeyPress(event: any) {
         //是否點擊 "/"
         if (event.key !== "/") return;

         //若已在input裡面，跳出不判斷
         if (document.activeElement === this.$refs.searchBank) return;

         event.preventDefault();
         (this.$refs["searchBank"] as any).focus();
      },
   },
   mounted() {
      window.addEventListener("keypress", this.onKeyPress);
   },
};
</script>

<template>
   <main class="p-8">
      <div class="serch-container drop-shadow-serch">
         <span class="search-icon dark:text-dark-E3F6F5"><SearchIcon size="1.5x" /></span>
         <input
            type="text"
            placeholder="按鍵 '/' 搜尋台灣銀行"
            class="search-input placeholder:text-slate-400 dark:text-dark-E3F6F5 dark:bg-dark-2E3A50"
            ref="searchBank"
            v-model="searchInput"
            v-on:keyup.esc="searchInput = undefined"
         />
         <span
            class="clean-icon cursor-pointer dark:text-dark-E3F6F5"
            @click="searchInput = undefined"
            :class="{ '!hidden': searchInput === undefined }"
            ><XIcon size="1.5x"
         /></span>
      </div>
      {{ BankCodeFiltered() }}
      <p class="text-xs mb-4 text-gray-400">更新日期： {{ uploadBankDate }}</p>
      <ol class="list">
         <li
            class="p-3 bg-light-FFFFFF rounded-lg drop-shadow-LightList dark:bg-dark-2E3A50 dark:drop-shadow-DarkList"
            v-for="item in BankCodeFiltered()"
            :key="item.cn_name"
         >
            <fieldset>
               <div class="flex justify-between items-center pb-3">
                  <span class="text-xl font-medium text-light-2C698D dark:text-dark-BAE8E8">{{ item.code }}</span>
                  <a
                     class="bg-light-2C698D/10 rounded-full p-1 dark:bg-dark-BAE8E8/10"
                     target="_blank"
                     :href="item.link"
                     :class="{ hidden: item.link === undefined }"
                     ><LinkIcon size="0.9x" stroke-width="3" class="text-light-2C698D/70 dark:text-dark-4A84A6"
                  /></a>
               </div>
               <p class="text-base dark:text-dark-E3F6F5/75">{{ item.cn_name }}</p>
               <p class="text-base text-gray-400">{{ item.en_name }}</p>
            </fieldset>
         </li>
      </ol>
      <ToTop />
   </main>
</template>
