import '../css/style.css';
import { generateHTML } from './functions/html-generation/html-generation.js';
import { pickRadioBtn } from './functions/search/pick-radio.js';
import { sortRows } from './functions/table/sort-rows.js';

generateHTML();
pickRadioBtn();
sortRows();
