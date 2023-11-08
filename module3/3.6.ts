{
    // getter and setter
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

        // setter
        set deposit(amount: number) {
            if (amount >= 0) {
                this._balance = this._balance + amount;
            }
        }
        // addDeposit(amount: number) {
        //     if (amount >= 0) {
        //         this._balance = this._balance + amount;
        //     }
        // }



        // getter
        get balance() {
            return this._balance
        }
        // getBalance() {
        //     return this._balance
        // }
    }

    const goribManushErBankAccount = new BankAccount(111, "Mr. Poor", 500)

    // goribManushErBankAccount.addDeposit(1)
    goribManushErBankAccount.deposit = 500

    // const myBalance = goribManushErBankAccount.getBalance();
    const myBalance = goribManushErBankAccount.balance
    console.log(myBalance);



    //
}