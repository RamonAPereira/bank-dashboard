<script setup>
import { onMounted } from "vue";
import TheNavbar from "../layouts/TheNavbar.vue";
import { useAccounts } from "../stores/accounts";

onMounted(useAccounts().createUsername);
</script>

<template>
  <TheNavbar />
  <router-view></router-view>
</template>
