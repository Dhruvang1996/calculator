let arr = process.argv.slice(2)[0];

const expression = (method, arr) => {
  switch (method) {
    case 'multiply':
      return arr.reduce((a, b) => Number(a)*Number(b),1)
    case 'add':
      return arr.reduce((a, b) => Number(a)+Number(b))
    case 'exponent':
      return Math.pow(Number(arr[0]), Number(arr[1]));
    default:
      break;
  }
};

const calculator = (arr) => {
  if( arr.split(' ').length === 1) return console.log(Number(arr));
  else {
    let startBracket = arr.lastIndexOf('(');
    let endBracket = arr.indexOf(')', startBracket);
    let strArr = arr.substring(startBracket+1, endBracket).split(' ');
    temp = expression(strArr[0], strArr.splice(1,strArr.length-1));
    arr = arr.substr(0,startBracket)+ temp + arr.substr(endBracket+1, arr.length);
    calculator(arr);
  }
};

calculator(arr);
