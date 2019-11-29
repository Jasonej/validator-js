import _isEmpty from 'lodash/isEmpty';

const FAILURES = Symbol('ValidationResult.failures');

export default class ValidationResult {

    constructor(failures = []) {
        this[FAILURES] = failures;
    }

    get failed() {
        return !this.passed;
    }

    get firstMessage() {
        return this.messages[0];
    }

    get messages() {
        return this[FAILURES];
    }

    get passed() {
        return _isEmpty(FAILURES);
    }

}