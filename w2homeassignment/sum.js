function calculateSum() {
    var user = prompt("Enter a number:");
    var n = parseInt(user);

    if (!isNaN(n)) {
        var sum = 0;
        for (var i = 1; i <= n; i++) {
            sum += i;
        }
        return sum;
    } else {
        return "please enter valid number ";
    }
}

var result = calculateSum();
console.log(result);
