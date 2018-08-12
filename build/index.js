var interval = 100;
var end = false;
var handle = $(".ui-slider-tooltip");
var green = $(".ui-slider-range");
let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

function rollResolved(number) {
  end = true;
  $('.roll_btn').text(number);
  $('.roll_btn').addClass('animate_btn')
  setTimeout(function() {
    $('.roll_btn').text("Roll Dice");
    $('.roll_btn').removeClass('animate_btn');
  }, 5000);
}

function generate_seed() {
  let string = "";
  for (let i = 0; i < 40; i++) {
    string = string + chars.charAt(Math.random() * 40 + 1);
  }
  return string;
}

function copy() {
  document.getElementById('referral-name').select()
  document.execCommand("copy");
}

function rollProcessing() {
  if(!end) {
    $('.roll_btn').text((Math.random() * 94 + 2).toFixed());
    setTimeout( rollProcessing, interval );
  } else {
    $('.roll_btn').removeAttr('disabled');
  }
}

function winBet(amount) {
  $('.betBalance').text(amount);
  $('.betBalance').addClass('winBalance');
  setTimeout( function() {
    $('.betBalance').removeClass('winBalance');
  }, 1000 );
}

function winEOS(amount) {
  $('.eosBalance').text(amount);
  $('.eosBalance').addClass('winBalance');
  setTimeout( function() {
    $('.eosBalance').removeClass('winBalance');
  }, 1000 );
}

function lossEOS(amount) {
  $('.eosBalance').text(amount);
  $('.eosBalance').addClass('lossBalance');
  setTimeout( function() {
    $('.eosBalance').removeClass('lossBalance');
  }, 1000 );
}

$("#slider").slider({
  value: 50,
  max: 103,
  min: -3,
  step: 1,
  slide: function (event, ui) {
    if(ui.value < 2 || ui.value > 96) {
      return false;
    }
    handle.text(ui.value);
    green.css('right', 97 - (ui.value / 106 * 100) + '%');
  }
});

$('.fairness-seed').html(generate_seed());
$('.referral-btn').on('click', copy);
$('.roll_btn').on('click', function() {
  end = false;
  $('.roll_btn').attr('disabled', 'true');
  setTimeout( rollProcessing, interval );
  // Demo code
  setTimeout( function() {rollResolved(7)}, 2500 );
  // /Demo code
});

// Demo code
setTimeout(function() {
  $('.alert').removeClass('hide');
  $('.alert').addClass('show');
  lossEOS('-0.0001');
  winBet('0.0001');
}, 5000);
// /Demo code