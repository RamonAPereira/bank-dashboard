<script setup>
import CurrentBalance from "../layouts/CurrentBalance.vue";
import AllMovements from "../layouts/AllMovements.vue";
import TheSummary from "../layouts/TheSummary.vue";
import NewMovement from "../layouts/NewMovement.vue";
</script>

<template>
  <section>
    <CurrentBalance />

    <div class="flex px-16 my-8">
      <AllMovements />
      <NewMovement />
    </div>
    <TheSummary />
  </section>
</template>
