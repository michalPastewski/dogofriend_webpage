const body = document.querySelector('body');
const articles = document.querySelectorAll('.article');
const linksName = body.querySelectorAll('[name]');
const burger = document.querySelector('.navigation__menu__burger');
const burgerItems = document.querySelectorAll('.navigation__menu__burger--item');
const burgerCheckbox = document.querySelector('.navigation__menu--input');

// navigation burger animated
const openBurger = () => {
  if(!burgerCheckbox.checked) {
    burgerItems[0].classList.add('burger__open__item--one');
    burgerItems[2].classList.add('burger__open__item--two');
  } else {
    burgerItems[0].classList.remove('burger__open__item--one');
    burgerItems[2].classList.remove('burger__open__item--two');
  }
}

const clickLink = () => {
  openBurger();
  burgerCheckbox.checked = false;
}

burger.addEventListener('click', openBurger);
linksName.forEach(link => link.addEventListener('click', clickLink));


// navigation tabs
const articlesArr = [...articles];

export const navTabs = (scrollPositionY) => {
  const bottomOfView = scrollPositionY + window.innerHeight;
  const linksNameLastIndex = `${linksName.length - 1}`;

  const articleMatch = articlesArr.filter(article => {
    const articleTop = article.offsetTop - article.offsetHeight/2;
    const articleBottom = article.offsetTop + article.offsetHeight/2;
    return scrollPositionY >= articleTop && scrollPositionY <= articleBottom;
  });

  if(bottomOfView > body.offsetHeight - 50){
    linksName.forEach(link => link.classList.remove('navigation--tabs'));
    linksName[linksNameLastIndex].classList.add('navigation--tabs');
  } else {
    linksName.forEach(link => {
      if(articleMatch.length && articleMatch[0].id === link.name) {
        return link.classList.add('navigation--tabs');
      } else {
        return link.classList.remove('navigation--tabs');
      }
    });
  }
}

