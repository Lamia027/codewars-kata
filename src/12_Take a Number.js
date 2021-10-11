// https://www.codewars.com/kata/5626b561280a42ecc50000d1

function sumDigPow(a, b) {

    let arr = [];
    for(let i = a; i <= b; i++) {
        arr.push(i);
    }

    let arrNum = [];
    for(let j = 0; j <= arr.length; j++) {
        let x = sumNum(arr[j]);
        if(arr[j] === x) {
            arrNum.push(arr[j]);
        }
        else {
            continue;
        }
    }
    return arrNum;
}

function sumNum(num){
    let arr = Array.from(String(num), Number);
    let sum = 0;
    let pw = 1;
    for(let i = 0; i < arr.length; i++, pw++){
        sum += arr[i]**pw;
    }
    return sum;
}
