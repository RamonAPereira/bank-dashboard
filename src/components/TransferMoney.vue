<script setup>
import { reactive, ref } from "vue";
import { useAccounts } from "../stores/accounts";

const transfer = reactive({ to: "", amount: "" });
const accounts = ref(useAccounts());
</script>

<template>
  <div class="bg-indigo-500 p-8 mx-8 rounded-lg flex flex-col gap-4">
    <h2 class="font-bold">Transfer Money</h2>
    <form class="flex justify-start items-start gap-4" @click.prevent="">
      <div class="form__control">
        <input
          class="form__inputs"
          type="text"
          name="transfer-to"
          v-model="transfer.to"
        />
        <label for="transfer-to">Transfer to</label>
      </div>
      <div class="form__control">
        <input
          class="form__inputs"
          type="number"
          name="amount"
          v-model.number="transfer.amount"
        />
        <label for="amount">Amount</label>
      </div>
      <button
        class="bg-neutral-50 px-2 py-1 rounded-lg"
        @click.prevent="accounts.transferMoneyTo(transfer)"
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
