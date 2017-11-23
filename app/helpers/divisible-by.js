import { helper } from '@ember/component/helper';

export function divisibleBy(params/*, hash*/) {
  let index = params[0] + 1,
    modulo = params[1];

  if ( index % modulo === 0) {
    return true;
  }
  return false;
}

export default helper(divisibleBy);
