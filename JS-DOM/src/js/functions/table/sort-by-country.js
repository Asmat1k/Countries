import { parseTable } from './parse-table';
import { refreshTable } from './refresh-table';

export function sortByCountry() {
  const ARROW = document.querySelector('.arrow-country');
  ARROW.addEventListener('click', () => {
    ARROW.classList.toggle('arrow-active');

    const records = parseTable();

    records.sort((a, b) => {
      const isArrowActive = ARROW.classList.contains('arrow-active');
      if (a.name < b.name) {
        return isArrowActive ? 1 : -1;
      }
      if (a.name > b.name) {
        return isArrowActive ? -1 : 1;
      }
      return 0;
    });

    refreshTable(records);
  });
}
