import Controller from '@ember/controller';
import $ from 'jquery';

export default Controller.extend({
  handleFaq() {
    $(this).parent('.qa').toggleClass('visible');
  },

  actions: {
    activateFaq(slug) {
      if (slug === 'faq') {
        $('.question').on('click', this.handleFaq);
      }
    },

    deactivateFaq(slug) {

      if (slug === 'faq') {
        $('.question').off('click', this.handleFaq);
      }
    }
  }
});
