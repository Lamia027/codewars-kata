// https://www.codewars.com/kata/585d7d5adb20cf33cb000235

function findUniq(arr) { 
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1] && arr[i] == arr[i + 2]) {
            continue;
        }
        else if (arr[i] != arr[i + 1] && arr[i] == arr[i + 2]) {
            return arr[i + 1];
        }
        else if (arr[i] == arr[i + 1] && arr[i] != arr[i + 2]) {
            return arr[i + 2];
        }
        else if (arr[i] != arr[i + 1] && arr[i] != arr[i + 2]) {
            return arr[i];
        }
    }
}
