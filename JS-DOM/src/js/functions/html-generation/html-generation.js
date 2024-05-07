import { HEADER } from './CONST.js';
import { TABLE } from './CONST.js';

import { fillDefaultTable } from './fill-default-table.js';

export function generateHTML() {
  const appRoot = document.getElementById('app-root');

  appRoot.innerHTML = `
  ${HEADER}
  <main id="main">
    ${TABLE}
  </main> 
  `;

  fillDefaultTable();
}
