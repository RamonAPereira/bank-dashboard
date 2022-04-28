<script setup>
import { computed } from "@vue/reactivity";
import { ref } from "vue";
import { useAccounts } from "../stores/accounts";
const currentAccount = ref(useAccounts().accounts.account1);

const balance = computed(() => {
  return currentAccount.value.movements.reduce((acc, mov) => acc + mov, 0);
});
</script>

<template>
  <div class="flex items-center justify-between py-6 px-16">
    <div>
      <h2 class="font-bold text-xl">Current balance</h2>
      <span class="opacity-70">As of 05/03/2037</span>
    </div>
    <h1 class="font-bold text-5xl">{{ balance }} EUR</h1>
  </div>
</template>
