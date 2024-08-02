'use strict';
const header = document.querySelector('.header');
const heroSection = document.querySelector('.section-hero');
const nav = document.querySelector('.main-nav');
const navMobileBtn = document.querySelector('.btn-mobile-nav');
const iconOpen = document.querySelector('.icon-open-nav');
const iconClose = document.querySelector('.icon-close-nav');

/////////////////////////////////////////////////
// Mobile NAV
const toggleNavMobile = () => {
  header.classList.toggle('nav-open');
  iconOpen.classList.toggle('hide');
  iconClose.classList.toggle('hide');
};

navMobileBtn.addEventListener('click', toggleNavMobile);

nav.addEventListener('click', e => {
  if (e.target.classList.contains('main-nav-links')) toggleNavMobile();
});

//////////////////////////////////////////////
// Sticky navigation

const navHeight = window.getComputedStyle(header).getPropertyValue('height');
const sectionHeroEl = document.querySelector('.section-hero');
const observer = new IntersectionObserver(
  entries => {
    const ent = entries[0];
    if (!ent.isIntersecting) document.body.classList.add('sticky');
    if (ent.isIntersecting) document.body.classList.remove('sticky');
  },
  {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}`,
  }
);
observer.observe(sectionHeroEl);
