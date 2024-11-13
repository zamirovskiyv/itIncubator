// Шаг 1
// Учитель закончил проверку тестов своих студентов и просит вас помочь рассчитать средний балл для класса.
// Завершите функцию getAverage, которая принимает массив оценок тестов и возвращает средний балл.
// Средний балл рассчитывается путем сложения всех оценок и деления на общее количество оценок.

// Пример кода:
// average = сумма всех оценок / общее количество оценок
// Несколько вызовов функции уже предоставлены, чтобы вы могли протестировать свой код.

// Подсказки:
// - Вы можете использовать цикл, чтобы пройтись по массиву оценок и сложить все баллы.
// - Вы можете использовать свойство length, чтобы узнать общее количество оценок.

function getAverage(scores) {
    let scoresLength = scores.reduce((a, b) => a + b);
    let len = scores.length
    return scoresLength / len;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));