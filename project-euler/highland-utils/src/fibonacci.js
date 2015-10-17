export default () => {
    let a = 1, b = 1
    return (push, next) => {
        push(null, a)
        b = a + b;
        a = b - a;
        next()
    }
};
