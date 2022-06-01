class bankAccount {
    constructor(agency, number, type) {
        this.agency = agency;
        this.number = number;
        this.type = type;
        this.balance = 0;
    }

    get balance() {
        return this._balance;
    }
    set balance(value) {
        this._balance = value;
    }

    withdraw(value) {
        if (value > this._balance) {
            return "Denied Operation"
        }
        this._balance = this._balance - value;

        return this._balance
    }

    deposit(value) {
        this._balance = this._balance + value;

        return this._balance
    }
}

class checkingAccount extends bankAccount {
    constructor(agency, number, creditCard) {
        super(agency, number);
        this.type = 'checking';
        this.creditCard = creditCard;
    }
    get creditCard() {
        return this._creditCard;
    }
    set creditCard(value) {
        return this._creditCard = value;
    }
}
class savingsAccount extends bankAccount {
    constructor(agency, number) {
        super(agency, number);
        this.type = 'savings';
    }
}
class graduateAccount extends bankAccount {
    constructor(agency, number) {
        super(agency, number);
        this.type = 'graduate';
    }
    withdraw(value) {
        if (value > 500) {
            return "Denied Operation";
        }
        this._balance = this._balance - value;
    }
}
