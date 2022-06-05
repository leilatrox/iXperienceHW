class Person {
    constructor(first, last, dob) {
        this.first = first;
        this.last = last;
        this.dob = dob;
    }
    fullName() {
        return this.first + ' ' + this.last;
    }
}

class Customer extends Person {
    constructor(first, last, phone, member) {
        super(first, last)
        this.phone = phone;
        this.member = member;
    }
    static cost() {
        return 500;
    }
}

const joe = new Customer('joe', 'fro', 2034324544, 'costco');
console.log(joe);