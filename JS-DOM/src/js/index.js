import '../css/style.css';
import { generateHTML } from './functions/html-generation/html-generation.js';
import { pickRadioBtn } from './functions/search/pick-radio.js';
import { sortByArea } from './functions/table/sort-by-area.js';
import { sortByCountry } from './functions/table/sort-by-country.js';

generateHTML();
pickRadioBtn();
sortByCountry();
sortByArea();
