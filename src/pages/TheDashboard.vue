<script setup>
import CurrentBalance from "../layouts/CurrentBalance.vue";
import AllMovements from "../layouts/AllMovements.vue";
import TheSummary from "../layouts/TheSummary.vue";
</script>

<template>
  <section>
    <CurrentBalance />

    <div class="flex px-16">
      <AllMovements />
      <ul class="flex-1"></ul>
    </div>
    <TheSummary />
  </section>
</template>
