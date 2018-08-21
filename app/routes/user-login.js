import route from '@ember/routing/route';

export default route.extend({
  actions: {
    didTransition() {
      this.controller.send('authUser');
    }
  }
});
