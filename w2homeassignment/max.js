function findMaxNumber(arr) {
    if (arr.length === 0) {
        return "Array is empty.";
    }

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}
var numbers = [50 , 100, 200,240, 554,343,109,387,12];
var maxNumber = findMaxNumber(numbers);
console.log("The maximum number is: " + maxNumber);
