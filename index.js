var clock = {

  digits : ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],

  init : function(){
    this.hour = document.getElementsByClassName('hour');
    this.minute = document.getElementsByClassName('minute');
    this.second = document.getElementsByClassName('second');

    this.drawInterval(this.drawSecond, function(time){
      return 1000 - time[3];
    })

    this.drawInterval(this.drawMinute, function(time){
      return 60000 - time[2] * 1000 - time[3];
    })


    this.drawInterval(this.drawHour, function(time){
      return (60 - time[1]) * 60000 - time[2] * 1000 - time[3];
    })
  },

  getTimeArray : function(){
    var dat = new Date();
    return [dat.getHours(), dat.getMinutes(), dat.getSeconds(), dat.getMilliseconds()];
  },

  drawInterval : function(func, timeCallback){
    var time = this.getTimeArray();

    func.call(this, time);

    var that = this;
    setTimeout(function(){
      that.drawInterval(func, timeCallback);
    }, timeCallback(time));
  },

  drawHour : function(time){
    this.drawDigits(this.hour, time[0]);
  },

  drawMinute : function(time){
    this.drawDigits(this.minute,  time[1]);
  },

  drawSecond : function(time){
    this.drawDigits(this.second,  time[2]);
  },

  drawDigits : function(element, digit){
    var ten = Math.floor(digit / 10);
    var one = Math.floor(digit % 10);

    element[0].innerHTML = '<span class="digit ' + this.digits[ten] + '"></span><span class="digit ' + this.digits[one] + '"></span>';
  }
};

clock.init();