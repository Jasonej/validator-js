import Rule from './Rule';

const COMPARE_AGAINST = Symbol('StrictlyEquals.compareAgainst');

export default class StrictlyEquals extends Rule {

    constructor(compareAgainst) {
        super();

        this[COMPARE_AGAINST] = compareAgainst;
    }

    static get message() {
        return 'strictly_equals';
    }

    validate(value) {
        return value === this[COMPARE_AGAINST];
    }

};