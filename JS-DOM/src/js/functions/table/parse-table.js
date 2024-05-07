export function parseTable() {
  const rows = document.querySelectorAll('.table__body > .table__row');
  const records = [];

  rows.forEach((row) => {
    const CELLS = row.querySelectorAll('td');

    const record = {
      name: CELLS[0].textContent,
      capital: CELLS[1].textContent,
      region: CELLS[2].textContent,
      languages: CELLS[3].textContent,
      area: parseInt(CELLS[4].textContent),
      flagURL: CELLS[5].querySelector('.table__img').src,
    };

    records.push(record);
  });

  return records;
}
