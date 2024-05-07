import { refreshSelect } from './refresh-select';

export function pickRadioBtn() {
  const RADIOS = document.querySelectorAll('input[type="radio"]');

  RADIOS.forEach((item) => {
    item.addEventListener('click', () => {
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
    });
  });
}
