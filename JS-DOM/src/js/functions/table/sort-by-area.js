import { parseTable } from './parse-table';
import { refreshTable } from './refresh-table';

export function sortByArea() {
  const ARROW = document.querySelector('.arrow-area');
  ARROW.addEventListener('click', () => {
    ARROW.classList.toggle('arrow-active');

    const records = parseTable();

    records.sort((a, b) => {
      const isArrowActive = ARROW.classList.contains('arrow-active');
      if (a.area < b.area) {
        return isArrowActive ? 1 : -1;
      }
      if (a.area > b.area) {
        return isArrowActive ? -1 : 1;
      }
      return 0;
    });

    refreshTable(records);
  });
}
