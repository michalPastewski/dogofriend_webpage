import { navTabs } from './navigation';

function debounce(func, wait = 10, immediate = true) {
  let timeout;
  return function() {
    const context = this, args = arguments;
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}


const cards = document.querySelectorAll('.education__content__card');

const scrollDisplayCard = (scrollPositionY) => {
  cards.forEach(card => {
    const displayInAt = (scrollPositionY + window.innerHeight - card.clientHeight);
    
    if(displayInAt > card.offsetTop) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  })
}


const articles = document.querySelectorAll('.article');
const articlesArr = [...articles];
const articleTitles = document.querySelectorAll('.article__title');

const slideArticleTitles = (scrollPositionY) => {
  articles.forEach(article => {
  const slideInAt = scrollPositionY + window.innerHeight - article.clientHeight / 2;
  const articleBottom = article.offsetTop + article.clientHeight;
  const isNotScrollPast = scrollPositionY < articleBottom;

  if(scrollPositionY > article.offsetTop - article.clientHeight/1.2) {
    article['childNodes'][1].classList.add('active--slide')
  } else {
    article['childNodes'][1].classList.remove('active--slide')
  }
})
}

const pageScroll = () => {
  const windowScroll = window.scrollY;
  navTabs(windowScroll);
  scrollDisplayCard(windowScroll);
  slideArticleTitles(windowScroll);
}

window.addEventListener('scroll', debounce(pageScroll));


