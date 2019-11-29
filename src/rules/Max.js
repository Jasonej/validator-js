import Rule from './Rule';

const SIZE = Symbol('Max.size');

export default class Max extends Rule {

    constructor(size) {
        super();

        this[SIZE] = size;
    }

    static get message() {
        return 'max';
    }

    validate(value) {
        if (value instanceof String) {
            return value.length <= this[SIZE];
        } else if (value instanceof Array) {
            return value.length <= this[SIZE];
        }

        return value <= this[SIZE];
    }

};