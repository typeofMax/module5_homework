const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let isSame = true;

for (let i = 0; i <someArray.length - 1; i++) {
    if (typeof someArray[i] !== typeof someArray[i + 1]) {
        isSame = false;
        break;
    }
}

if (!isSame) {
    console.log('Элементы не одинаковы');
} else {
    console.log('Элементы одинаковы');
}