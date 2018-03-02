import DRFAdapter from './drf';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import CachedShoe   from 'ember-cached-shoe'

export default DRFAdapter.extend(CachedShoe, DataAdapterMixin, {
  authorizer: 'authorizer:token',
});
