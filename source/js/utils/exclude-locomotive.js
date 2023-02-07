// Останавливает прокрутку всей страницы с использованием locomotive-scroll
// чтобы прокручивать указанный блок.
// Блоку задается атрибут data-exclude-locomotive.
// Например, в custom-select атрибут необходимо задавать блоку ul.custom-select__list

import {locoScroll} from '';

const onMouseOver = (evt) => {
  if (evt.target.closest('[data-exclude-locomotive]')) {
    locoScroll.stop();
  }
};

const onMouseOut = (evt) => {
  if (evt.target.closest('[data-exclude-locomotive]')) {
    locoScroll.start();
  }
};

const excludeLocomotive = () => {
  const locoStopBlocks = document.querySelectorAll('[data-exclude-locomotive]');

  if (locoStopBlocks.length > 0) {
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
  }
};

export {excludeLocomotive};
