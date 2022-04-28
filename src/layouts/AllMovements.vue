<script setup>
import { ref } from "vue";
import MovementCard from "../components/MovementCard.vue";
import { useAccounts } from "../stores/accounts";
const currentAccount = ref(useAccounts().accounts[0]);
</script>
<template>
  <ul class="rounded border bg-neutral-50 flex-1">
    <li v-for="(movement, index) in currentAccount.movements" :key="index">
      <MovementCard data="3 days ago" :value="movement" />
    </li>
  </ul>
</template>
