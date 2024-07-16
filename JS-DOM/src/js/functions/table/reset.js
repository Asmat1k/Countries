import { init } from '../..';

export function resetAll() {
  const BTN = document.querySelector('.footer__btn');

  BTN.addEventListener('click', () => {
    init();
  });
}
