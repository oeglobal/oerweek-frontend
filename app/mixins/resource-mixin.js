import Mixin from '@ember/object/mixin';
import attr from 'ember-data/attr';

export default Mixin.create({
  title: attr('string'),
  post_type: attr('string'),
  post_status: attr('string'),
  post_id: attr('number'),
  slug: attr('string'),
  content: attr('string'),
  content_excerpt: attr('string'),
  contact: attr('string'),
  institution: attr('string'),
  form_language: attr('string'),
  license: attr('string'),
  link: attr('string'),
  linkwebroom: attr('string'),
  categories: attr(),
  tags: attr(),
  image_url: attr('string'),
  country: attr('string'),
  city: attr('string'),
  event_time: attr('string'),
  event_type: attr('string'),
  event_source_datetime: attr('string'),
  event_source_timezone: attr('string'),
  event_facilitator: attr('string')
});
