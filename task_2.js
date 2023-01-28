let x;

if (typeof x === 'number' && !isNaN(x)) {
    console.log(`Тип x - ${typeof x}`);
} else if (typeof x === 'string') {
    console.log(`Тип x - ${typeof x}`);
} else if (typeof x === 'boolean') {
    console.log(`Тип x - ${typeof x}`);
} else {
    console.log('Тип x - не определен');
}