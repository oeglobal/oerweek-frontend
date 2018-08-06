import Component from '@ember/component';
import { computed } from '@ember/object';
import moment from 'moment';

export default Component.extend({
  tagName: '',
  currentTime: null,

  timeDiff: computed('currentTime', function(){
    let currentTime = this.currentTime,
      eventTime = moment(this.get('event.event_time'));

    let timeDiff = currentTime.diff(eventTime, 'minutes');
    if (timeDiff > 0) {
      return `Started ${timeDiff} minutes ago`;
    } else{
      let minutes = Math.abs(timeDiff);
      if (minutes > 60) {
        let hours = Math.round(minutes/60 * 10) / 10;
        return `Begins in ${hours} hours`;
      }
      return `Begins in ${minutes} minutes`;
    }
  })
});
