<script setup>
import { reactive, ref } from "vue";
import { useAccounts } from "../stores/accounts";

const closeThis = reactive({ username: "", pin: null });
const accounts = ref(useAccounts());
</script>

<template>
  <div class="bg-red-600 p-8 mx-8 rounded-lg flex flex-col gap-4">
    <h2 class="font-bold">Close Accout</h2>
    <form class="flex justify-start items-start gap-4" @click.prevent="">
      <div class="form__control">
        <input
          class="form__inputs"
          type="text"
          name="close-this-username"
          v-model="closeThis.username"
        />
        <label for="close-this-username">Confirm user</label>
      </div>
      <div class="form__control">
        <input
          class="form__inputs"
          type="password"
          name="close-this-pin"
          v-model.number="closeThis.pin"
        />
        <label for="close-this-pin">Confirm pin</label>
      </div>
      <button
        class="bg-neutral-50 px-2 py-1 rounded-lg"
        @click.prevent="accounts.closeAccount(closeThis)"
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
