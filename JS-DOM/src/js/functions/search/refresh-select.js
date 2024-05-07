export function refreshSelect(data) {
  const SELECT = document.querySelector('#select');
  SELECT.classList.add('header__select-shown');
  SELECT.innerHTML = '';

  if (data.length > 0) {
    data.forEach((item) => {
      createOption(item, item, SELECT);
    });
    return;
  }
  createOption('error', 'Empty', SELECT);
}

function createOption(value, inner, select) {
  const OPTION = document.createElement('option');
  OPTION.value = value;
  OPTION.innerHTML = inner;

  if (select) select.appendChild(OPTION);
}
