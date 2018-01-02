var clock = {
  getTimeArray: function() {
    var date = new Date();
    return [
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds()];
  },

  onTick: function() {
    setInterval(function() { observable.update(clock.getTimeArray()); }, 1000);
  },
};

var observable = {
  update: function(time) {
    digitalClock.init(time);
  },
};

var digitalClock = {

  digits: [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'],

  init: function(time) {
    this.drawDigits(document.getElementsByClassName('hour'), time[0]);
    this.drawDigits(document.getElementsByClassName('minute'), time[1]);
    this.drawDigits(document.getElementsByClassName('second'), time[2]);
  },

  drawDigits: function(element, digit) {
    var ten = Math.floor(digit / 10);
    var one = Math.floor(digit % 10);

    element[0].innerHTML = '<span class="digit ' + this.digits[ten] +
        '"></span><span class="digit ' + this.digits[one] + '"></span>';
  },
};

clock.onTick();