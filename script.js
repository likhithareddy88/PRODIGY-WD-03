stopwatch.js


class Stopwatch {
  constructor(element) {
    this.element = element;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.interval = null;
    this.isRunning = false;
  }

  start() {
    if (!this.isRunning) {
      this.interval = setInterval(() => {
        this.seconds++;
        if (this.seconds >= 60) {
          this.minutes++;
          this.seconds = 0;
        }
        if (this.minutes >= 60) {
          this.hours++;
          this.minutes = 0;
        }
        this.updateTimer();
      }, 1000);
      this.isRunning = true;
    }
  }

  stop() {
    if (this.isRunning) {
      clearInterval(this.interval);
      this.isRunning = false;
    }
  }

  reset() {
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.updateTimer();
  }

  updateTimer() {
    const timerElement = this.element.querySelector('.stopwatch-timer');
    timerElement.innerHTML = `${this.pad(this.hours)}:${this.pad(this.minutes)}:${this.pad(this.seconds)}`;
  }

  pad(number) {
    return (number < 10 ? '0' : '') + number;
  }
}

const stopwatchElement = document.querySelector('.stopwatch');
const stopwatch = new Stopwatch(stopwatchElement);
document.querySelector('.stopwatch-button.start').addEventListener('click', () => {
    stopwatch.start();
  });
  
  document.querySelector('.stopwatch-button.stop').addEventListener('click', () => {
    stopwatch.stop();
  });
  
  document.querySelector('.stopwatch-button.reset').addEventListener('click', () => {
    stopwatch.reset();
  });
  
  
  