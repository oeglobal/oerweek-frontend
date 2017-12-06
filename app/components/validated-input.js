import Component from '@ember/component';
import {defineProperty, computed} from '@ember/object';

export default Component.extend({
  classNames: ['validated-input'],
  classNameBindings: ['showErrorClass:has-error', 'isValid:has-success'],
  model: null,
  value: null,
  type: 'text',
  valuePath: '',
  placeholder: '',
  validation: null,
  didValidate: false,

  notValidating: computed.not('validation.isValidating').readOnly(),
  hasContent: computed.notEmpty('value').readOnly(),
  hasWarnings: computed.notEmpty('validation.warnings').readOnly(),
  isValid: computed.and('hasContent', 'validation.isTruelyValid').readOnly(),
  shouldDisplayValidations: computed.or('showValidations', 'didValidate', 'hasContent').readOnly(),

  showErrorClass: computed.and('notValidating', 'showErrorMessage', 'hasContent', 'validation').readOnly(),
  showErrorMessage: computed.and('shouldDisplayValidations', 'validation.isInvalid').readOnly(),
  showWarningMessage: computed.and('shouldDisplayValidations', 'hasWarnings', 'isValid').readOnly(),

  init() {
    this._super(...arguments);
    let valuePath = this.get('valuePath');

    defineProperty(this, 'validation', computed.readOnly(`model.validations.attrs.${valuePath}`));
    defineProperty(this, 'value', computed.alias(`model.${valuePath}`));
  },

  focusOut() {
    this._super(...arguments);
    this.set('showValidations', true);
  },

  actions: {
    valueChanged(val) {
      this.get('model').set(this.get('valuePath'), val);
      this.set('selected', val);
    },
    radioChanged(val) {
      this.get('model').set(this.get('valuePath'), val);
    }
  }
});