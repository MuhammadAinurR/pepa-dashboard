const a = document.querySelector('.detailsButton1');
const b = document.querySelector('.detailsButton');
const c = document.querySelector('.detailsButton2');

const closeButton = document.querySelector('.closeButton');
const closeButton1 = document.querySelector('.closeButton1');
const detailsItem = document.querySelector('.detailsItem');
const detailsItem1 = document.querySelector('.detailsItem1');
const detailsItem2 = document.querySelector('.detailsItem2');
let detailsOpen = false;

a.addEventListener('click', () => {
  if (!detailsOpen) {
    detailsItem1.classList.add('open');
    detailsOpen = true;
  } else {
    close();
    detailsItem1.classList.add('open');
    detailsOpen = true;
  }
});

b.addEventListener('click', () => {
  if (!detailsOpen) {
    detailsItem.classList.add('open');
    detailsOpen = true;
  } else {
    close();
    detailsItem.classList.add('open');
    detailsOpen = true;
  }
});

c.addEventListener('click', () => {
  if (!detailsOpen) {
    detailsItem2.classList.add('open');
    detailsOpen = true;
  } else {
    close();
    detailsItem2.classList.add('open');
    detailsOpen = true;
  }
});

function close() {
  detailsItem.classList.remove('open');
  detailsItem1.classList.remove('open');
  detailsOpen = false;
}

closeButton.addEventListener('click', () => {
  close();
});
closeButton1.addEventListener('click', () => {
  close();
});

const elementclose = document.getElementsByClassName('overlay');

for (let i = 0; i < elementclose.length; i++) {
  elementclose[i].addEventListener('click', function () {
    let url = window.location.href.substr(0, window.location.href.indexOf('#'));
    window.location = url;
  });
}
