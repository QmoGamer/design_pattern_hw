var digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

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
    setInterval(function() {
      topicA.update();
      topicB.update();
    }, 1000);
  },
};

var topicA = {
  members: [],

  update: function() {
    this.members.forEach(function(member){
      member.init();
    });
  },

  createSubscriber: function(subscriber) {
    this.members.push(subscriber);
  },
};

var topicB = {
  members: [],

  update: function() {
    this.members.forEach(function(member){
      member.init();
    });
  },

  createSubscriber: function(subscriber) {
    this.members.push(subscriber);
  },
};

var digitalClock = {
  init: function() {
    var time = clock.getTimeArray();
    this.drawDigits(document.getElementsByClassName('hour'), time[0]);
    this.drawDigits(document.getElementsByClassName('minute'), time[1]);
    this.drawDigits(document.getElementsByClassName('second'), time[2]);
  },

  drawDigits: function(element, digit) {
    var ten = Math.floor(digit / 10);
    var one = Math.floor(digit % 10);

    element[0].innerHTML = '<span class="digit ' + digits[ten] +
        '"></span><span class="digit ' + digits[one] + '"></span>';
  },
};

var consoleClock = {
  init: function() {
    var time = clock.getTimeArray();
    console.log(time);
  },
}

topicA.createSubscriber(digitalClock);
topicA.createSubscriber(consoleClock);
topicB.createSubscriber(consoleClock);
clock.onTick();