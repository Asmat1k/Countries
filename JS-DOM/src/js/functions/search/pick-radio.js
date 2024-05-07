import { refreshSelect } from './refresh-select';

export function searchCountries() {
  const RADIOS = document.querySelectorAll('input[type="radio"]');

  RADIOS.forEach((item) => {
    item.addEventListener('click', () => {
      switch (item.id) {
        case 'region': {
          refreshSelect(externalService.getRegionsList());
          break;
        }
        case 'language': {
          refreshSelect(externalService.getLanguagesList());
          break;
        }
        default: {
          break;
        }
      }
    });
  });
}
