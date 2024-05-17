import { disableAnotherArrow } from './off-arrows.js';
import { parseTable } from './parse-table';
import { refreshTable } from './refresh-table.js';

export function sortRows() {
  const ARROWS = document.querySelectorAll('.arrow');

  ARROWS.forEach((arrow) => {
    arrow.addEventListener('click', (event) => {
      disableAnotherArrow(arrow.classList[1].includes('area') ? 'country' : 'area');
      
      event.target.classList.toggle('arrow-active');
      const records = parseTable();

      if (records.length <= 1) return;

      const computedProp = event.target.classList.contains('arrow-country') ? 'name' : 'area';
      const isArrowActive = event.target.classList.contains('arrow-active');
      records.sort((a, b) => {
        if (a[computedProp] < b[computedProp]) {
          return isArrowActive ? 1 : -1;
        }
        if (a[computedProp] > b[computedProp]) {
          return isArrowActive ? -1 : 1;
        }
        return 0;
      });

      refreshTable(records);
    });
  });
}
