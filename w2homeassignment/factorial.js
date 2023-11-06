function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        var result = 1;
        for (var i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }
}
var result = factorial(6); 
console.log(result); 
