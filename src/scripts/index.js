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

const pageScroll = () => {
  const windowScroll = window.scrollY;
  navTabs(windowScroll);
  scrollDisplayCard(windowScroll);
}

window.addEventListener('scroll', debounce(pageScroll));


/*
const articles = document.querySelectorAll('.article');
const articlesArr = [...articles];
const articleTitles = document.querySelectorAll('.article__title');


const slideArticleTitles = (scrollPositionY) => {
  // if(scrollPositionY > 900) {
  //   articleTitles.forEach(title => title.classList.add('active--slide'))
  // }

  // const bottomOfView = scrollPositionY + window.innerHeight;
  // const linksNameLastIndex = `${linksName.length - 1}`;

  const articleMatch = articlesArr.filter(article => {
    const articleTop = article.offsetTop - article.offsetHeight/2;
    const articleBottom = article.offsetTop + article.offsetHeight/2;
    return scrollPositionY >= articleTop && scrollPositionY <= articleBottom;
  });


    articles.forEach(title => {
      if(articleMatch.length && articleMatch[0].id === title.name) {
        return title.classList.add('navigation--tabs');
      } else {
        return title.classList.remove('navigation--tabs')
      }
    });
  }

  // articles.forEach((article, index) => {
  //   console.log(articles[index].clientHeight)
  //   const slideInAt = (scrollPositionY + window.innerHeight - article.clientHeight / 2);
  //   if(scrollPositionY > slideInAt) {
  //     articleTitles[index].classList.add('active--slide');
  //   } else {
  //     articleTitles[index].classList.remove('active--slide');
  //   }
  // })
// }
*/

