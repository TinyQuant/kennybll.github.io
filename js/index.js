$(function () {
  var handle = $(".ui-slider-tooltip");
  var green = $(".ui-slider-range");
  let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  $("#slider").slider({
    value: 50,
    max: 96,
    min: 2,
    step: 1,
    slide: function (event, ui) {
      handle.text(ui.value);
      green.css('width', ui.value * 100 / 94 + '%');
    }
  });
  function generate_seed() {
    let string = "";
    for (let i = 0; i < 40; i++) {
      string = string + chars.charAt(Math.random() * 40 + 1);
    }
    return string;
  }
  $('.fairness-seed').html(generate_seed());
  function copy() {
    document.getElementById('referral-name').select()
    document.execCommand("copy");
  }
  $('.referral-btn').on('click', copy);
  setTimeout(function() {
    $('.alert').removeClass('hide');
    $('.alert').addClass('show');
  }, 5000);
});