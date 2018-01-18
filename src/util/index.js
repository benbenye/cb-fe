/**
 * Created by bby on 18/1/16.
 */
import _ from 'lodash';

// eslint-disable-next-line import/prefer-default-export
export function ec(components) {
  return _.keyBy(components, 'name');
}

export function setTitle(text) {
  document.querySelectorAll('title')[0].innerText = text;
}
