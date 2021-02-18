import { helper } from '@ember/component/helper';

export default helper(function eventColor(params) {
  let type = params[0];

  if (type === 'anytime') {
    return 'bg-turq-200';
  }

  if (type === 'local') {
    return 'bg-purple-100';
  }

  if (type === 'online') {
    return 'bg-red-300';
  }
});
