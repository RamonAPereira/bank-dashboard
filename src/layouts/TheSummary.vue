<script setup>
import { computed, ref } from "@vue/reactivity";
import { useAccounts } from "../stores/accounts";
const currentAccount = ref(useAccounts().accounts[useAccounts().currentUser]);

const incomes = computed(() => {
  return currentAccount.value.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
});
const outcomes = computed(() => {
  return Math.abs(
    currentAccount.value.movements
      .filter((mov) => mov <= 0)
      .reduce((acc, mov) => acc + mov, 0)
  );
});
const interest = computed(() => {
  return currentAccount.value.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * currentAccount.value.movements) / 100)
    .filter((mov, _, arr) => {
      return mov >= 1;
    })
    .reduce((acc, mov) => acc + mov, 0);
});
</script>

<template>
  <footer
    class="flex justify-between items-center px-16 py-6 text-neutral-50 bg-neutral-900"
  >
    <ul class="flex uppercase gap-4">
      <li class="flex items-center gap-1">
        In <span class="text-green-600 text-2xl">{{ incomes }}$</span>
      </li>
      <li class="flex items-center gap-1">
        Out <span class="text-red-600 text-2xl">{{ outcomes }}$</span>
      </li>
      <li class="flex items-center gap-1">
        Interest <span class="text-green-600 text-2xl">{{ interest }}$</span>
      </li>
    </ul>
    <p>you will be logged out in <span>5:00</span></p>
  </footer>
</template>
