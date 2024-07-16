export function refreshTable(data) {
  const TABLE_BODY = document.querySelector('.table__body');
  TABLE_BODY.innerHTML = '';

  data.forEach((item, index) => {
    const ROW = document.createElement('tr');
    ROW.classList.add('table__row');
    ROW.innerHTML = `
    <td>${item.name ? item.name : '-'}</td>
    <td>${item.capital ? item.capital : '-'}</td>
    <td>${item.region ? item.region : '-'}</td>
    <td>${item.languages ? (typeof item.languages == 'object' ? Object.values(item.languages).join(', ') : item.languages) : '-'}</td>
    <td>${item.area ? item.area : '-'}</td>
    <td>
      <img class="table__img" src="${item.flagURL}" alt="country number ${index}">
    </td>
    `;
    TABLE_BODY.appendChild(ROW);
  });
}
