module.exports = function () {
    var calculator, sum;

    sum = function (a, b) {
        return a + b;
    };

    return calculator = {
        sum: sum
    };
};