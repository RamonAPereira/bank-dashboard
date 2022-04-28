<script setup>
import CurrentBalance from "../layouts/CurrentBalance.vue";
import AllMovements from "../layouts/AllMovements.vue";
</script>

<template>
  <section>
    <CurrentBalance />

    <div class="flex px-16">
      <AllMovements />
      <ul class="flex-1"></ul>
    </div>
  </section>
</template>
