import DS from 'ember-data';
import TokenAuthorizerMixin from 'ember-simple-auth-token/mixins/token-authorizer';
import ENV from 'frontend/config/environment';
import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;
inflector.uncountable('resource');
inflector.uncountable('event');

export default DS.JSONAPIAdapter.extend(TokenAuthorizerMixin, {
  host: ENV.APP.API_HOST,
  namespace: ENV.APP.API_NAMESPACE,
});
