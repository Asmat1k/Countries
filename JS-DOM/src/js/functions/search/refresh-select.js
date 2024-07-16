import { deleteAllActiveClasses } from '../table/off-arrows';
import { refreshTable } from '../table/refresh-table';

export function refreshSelect(data, mode) {
  const SELECT = document.querySelector('#select');
  SELECT.classList.add('header__select-shown');
  SELECT.innerHTML = '';

  if (data.length > 0) {
    createOption('-1', `Select ${mode}`, SELECT, true);
    data.forEach((item) => {
      createOption(item, item, SELECT);
    });
    addListenerOnSelect(SELECT, mode);
    return;
  }
  createOption('error', 'Empty', SELECT);
}

function addListenerOnSelect(select, mode) {
  select.addEventListener('change', () => {
    refreshTable(
      mode === 'region'
        ? externalService.getCountryListByRegion(select.value)
        : externalService.getCountryListByLanguage(select.value),
    );
    deleteAllActiveClasses();
  });
}

function createOption(value, inner, select, flag = false) {
  const OPTION = document.createElement('option');
  OPTION.value = value;
  OPTION.selected = flag;
  OPTION.disabled = flag;
  OPTION.innerHTML = inner;

  if (select) select.appendChild(OPTION);
}
