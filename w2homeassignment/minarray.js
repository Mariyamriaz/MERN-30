function findMinNumber(arr) {
    if (arr.length === 0) {
        return "Array is empty.";
    }

    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}
var num = [12,22,10,5,6,10,2];
var minNum = findMinNumber(num);
console.log("The minimum number is: " + minNum);
