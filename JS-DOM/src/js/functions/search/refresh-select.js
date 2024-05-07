import { refreshTable } from '../table/refresh-table';

export function refreshSelect(data, mode) {
  const SELECT = document.querySelector('#select');
  SELECT.classList.add('header__select-shown');
  SELECT.innerHTML = '';

  if (data.length > 0) {
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
  });
}

function createOption(value, inner, select) {
  const OPTION = document.createElement('option');
  OPTION.value = value;
  OPTION.innerHTML = inner;

  if (select) select.appendChild(OPTION);
}
