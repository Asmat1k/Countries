const HEADER = `
<header class="header">
  <div class="header__container">
    <div class="header__body">
      <div class="header__radio">
        <div>
          <input type="radio" id="region" value="region" name="radio" />
          <label for="region">Region</label>
        </div>
        <div>
          <input type="radio" id="language" value="language" name="radio" />
          <label for="language">Language</label>
        </div>
      </div>

      <div class="header__select-wrapper">
        <select name="select" id="select" class="header__select">
          <option>-<option>
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
      <th scope="col">
        <div class=table__sort>
          <span>Country</span>
          <div class="arrow arrow-country"></div>
        </div>
      </th>
      <th scope="col">Capital</th>
      <th scope="col">Region</th>
      <th scope="col">Languages</th>
      <th scope="col">
        <div class=table__sort>
          <span>Area, km^2</span>
          <div class="arrow arrow-area"></div>
        </div>
      </th>
      <th scope="col">Flag</th>
    </tr>
  </thead>
  <tbody class="table__body"></tbody>
</table>
`;

export { HEADER, TABLE };
