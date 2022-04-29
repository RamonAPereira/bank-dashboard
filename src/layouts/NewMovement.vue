<script setup>
import TransferMoney from "../components/TransferMoney.vue";
import CloseAccount from "../components/CloseAccount.vue";
import RequestLoan from "../components/RequestLoan.vue";
</script>

<template>
  <ul class="flex-1 flex flex-col gap-4">
    <li>
      <TransferMoney />
    </li>
    <li>
      <RequestLoan />
    </li>
    <li>
      <CloseAccount />
    </li>
  </ul>
</template>
