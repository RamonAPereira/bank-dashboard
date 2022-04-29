<script setup>
import { reactive } from "vue";
import router from "../router/router";
import { useAccounts } from "../stores/accounts";

const user = reactive({ inputUsername: "", inputPassword: "" });
const accounts = useAccounts().accounts;
const currentUser = useAccounts();

const verifyUser = function () {
  let userIndex;
  const account = accounts.find((acc, i) => {
    userIndex = i;
    return acc.username === user.inputUsername;
  });
  if (account.pin === Number(user.inputPassword)) {
    currentUser.setCurrentUser(userIndex);
    router.push("/dashboard");
  }
}; // verifica o ussuario e muda a rota para o dashboard
</script>

<template>
  <form
    class="bg-neutral-900 flex flex-col px-8 py-8 rounded-lg gap-4"
    @click.prevent=""
  >
    <div class="form__control">
      <label class="form__label" for="username">username</label>
      <input class="form__input" type="text" v-model="user.inputUsername" />
    </div>
    <div class="form__control">
      <label class="form__label" for="password">password</label>
      <input class="form__input" type="password" v-model="user.inputPassword" />
    </div>
    <button
      class="bg-neutral-900 border border-white text-white rounded-lg max-w-min mx-auto px-2"
      @click.prevent="verifyUser"
    >
      Login
    </button>
  </form>
</template>

<style scoped>
.form__control {
  @apply flex flex-col gap-2;
}

.form__input {
  @apply border rounded-lg px-4;
}

.form__label {
  @apply text-white;
}
</style>
