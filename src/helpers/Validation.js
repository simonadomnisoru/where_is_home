var Validation = (function () {
    const validValues = [/\byes\b/, /\no\b/, /^[+-]?\d+(\.\d+)?$/];

    return function(value) {
        value = value.toLowerCase();
        return validValues.some(rx => rx.test(value));
    };
})();

export default Validation;