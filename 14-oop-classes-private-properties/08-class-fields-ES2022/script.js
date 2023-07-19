class Wallet {
  #balance = 0
  #transactions = []

  #depositTransaction(value) {
    console.log(`You have deposited ${value} to your wallet`);

    const trx = {
      value,
      transaction: 'deposit',
    }
    this.#transactions.push(trx);
  }

  #withdrawTransaction(value) {
    console.log(`You have withdrawn ${value} from your wallet`);

    const trx = {
      value,
      transaction: 'withdraw',
    }
    this.#transactions.push(trx);
  }

  deposit(value) {
    this.#balance += value;
    this.#depositTransaction(value);
  }

  withdraw(value) {
    if (this.#balance - value < 0) {
      console.log(`Not enough funds! You are trying to withdraw ${value} but you have only ${this.#balance}`);
    } else {
      this.#balance -= value;
      this.#withdrawTransaction(value);
    }
  }

  get balance() {
    return `Balance: ${this.#balance}`;
  }
  
  get transactions() {
    return this.#transactions;
  }
}

const wallet1 = new Wallet();

console.log(wallet1.balance);

wallet1.deposit(200);
console.log(wallet1.balance);

wallet1.withdraw(250);
console.log(wallet1.balance);

wallet1.withdraw(150);
console.log(wallet1.balance);

console.log(wallet1.transactions);
