import Controller from '@ember/controller';
import ResourceControllerMixin from '../../mixins/resource-controller';

export default Controller.extend(ResourceControllerMixin, {
  modelName: 'event',
  yearselected: '2018',
});
