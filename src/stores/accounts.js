import { defineStore } from "pinia";
import router from "../router/router";

export const useAccounts = defineStore("main", {
  state: () => {
    return {
      accounts: [
        {
          owner: "Jonas Schmedtmann",
          username: "js",
          movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
          interestRate: 1.2, // %
          pin: 1111,
        },
        {
          owner: "Jessica Davis",
          username: "jd",
          movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
          interestRate: 1.5,
          pin: 2222,
        },
        {
          owner: "Steven Thomas Williams",
          username: "stw",
          movements: [200, -200, 340, -300, -20, 50, 400, -460],
          interestRate: 0.7,
          pin: 3333,
        },
        {
          owner: "Sarah Smith",
          username: "ss",
          movements: [430, 1000, 700, 50, 90],
          interestRate: 1,
          pin: 4444,
        },
      ],
      currentUser: 0,
    };
  },
  getters: {
    incomes: (state) => {
      return state.accounts[state.currentUser].movements
        .filter((mov) => mov > 0)
        .reduce((acc, mov) => acc + mov, 0);
    },
  },
  actions: {
    setCurrentUser(index) {
      this.currentUser = index;
    },
    transferMoneyTo(transferInfo) {
      const transfer = transferInfo.amount;
      const to = this.accounts.find((acc) => acc.username === transferInfo.to);
      console.log(transferInfo);

      if (
        to &&
        transfer > 0 &&
        this.incomes >= transfer &&
        to !== this.accounts[this.currentUser]
      ) {
        //Doing the transfer
        to.movements.push(transfer);
        this.accounts[this.currentUser].movements.push(-transfer);
      }
    },
    closeAccount(closeThis) {
      console.log("Close account");
      const currentAccount = this.accounts[this.currentUser];
      if (
        currentAccount.username === closeThis.username &&
        currentAccount.pin === closeThis.pin
      ) {
        // Delete Account
        this.accounts.splice(currentAccount, 1);
        //send user back to login
        router.push("./");
      }
    },
  },
});
