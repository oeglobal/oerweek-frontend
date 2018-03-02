import Model from 'ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  name: DS.attr('string'),
  subject: DS.attr('string'),
  body: DS.attr('string')
});
