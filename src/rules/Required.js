import _isEmpty from 'lodash/isEmpty';
import Rule from './Rule';

export default class Required extends Rule {

    static get message() {
        return 'required';
    }

    validate(value) {
        return _isEmpty(value) === false;
    }

};