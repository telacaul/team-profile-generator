const employee = require('./employee');

class manager extends employee {
    constructor(name, id, email, phone) {
        super(name, id, email);
        this.phone = phone
    }

    getPhoneNumber() {
        return this.phone;
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = manager;