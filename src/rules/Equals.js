import Rule from './Rule';

const COMPARE_AGAINST = Symbol('Equals.compareAgainst');

export default class Equals extends Rule {

    constructor(compareAgainst) {
        super();

        this[COMPARE_AGAINST] = compareAgainst;
    }

    static get message() {
        return 'equals';
    }

    validate(value) {
        // noinspection EqualityComparisonWithCoercionJS
        return value == this[COMPARE_AGAINST];
    }

};