export function refreshTable(data) {
  const TABLE_BODY = document.querySelector('.table__body');
  TABLE_BODY.innerHTML = '';

  data.forEach((item, index) => {
    const ROW = document.createElement('tr');
    ROW.classList.add('table__row');
    ROW.innerHTML = `
    <td>${item ? item.name : '-'}</td>
    <td>${item ? item.capital : '-'}</td>
    <td>${item ? item.region : '-'}</td>
    <td>${item ? Object.values(item.languages).join(', ') : '-'}</td>
    <td>${item ? item.area : '-'}</td>
    <td>
      <img class="table__img" src="${item.flagURL}" alt="country number ${index}">
    </td>
    `;
    TABLE_BODY.appendChild(ROW);
  });
}
