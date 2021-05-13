const cards = document.querySelectorAll(".education__content__card");
const articles = document.querySelectorAll(".article");

export const scrollDisplayCard = (scrollPositionY) => {
  cards.forEach((card) => {
    const displayInAt =
      scrollPositionY + window.innerHeight - card.clientHeight;

    if (displayInAt > card.offsetTop) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });
}

export const slideArticleTitles = (scrollPositionY) => {
  articles.forEach((article) => {
    const slideInAt = article.offsetTop - article.clientHeight / 1.2;
    const articleBottom = article.offsetTop + article.clientHeight;

    if (scrollPositionY > slideInAt) {
      article["childNodes"][1].classList.add("active--slide");
    } else {
      article["childNodes"][1].classList.remove("active--slide");
    }
  });
}
