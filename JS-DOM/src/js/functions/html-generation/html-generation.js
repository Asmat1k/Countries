import { HEADER, TABLE, FOOTER } from './CONST.js';

import { refreshTable } from '../table/refresh-table.js';

export function generateHTML() {
  const appRoot = document.getElementById('app-root');

  appRoot.innerHTML = `
  ${HEADER}
  <main id="main">
    ${TABLE}
  </main> 
  ${FOOTER}
  `;

  refreshTable(externalService.getAllCountries());
}
