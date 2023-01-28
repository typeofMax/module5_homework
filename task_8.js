const someMap = new Map();

someMap.set('a', 1);
someMap.set('b', 2);
someMap.set(true, 3);
someMap.set(1, 4);
someMap.set(null, 5);
someMap.set(undefined, 6);

for (let element of someMap) {
    console.log(`Ключ - ${element[0]}, значение - ${element[1]}`);
}