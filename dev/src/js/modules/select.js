$(function () {
  $(".header-location__select").selectmenu({
    icons: {
      button: "ui-icon-location-select-arrow",
    },
    open: function () {
      const headerMenuFirst = document.querySelector('#header-first-block-select-menu');
      const headerMenuSecond = document.querySelector('#header-second-block-select-menu');

      headerMenuFirst.childNodes.forEach(item => {
        const itemWrapper = item.firstChild;
        if (itemWrapper.classList.contains('ui-state-active')) {
          item.style.display = "none";
        } else {
          item.style.display = "block";
        }
      });
      headerMenuSecond.childNodes.forEach(item => {
        const itemWrapper = item.firstChild;
        if (itemWrapper.classList.contains('ui-state-active')) {
          item.style.display = "none";
        } else {
          item.style.display = "block";
        }
      });
    }
  });
});
$(function () {
  $(".header-category").selectmenu({
    icons: {
      button: "ui-icon-category-select-arrow",
    },
    position: {
      my: "left top-5",
    },
    open: function () {
      const categoryMenu = document.querySelector('#header-category-menu');
      categoryMenu.childNodes.forEach(item => {
        const itemWrapper = item.firstChild;
        if (itemWrapper.classList.contains('ui-state-active')) {
          item.style.display = "none";
        } else {
          item.style.display = "block";
        }
      });
    }
  });
});
