const filterButtons = document.querySelectorAll('[data-filter="controls"] button');
const filterCards = document.querySelectorAll('[data-filter="parent"] .article-card');


const initArticlesFilter = () => {

  const getFilter = (button, items) => {
    items.forEach((item) => {
      const curretCategory = button.dataset.filter;
      const isItemFiltered = item.dataset.filter;

      if (curretCategory === 'all') {
        item.classList.remove('is-hidden');
      } else if (curretCategory !== isItemFiltered) {
        item.classList.add('is-hidden');
      } else {
        item.classList.remove('is-hidden');
      }
    });
  };

  if (filterButtons) {
    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        let array = Array.from(filterButtons);
        let index = array.indexOf(button);

        array.forEach((item, i) => {
          if (i === index) {
            item.classList.add('is-active');
          } else {
            item.classList.remove('is-active');
          }
        });

        if (filterCards) {
          getFilter(button, filterCards);
        }
      });
    });
  }
};

export {initArticlesFilter};
