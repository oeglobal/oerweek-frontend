import {helper} from '@ember/component/helper';

export function simpleTemplate(params, hash) {
  let templateString = hash.templateString,
    props = hash.props;

  return encodeURIComponent(templateString.replace('{{title}}', props.title)
                       .replace('{{name}}', props.name)
                       .replace('{{link}}', props.link));
}

export default helper(simpleTemplate);
