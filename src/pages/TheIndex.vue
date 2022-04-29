<script setup>
import TheNavbar from "../layouts/TheNavbar.vue";
</script>

<template>
  <div class="min-h-screen bg-neutral-700">
    <TheNavbar />
    <Transition>
      <router-view></router-view>
    </Transition>
  </div>
</template>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
