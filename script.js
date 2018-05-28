//Calculator by Jimmy 05.05.2018

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function operate(operator, a, b) {

  switch (operator) {

    case "plus":
      return add(a,b);
      break;

    case "sub":
      return sub(a,b);
      break;

    case "mul":
      return mul(a,b);
      break;

    case "div":
      return div(a,b);
      break;

    default:
      console.log("Not an operator!");
  }
}

function clear() {
    let clear = document.getElementById('clear');
    clear.addEventListener('click', (e) => {
      dispValue.length = 0;
      disB.textContent = '';
      num.length = 0;
      console.log('clear!');
    });
}


let disB = document.getElementById('displayBig');
let dispValue = [];

function populate() { //Get button input value
  let grid = document.querySelectorAll('button.number','button.operator');


  grid.forEach((key) => {
    key.addEventListener('click', (e) => {
    console.log(key.value);

    if(dispValue.length < 10){
      disB.textContent = '';
      dispValue.push(key.value);
      disB.textContent += key.value;
    }
    });
  });
}

let num = [];

function calculate(value){

  let operator = document.querySelectorAll('.operator');
  let enter = document.getElementById('enter');

  operator.forEach((key) => {
    key.addEventListener('click', (e) => {

      let dispValue1 = dispValue.join('');

      num.push(dispValue1);
      num.push(key.value);
      dispValue.length = 0;

      if(num.length >= 3){
        let a = parseInt(num[0]);
        let b = parseInt(num[2]);
        let c = num[1];
        num.length = 0;
        dispValue.push(operate(c, a, b));
        console.log(a + ' ' + b + ' '+ c + ' ');

        disB.textContent = dispValue[0];

      }

      enter.addEventListener('click', (e) => {
            let a = parseInt(num[0]);
            let c = num[1];
            console.log('a = '+ a +' c = ' + c + ' num = '+num);
            num.length = 0;
            num.push(operate(c, a, dispValue[0]));
          //dispValue = dispValue.push(operate(c, a, dispValue[0]));

            disB.textContent = num[0];

      });
  });
});
}

let x = populate();
clear();
calculate(x);
