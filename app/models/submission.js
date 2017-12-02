import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

var Validations = buildValidations({
  firstname: [
    validator('presence', true),
  ],
  lastname: [
    validator('presence', true),
  ],
  email: [
    validator('presence', true),
  ],
  country: [
    validator('presence', true),
  ],
  city: [
    validator('presence', true),
  ],
  language: [
    validator('presence', true),
  ],
  contributiontype: [
    validator('presence', true),
  ],
  link: [
    validator('presence', true),
    validator('format', {
      type: 'url'
    })
  ],
  title: [
    validator('presence', true),
  ],
  description: [
    validator('presence', true),
  ],
  datetime: [
    validator('presence', true),
  ],
  archive: [
    validator('presence', true),
  ],
  license: [
    validator('presence', true),
  ],
  opentags: [
    validator('presence', true),
  ],
  eventtype: [
    validator('presence', true),
  ]
}, {
  debounce: 500
});

export default DS.Model.extend(Validations, {
  firstname: DS.attr('string'),
  lastname: DS.attr('string'),
  institution: DS.attr('string'),
  institutionurl: DS.attr('string'),
  email: DS.attr('string'),
  country: DS.attr('string'),
  city: DS.attr('string'),
  language: DS.attr('string'),
  contributiontype: DS.attr('string'),

  eventtype: DS.attr('string'),
  title: DS.attr('string'),
  description: DS.attr('string'),
  datetime: DS.attr('string'),

  facilitator: DS.attr('string'),
  directions: DS.attr('string'),
  link: DS.attr('string'),
  linkwebroom: DS.attr('string'),

  opentags: DS.attr(),

  license: DS.attr('string'),
  postStatus: DS.attr('string'),
});
