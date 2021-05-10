const body = document.querySelector('body');
const articles = document.querySelectorAll('.article');
const linksName = body.querySelectorAll('[name]');

const articlesArr = [...articles];


function navTabs() {
  const scrollPositionY = window.pageYOffset;
  const articleMatch = articlesArr.filter(article => {
    const articleTop = article.offsetTop - article.offsetHeight/2;
    const articleBottom = article.offsetTop + article.offsetHeight/2;

    if(scrollPositionY >= articleTop && scrollPositionY <= articleBottom) {
        return true;
    }
  });

  linksName.forEach(link => {
    if(scrollPositionY + window.innerHeight > body.offsetHeight - 50 && link.name === 'contact') {
      return link.classList.add('navigation--tabs');
    } else if(articleMatch.length && articleMatch[0].id === link.name) {
      return link.classList.add('navigation--tabs');
    } else {
      return link.classList.remove('navigation--tabs');
    }
  });
}

const pageScroll = () => {
  navTabs();
}

window.addEventListener('scroll', pageScroll);

