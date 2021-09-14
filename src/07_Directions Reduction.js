// https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] == "NORTH" && arr[j+1] == "SOUTH") {
                arr.splice(j, 2);
            }
            else if (arr[j] == "SOUTH" && arr[j+1] == "NORTH") {
                arr.splice(j, 2);
            }
            else if (arr[j] == "EAST" && arr[j+1] == "WEST") {
                arr.splice(j, 2);
            }
            else if (arr[j] == "WEST" && arr[j+1] == "EAST") {
                arr.splice(j, 2);
            }
        }
    }
    return arr
}