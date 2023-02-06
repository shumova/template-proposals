// Необходимо подключить, если на сайте имеются инпуты
// со шрифтом меньше 16px на мобильной ширине,
// иначе на ios при входе в поле страничка будет скейлиться.

import {iosChecker} from './ios-checker';

const iosInputScaleFix = () => {
  if (iosChecker()) {
    const vp = document.querySelector('meta[name="viewport"]');
    let content = vp.getAttribute('content');
    content = content + ', maximum-scale=1.0';
    vp.setAttribute('content', content);
  }
};

export {iosInputScaleFix};
