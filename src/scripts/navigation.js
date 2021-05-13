const body = document.querySelector('body');
const articles = document.querySelectorAll('.article');
const linksName = body.querySelectorAll('[name]');
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

