{
    // access modifiers
    class BankAccount {
        readonly id: number;
        name: string;
        // private _balance: number;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addDeposit(amount: number) {
            if (amount >= 0) {
                this._balance = this._balance + amount;
            }
        }

        getBalance() {
            return this._balance
        }
    }

    class StudentAccount extends BankAccount {
        test() {
            this._balance
        }
    }

    const goribManushErBankAccount = new BankAccount(111, "Mr. Poor", 500)
    // goribManushErBankAccount.addDeposit(1)

    const myBalance = goribManushErBankAccount.getBalance();
    // console.log(myBalance);



    //
}