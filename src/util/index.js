/**
 * Created by bby on 18/1/16.
 */
import _ from 'lodash';
const getRandomNumberStats = function (n) {
  const chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let res = "";
  for (let i = 0; i < n; i++) {
    res += chars[Math.ceil(Math.random() * 35)];
  }
  return res;
};

// eslint-disable-next-line import/prefer-default-export
export function ec(components) {
  return _.keyBy(components, 'name');
}

export function clickMark({clickData, pid = 0}) {
  const trackId = getRandomNumberStats(100);
  let statsDomain = 'http://www.chunbo.com';
  if (window.CURRENT_SITE_IS_HTTPS && window.CURRENT_SITE_IS_HTTPS === '1') {
    statsDomain = 'https://secureweb.chunbo.com';
  }
  const d = document
    , i = d.createElement('img');
  i.src = `${statsDomain}/Stats/addClick?d=${clickData}&ref=${encodeURIComponent(d.URL)}&track_id=${encodeURIComponent(trackId)}&product_id=${pid}`;
}

export function setTitle(text) {
  document.querySelectorAll('title')[0].innerText = text;
}
