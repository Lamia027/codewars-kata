// https://www.codewars.com/kata/566fc12495810954b1000030

function nbDig(n, d) {
    let arr = [];
    let str = '';
    let k = 0;
    while(k <= n) {
        arr += k**2;
        k++;
    }
    for (i=0; i<=arr.length; i++) {
        if(arr[i] == d) {
            str += arr[i];
        }
    }
    return str.length;
}
