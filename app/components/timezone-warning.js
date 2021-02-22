import Component from '@glimmer/component';
import moment from 'moment';

export default class TimezoneWarningComponent extends Component {
  constructor() {
    super(...arguments);

    this.tz = moment.tz.guess();
  }
}
