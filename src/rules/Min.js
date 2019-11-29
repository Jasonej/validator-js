import Rule from './Rule';

const SIZE = Symbol('Min.size');

export default class Min extends Rule {

    constructor(size) {
        super();

        this[SIZE] = size;
    }

    static get message() {
        return 'min';
    }

    validate(value) {
        if (value instanceof String) {
            return value.length >= this[SIZE];
        } else if (value instanceof Array) {
            return value.length >= this[SIZE];
        }

        return value >= this[SIZE];
    }

};