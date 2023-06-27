$(function () {
  $(".filter-form__slider").slider({
    range: true,
    min: 0,
    max: 250000,
    values: [2000, 150000],
    slide: function (event, ui) {
      $("#amount-from").val(ui.values[0]);
      $("#amount-to").val(ui.values[1]);
    }
  });
  $("#amount-from").val($(".filter-form__slider").slider("values", 0));
  $("#amount-to").val($(".filter-form__slider").slider("values", 1));
});

