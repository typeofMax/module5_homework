const value = +prompt('Введите число');
if (isNaN(value) || typeof value !== 'number') {
    console.log('Упс, кажется, вы ошиблись');
} else if (value % 2 === 0) {
    console.log('Чётное');
} else {
    console.log('Нечетное');
}
