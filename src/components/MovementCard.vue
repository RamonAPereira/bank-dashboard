<script setup>
import { computed } from "@vue/reactivity";

const props = defineProps({
  data: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
});

const typeOfMovement = computed(() => {
  return props.value > 0 ? "deposit" : "withdrawal";
});

const colorOfMovement = computed(() => {
  return props.value > 0 ? "bg-green-600" : "bg-red-600";
});
</script>
<template>
  <div class="flex justify-between items-center h-24 px-6 border-b">
    <h3 class="uppercase flex gap-4 items-center">
      <span
        class="rounded-xl text-neutral-50 px-1 py-1 text-center text-sm"
        :class="colorOfMovement"
      >
        {{ typeOfMovement }}
      </span>
      <!-- {{ data }} -->
    </h3>
    <h3 class="text-xl">{{ value }}$</h3>
  </div>
</template>
