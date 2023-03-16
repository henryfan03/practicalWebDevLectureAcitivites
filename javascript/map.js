function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return mapped;
}

//let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
//console.log(map(rtlScripts, s => s.name));


// → ["Adlam", "Arabic", "Imperial Aramaic", …]

const array1 = [1,4,9,16];

// pass a function 
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: array [2, 8, 18, 32]