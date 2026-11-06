class Account {
    // readonly id: number;
    // owner: string;
    // //_ for private property name start convension
    // private _balance: number;
    // nominee? : string;

    // constructor(id: number, owner: string, balance: number){
    //     this.id = id;
    //     this.owner = owner;
    //     this._balance = balance;
    // }

    nominee? : string;

    //access modifier in constructor automatically assign value
    constructor(public readonly id: number, public owner: string, private _balance: number){
        
    }

    deposite(amount: number){
        if(amount <= 0) throw new Error("Invalid Amount");
        this._balance = this._balance + amount;
        return this._balance;
    }

    get getbalance(){
        this.verifyAccount();
        return this._balance;
    }

    currentbalance(){
        return this._balance;
    }

    private verifyAccount(){}
    private calculateFee(){}
}

const tanvirAccount = new Account(1, "Tanvir", 10);

console.log(tanvirAccount);
// console.log(typeof tanvirAccount); //object
// console.log(tanvirAccount instanceof Account); //true

// console.log(tanvirAccount._balance); //error: private property
// console.log(tanvirAccount.deposite(450));
// console.log(tanvirAccount.deposite(-450));
// console.log(tanvirAccount.getbalance);
// console.log(tanvirAccount.currentbalance());
