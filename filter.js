function filter(array, test) {
    let passed = [];
    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

//console.log(filter(SCRIPTS, script => script.living));
// → [{name: "Adlam", …}, …]

const words = ['spray','limit','elite','exuberant','destruction','present'];

console.log(filter(words, word => word.length > 6));