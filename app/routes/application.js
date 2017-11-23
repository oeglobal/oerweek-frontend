import Route from '@ember/routing/route';

export default Route.extend({
  title: function (tokens) {
    if (tokens.length) {
      return tokens.join(' - ') + ' - Open Education Week';
    }

    return 'Open Education Week';
  }
});
