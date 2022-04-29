<script setup>
import { ref } from "vue";
import { useAccounts } from "../stores/accounts";

const amount = ref(0);
const accounts = ref(useAccounts());
</script>

<template>
  <div class="bg-green-600 p-8 mx-8 rounded-lg flex flex-col gap-4">
    <h2 class="font-bold">Request Loan</h2>
    <form class="flex justify-start items-start gap-4" @click.prevent="">
      <div class="flex flex-col">
        <input
          class="form__inputs"
          type="number"
          name="close-this-username"
          v-model.number="amount"
        />
        <label for="close-this-username">Confirm user</label>
      </div>
      <button
        class="bg-neutral-50 px-2 py-1 rounded-lg"
        @click.prevent="accounts.concedeLoan(amount)"
      >
        Send
      </button>
    </form>
  </div>
</template>

<style setup>
.form__inputs {
  @apply bg-neutral-50 px-2 py-1 opacity-80 rounded-lg;
}
</style>
