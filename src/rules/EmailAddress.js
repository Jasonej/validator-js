import EmailValidator from 'email-validator';
import Rule from './Rule';

export default class EmailAddress extends Rule {

    static get message() {
        return 'invalid_email';
    }

    validate(value) {
        return EmailValidator.validate(value);
    }

};