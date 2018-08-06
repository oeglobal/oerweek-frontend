import Mixin from '@ember/object/mixin';
import attr from 'ember-data/attr';

export default Mixin.create({
  title: attr('string'),
  postType: attr('string'),
  postStatus: attr('string'),
  postId: attr('number'),
  slug: attr('string'),
  content: attr('string'),
  contentExcerpt: attr('string'),
  contact: attr('string'),
  institution: attr('string'),
  formLanguage: attr('string'),
  license: attr('string'),
  link: attr('string'),
  linkwebroom: attr('string'),
  categories: attr(),
  tags: attr(),
  imageUrl: attr('string'),
  country: attr('string'),
  city: attr('string'),
  eventTime: attr('string'),
  eventType: attr('string'),
  eventSourceDatetime: attr('string'),
  eventSourceTimezone: attr('string'),
  eventFacilitator: attr('string')
});
