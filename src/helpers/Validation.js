var Validation = (function () {
    const validValues = [/\byes\b/, /\no\b/, /^[+-]?\d+(\.\d+)?$/];

    return function(value) {
        return validValues.some(rx => rx.test(value.toLowerCase()));
    };
})();

export default Validation;