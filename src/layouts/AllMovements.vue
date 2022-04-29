<script setup>
import { ref } from "vue";
import MovementCard from "../components/MovementCard.vue";
import { useAccounts } from "../stores/accounts";
const currentAccount = ref(useAccounts().accounts[useAccounts().currentUser]);
</script>
<template>
  <ul
    class="rounded border border-neutral-900 bg-neutral-800 text-white flex-1"
  >
    <li v-for="(movement, index) in currentAccount.movements" :key="index">
      <MovementCard data="3 days ago" :value="movement" />
    </li>
  </ul>
</template>
