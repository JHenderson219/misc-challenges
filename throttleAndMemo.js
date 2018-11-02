/*
  Throttle and Memo
  Implement Throttle and Memo as classes

  Throttle

*/

class Suggestions {
  /*
    Does not matter what this does
  */
}
class ViewController {
  /*
    Does not matter what this does
  */
  static userInput() {
    let counter = 0;
    let interval = setInterval(() => {
      counter++;
      console.log('user inputs:', Math.floor(Math.random()*10));
    }, 1000)
    if (counter > 10) {
      clearInterval(interval);
    }
  }
}

class Throttle {
  static debounce(delay, callback, ...args) {
    let inDebounce;
    return (args) => {
      clearTimeout(inDebounce);
      inDebounce = setTimeout(() => {callback(args)});
    }
  }
  static throttle(callback) {

  }
}
console.log('test');
Throttle.debounce(5000, ViewController.userInput)


// ViewController will recieve input from user via typing
// ViewController will throttle the input, then send autocomplete suggestions to the user
// ViewController will ask Suggestions to make requests to the hypothetical back-end to get new autocomplete suggestions