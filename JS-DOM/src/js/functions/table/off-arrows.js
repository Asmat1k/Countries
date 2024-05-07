export function deleteAllActiveClasses() {
  const ARROWS = document.querySelectorAll('.arrow');
  ARROWS.forEach((arrow) => {
    arrow.classList.remove('arrow-active');
  });
}
