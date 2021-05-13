import { navTabs } from './navigation';
import { scrollDisplayCard, slideArticleTitles } from './contentAnimation';

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

const pageScroll = () => {
  const windowScroll = window.scrollY;
  navTabs(windowScroll);
  scrollDisplayCard(windowScroll);
  slideArticleTitles(windowScroll);
}

window.addEventListener('scroll', debounce(pageScroll));


