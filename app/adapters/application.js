import DS from 'ember-data';
import TokenAdapterMixin from 'ember-simple-auth-token/mixins/token-adapter';

import ENV from 'frontend/config/environment';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.uncountable('resource');
inflector.uncountable('event');

export default DS.JSONAPIAdapter.extend(TokenAdapterMixin, {
  host: ENV.APP.API_HOST,
  namespace: ENV.APP.API_NAMESPACE,
});
