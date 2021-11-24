const menuBtn = document.querySelector('.fixedButton');
const table = document.querySelector('.table');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    table.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    table.classList.remove('open');
    menuOpen = false;
  }
});
