const array = [0, 1, 2, 3, 4, 5, 6, 0, 8, 9, 10, 0, 't', null, NaN, true];

let countOdd = 0;
let countEven = 0;
let zeroElement = 0;

array.forEach(item => {
    if (typeof item === 'number' && !isNaN(item)) {
        if (item === 0) {
            zeroElement++;
        }
        else if (item % 2 === 0) {
            countEven++;
        } else {
            countOdd++;
        }
    }
});

console.log(`Колличество четных элементов: ${countEven}`);
console.log(`Колличество нечетных элементов: ${countOdd}`);
console.log(`Колличество нулевых элементов: ${zeroElement}`);

