export function deleteAllActiveClasses() {
  const ARROWS = document.querySelectorAll('.arrow');
  ARROWS.forEach((arrow) => {
    arrow.classList.remove('arrow-active');
  });
}

export function disableAnotherArrow(arrowName) {
  const ARROWS = document.querySelectorAll('.arrow');
  ARROWS.forEach((arrow) => {
    if (arrow.classList.contains(`arrow-${arrowName}`)) {
      arrow.classList.remove('arrow-active');
    }
  });
}
