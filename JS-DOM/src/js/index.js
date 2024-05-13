import '../css/style.css';

import { generateHTML } from './functions/html-generation/html-generation.js';
import { pickRadioBtn } from './functions/search/pick-radio.js';
import { resetAll } from './functions/table/reset.js';
import { sortRows } from './functions/table/sort-rows.js';

export function init() {
  generateHTML();
  pickRadioBtn();
  sortRows();
  resetAll();
}

init();
