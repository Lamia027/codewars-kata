// https://www.codewars.com/kata/552c028c030765286c00007d

function iqTest(numbers){
    let arr = numbers.split(' ');
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] % 2 === 0 ? 1 : 0;
        sum = sum + arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
        if ((sum === 1 && arr[i] === 1)
            || (sum > 1 && arr[i] === 0)) {
            return i + 1;
        }
    }
}