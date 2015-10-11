export var fibonacciGenerator = function() {
    let a = 1, b = 2
    return (push, next) => {
        push(null, a)
        b = a + b;
        a = b - a;
        next()
    }
};
