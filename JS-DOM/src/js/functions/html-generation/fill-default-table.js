export function fillDefaultTable() {
  const TABLE_BODY = document.querySelector('.table__body');

  const DATA = externalService.getAllCountries();
  DATA.forEach((item, index) => {
    const NODE = document.createElement('tr');
    NODE.classList.add('table__row');
    NODE.innerHTML = `
    <td>${item ? item.name : '-'}</td>
    <td>${item ? item.capital : '-'}</td>
    <td>${item ? item.region : '-'}</td>
    <td>${item ? Object.values(item.languages).join(', ') : '-'}</td>
    <td>${item ? item.area : '-'}</td>
    <td>
      <img class="table__img" src="${item.flagURL}" alt="country number ${index}">
    </td>
    `;
    TABLE_BODY.appendChild(NODE);
  });
}
