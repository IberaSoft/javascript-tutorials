var Bank = (function () {
    function Bank(balance) {
        this.fee = 0.01;
        this.account = { balance: balance };
    }

    Bank.prototype.deposit = function (amount) {
        amount -= amount * this.fee;
        this.account.balance += amount;
    }

    Bank.prototype.withdrawal = function (amount) {
        amount += amount * this.fee;
        this.account.balance -= amount;
    };

    return Bank;
})();

var bank = new Bank(1000);
bank.withdrawal(250);
console.log(JSON.stringify(bank));
console.log("amountWithFee: " + window.amountWithFee);
console.log("fee: " + window.fee);
bank.deposit(250);
console.log(JSON.stringify(bank));
console.log("amountWithFee: " + window.amountWithFee);
console.log("fee: " + window.fee);


