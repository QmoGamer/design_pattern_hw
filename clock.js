export class clock {

  constructor() {
    setInterval(() => {
      console.log(this.getTimeArray());
    }, 1000);
  }

  getTimeArray(() => {
    const date = new Date();
    return [date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()];
  });
}

let clock = new clock();