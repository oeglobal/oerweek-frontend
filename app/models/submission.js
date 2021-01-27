import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';
import { computed } from '@ember/object';

var Validations = buildValidations(
  {
    firstname: [validator('presence', true)],
    lastname: [validator('presence', true)],
    email: [
      validator('presence', true),
      validator('format', { type: 'email' }),
    ],
    country: [validator('presence', true)],
    city: [validator('presence', true)],
    language: [validator('presence', true)],
    postType: [validator('presence', true)],
    link: [
      validator('presence', true),
      validator('format', {
        type: 'url',
      }),
    ],
    title: [validator('presence', true)],
    description: [validator('presence', true)],
    eventTime: [validator('presence', true)],
    archive: [validator('presence', true)],
    license: [validator('presence', true)],
    opentags: [validator('presence', true)],
    eventType: [validator('presence', true)],
    institutionurl: [
      validator('format', {
        allowBlank: true,
        type: 'url',
      }),
    ],
    twitter: [
      validator('format', {
        allowBlank: true,
        regex: /^@[A-Za-z0-9_]{1,15}$/,
        message: 'Twitter username has to start with @',
      }),
    ],
  },
  {
    debounce: 500,
  }
);

export default DS.Model.extend(Validations, {
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  institution: DS.attr('string'),
  institutionurl: DS.attr('string'),
  email: DS.attr('string'),
  country: DS.attr('string'),
  city: DS.attr('string'),
  language: DS.attr('string'),
  postType: DS.attr('string'),

  eventType: DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  eventTime: DS.attr('string'),

  eventFacilitator: DS.attr('string'),
  directions: DS.attr('string'),
  link: DS.attr('string'),
  linkwebroom: DS.attr('string'),

  opentags: DS.attr(),

  license: DS.attr('string'),
  postStatus: DS.attr('string'),
  postStatusFriendly: DS.attr('string'),
  imageUrl: DS.attr('string'),
  image: DS.attr(),

  slug: DS.attr('string'),
  twitter: DS.attr('string'),

  permalink: computed('slug', function () {
    if (this.postType === 'event') {
      return `https://www.openeducationweek.org/events/${this.slug}`;
    } else {
      return `https://www.openeducationweek.org/resources/${this.slug}`;
    }
  }),

  postStatusColor: computed('postStatus', function () {
    switch (this.postStatus) {
      case 'draft':
        return 'text-blue-400';
      case 'publish':
        return 'text-green-400';
      case 'trash':
        return 'text-red-400';
      default:
        return 'text-gray-500';
    }
  }),
});
