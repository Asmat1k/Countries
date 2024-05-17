import { disableAnotherArrow } from './off-arrows.js';
import { parseTable } from './parse-table';
import { refreshTable } from './refresh-table.js';

export function sortRows() {
  const ARROWS = document.querySelectorAll('.arrow');
  let isLastModUp = false;

  ARROWS.forEach((arrow) => {
    arrow.addEventListener('click', (event) => {
      disableAnotherArrow(arrow.classList[1].includes('area') ? 'country' : 'area');

      const records = parseTable();

      if (records.length <= 1) return;

      const computedProp = event.target.classList.contains('arrow-country') ? 'name' : 'area';
      const currentArrowState = event.target.classList[2];

      switch (currentArrowState) {
        case 'arrow-default':
          clearClasses(event.target);
          event.target.classList.add(isLastModUp ? 'arrow-down' : 'arrow-up');
          customSort(records, !isLastModUp, computedProp);
          break;
        case 'arrow-up':
          setArrowToDefault(event.target);
          isLastModUp = true;
          break;
        case 'arrow-down':
          setArrowToDefault(event.target);
          isLastModUp = false;
          break;
        default:
          break;
      }

      // Если стрелка на середине, то сортировки нет и появляется не отсортированная таблица
      // Если же стрелка в режиме сортировки, то появляется отсортированная
      const isArrowOnMiddle = currentArrowState != 'arrow-default';
      refreshTable(isArrowOnMiddle ? getNotSortedPage() : records);
    });
  });
}

function clearClasses(target) {
  target.classList.forEach((item, index) => {
    if (index > 1) target.classList.remove(item);
  });
}

function setArrowToDefault(target) {
  clearClasses(event.target);
  target.classList.add('arrow-default');
}

function customSort(records, isArrowUp, prop) {
  records.sort((a, b) => {
    if (a[prop] < b[prop]) {
      return isArrowUp ? 1 : -1;
    }
    if (a[prop] > b[prop]) {
      return isArrowUp ? -1 : 1;
    }
    return 0;
  });
}

function getNotSortedPage() {
  const selectedRadio = document.querySelector('input[type="radio"]:checked');
  const selectedValue = document.querySelector('#select').value;

  if (!selectedRadio) {
    return externalService.getAllCountries();
  }

  const selectedMode = selectedRadio.value;

  if (selectedMode === 'region') {
    return externalService.getCountryListByRegion(selectedValue);
  } else if (selectedMode === 'language') {
    return externalService.getCountryListByLanguage(selectedValue);
  }
}
