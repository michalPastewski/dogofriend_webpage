const body = document.querySelector('body');
const articles = document.querySelectorAll('.article');
const linksName = body.querySelectorAll('[name]');

const articlesArr = [...articles];


function navTabs() {
  const scrollPositionY = window.pageYOffset;
  const articleMatch = articlesArr.filter(article => {
    const articleTop = article.offsetTop - article.offsetHeight/2;
    const articleBottom = article.offsetTop + article.offsetHeight/2;
    return scrollPositionY >= articleTop && scrollPositionY <= articleBottom;
  });

  const lastIndex = `${linksName.length - 1}`;
  if(scrollPositionY + window.innerHeight > body.offsetHeight - 50 ){
    linksName.forEach(link => link.classList.remove('navigation--tabs'));
    linksName[lastIndex].classList.add('navigation--tabs');
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

const pageScroll = () => {
  navTabs();
}

window.addEventListener('scroll', pageScroll);

