import Model, { attr } from '@ember-data/model';
import { htmlSafe } from '@ember/template';

export default class PageModel extends Model {
  @attr('string') title;
  @attr('string') slug;
  @attr('string') content;

  get contentSafe() {
    return htmlSafe(this.content);
  }
}
