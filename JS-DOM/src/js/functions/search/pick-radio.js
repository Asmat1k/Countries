import { refreshTable } from '../table/refresh-table';
import { refreshSelect } from './refresh-select';

export function pickRadioBtn() {
  const RADIOS = document.querySelectorAll('input[type="radio"]');
  let lastActiveBtnId = '';

  RADIOS.forEach((item) => {
    item.addEventListener('click', () => {
      if (lastActiveBtnId !== item.id) {
        // Для избежания перерисовки при клике на первом рендере
        if (lastActiveBtnId) {
          refreshTable(externalService.getAllCountries());
        }

        switch (item.id) {
          case 'region': {
            refreshSelect(externalService.getRegionsList(), item.id);
            break;
          }
          case 'language': {
            refreshSelect(externalService.getLanguagesList(), item.id);
            break;
          }
          default: {
            break;
          }
        }
      }
      lastActiveBtnId = item.id;
    });
  });
}
