import EmailAddress from './EmailAddress';
import Equals from './Equals';
import Max from './Max';
import Min from './Min';
import Required from './Required';
import StrictlyEquals from './StrictlyEquals';

export default class Rules {
    static EmailAddress() {
        return new EmailAddress();
    }

    static Equals(compareAgainst) {
        return new Equals(compareAgainst);
    }

    static Max(maximumSize) {
        return new Max(maximumSize);
    }

    static Min(minimumSize) {
        return new Min(minimumSize);
    }

    static Required() {
        return new Required();
    }

    static StrictlyEquals(compareAgainst) {
        return new StrictlyEquals(compareAgainst);
    }
}