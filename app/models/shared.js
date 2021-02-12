import Model, { attr } from '@ember-data/model';
import { htmlSafe } from '@ember/template';
import moment from 'moment';

export default class SharedResourceModel extends Model {
  @attr('string') title;
  @attr('string') postType;
  @attr('string') postStatus;
  @attr('number') postId;
  @attr('string') slug;
  @attr('string') content;
  @attr('string') contentExcerpt;
  @attr('string') contact;
  @attr('string') institution;
  @attr('string') formLanguage;
  @attr('string') license;
  @attr('string') link;
  @attr('string') linkwebroom;
  @attr categories;
  @attr tags;
  @attr('string') imageUrl;
  @attr('string') country;
  @attr('string') city;
  @attr('string') eventTime;
  @attr('string') eventType;
  @attr('string') eventSourceDatetime;
  @attr('string') eventSourceTimezone;
  @attr('string') eventFacilitator;

  get contentSafe() {
    return htmlSafe(this.content);
  }

  get contentExcerptSafe() {
    return htmlSafe(this.contentExcerpt);
  }

  get eventDate() {
    return moment(this.eventTime).format('dddd, MMMM Do YYYY');
  }
}
