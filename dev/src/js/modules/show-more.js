$(".rating__content").each(function () {
  let moreBtn = $(this).find(".rating__more-button");
  let hiddenItems = $(this).find(".product-item_hidden");
  let hiddenItemsAlso = $(this).find(".product-item_hidden-1024");
  hiddenItems.hide();
  moreBtn.click(function () {
    hiddenItems.slideToggle();
    moreBtn.text(moreBtn.text() == "Скрыть" ? "Смотреть больше товаров" : "Скрыть");
  });
  if ($(window).width() < 1153) {
    hiddenItemsAlso.hide();
    moreBtn.click(function () {
      hiddenItemsAlso.slideToggle();
    });
  }
});

