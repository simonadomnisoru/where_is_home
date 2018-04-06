let Validation = (function () {
    const validValues = [/\byes\b/, /\bno\b/, /^[+-]?\d+(\.\d+)?$/];

    return function(value) {
        return validValues.some((rx) => rx.test(value.toLowerCase()));
    };
})();

export default Validation;