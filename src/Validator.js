import _isEmpty from 'lodash/isEmpty';
import ValidationResult from './ValidationResult';

const RULES = Symbol('Validator: rules');

export default class Validator {

    constructor(rules = []) {
        this[RULES] = rules;
    }

    validate(value) {
        const failures = this[RULES]
            .map(rule => rule.validate(value) ? false : rule.message)
            .filter(message => message instanceof String);

        return new ValidationResult(failures);
    }

}