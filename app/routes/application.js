import classic from 'ember-classic-decorator';
import Route from '@ember/routing/route';

@classic
export default class ApplicationRoute extends Route {
  title(tokens) {
    if (tokens.length) {
      return tokens.join(' - ') + ' - Open Education Week';
    }

    return 'Open Education Week';
  }
}
