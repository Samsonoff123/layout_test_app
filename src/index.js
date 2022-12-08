import './scss/app.scss';

const slider = document.getElementById('header__categories');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});

window.addEventListener('click', () => {
  const $searchDropdown = document.querySelector('.header__search__dropdown')
  $searchDropdown.classList.remove('_active')

  const $geoDropdown = document.querySelector('.header__geo__dropdown')
  $geoDropdown?.classList.remove('_active')
})