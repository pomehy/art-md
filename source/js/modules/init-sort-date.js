const sortButton = document.querySelector('[data-sort="button"]');

const articleCards = [...document.querySelectorAll('[data-article-card="parent"]')];


function compareDateOldtoNew(a, b) {
  const dateA = new Date(a);
  const dateB = new Date(b);

  return dateA - dateB;
}

function compareDateNewtoOld(a, b) {
  const dateA = new Date(a);
  const dateB = new Date(b);

  return dateB - dateA;
}

const dateArr = [];
let sortDateArr;

const getDateArr = () => {
  if (!articleCards.length) {
    return;
  }

  articleCards.forEach((card) => {
    const date = card.querySelector('[data-article-card="date"]').dateTime.replace(/-/g, '/');
    dateArr.push(date);
  });

  sortDateArr = dateArr.sort(compareDateNewtoOld);
  console.log(sortDateArr);

  for (let i = 0; i < articleCards.length; i++) {
    const dateCard = articleCards[i].querySelector('[data-article-card="date"]').dateTime.replace(/-/g, '/');

    sortDateArr.forEach((date, index) => {
      if (date === dateCard) {
        articleCards[i].style.order = index;
      }
    });
  }
};

const sortingCard = (compare) => {
  sortDateArr = dateArr.sort(compare);

  for (let i = 0; i < articleCards.length; i++) {
    const dateCard = articleCards[i].querySelector('[data-article-card="date"]').dateTime.replace(/-/g, '/');

    sortDateArr.forEach((date, index) => {
      if (date === dateCard) {
        articleCards[i].style.order = index;
      }
    });
  }
};

const handlerSort = () => {
  if (!sortButton) {
    return;
  }

  sortButton.addEventListener('click', (evt) => {
    evt.preventDefault();

    if (sortButton.classList.contains('is-active')) {
      sortingCard(compareDateNewtoOld);
      sortButton.classList.remove('is-active');
    } else {
      sortingCard(compareDateOldtoNew);
      sortButton.classList.add('is-active');
    }
  });
};

export {
  getDateArr,
  handlerSort
};
