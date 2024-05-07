const HEADER = `
<header class="header">
  <div class="header__container">
    <div class="header__body">
      <div class="header__radio">
        <div>
          <input type="radio" id="region" value="region" name="radio" checked />
          <label for="region">Регион</label>
        </div>
        <div>
          <input type="radio" id="language" value="language" name="radio" />
          <label for="language">Язык</label>
        </div>
      </div>

      <div class="header__select">
        <select name="select" id="select">

        </select>
      </div>
    </div>
  </div>
</header>
`;

const TABLE = `
<table id="table">
  <thead class="table__head">
    <tr class="table__row">
      <th scope="col">Country</th>
      <th scope="col">Capital</th>
      <th scope="col">Region</th>
      <th scope="col">Languages</th>
      <th scope="col">Square</th>
      <th scope="col">Flag</th>
    </tr>
  </thead>
  <tbody class="table__body">
    <tr class="table__row">
      <td>Russia</td>
      <td>Moscow</td>
      <td>Region</td>
      <td>Russian</td>
      <td>17 100 000</td>
      <td>Flag</td>
    </tr>
  </tbody>
</table>
`;

export function generateHTML() {
  const appRoot = document.getElementById('app-root');

  appRoot.innerHTML = `
  ${HEADER}
  <main id="main">
    ${TABLE}
  </main> 
  `;
}
