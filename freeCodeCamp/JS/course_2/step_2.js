// Шаг 2
// Теперь учителю нужна ваша помощь в преобразовании оценки студента в буквенный формат.

// Завершите функцию getGrade, которая принимает числовую оценку в качестве параметра.
// Ваша функция должна возвращать строку, представляющую буквенную оценку на основе числового балла.

// Вот соответствие оценок и буквенных градаций:
// Диапазон оценок  | Буквенная оценка
// 100              | "A++"
// 90 - 99          | "A"
// 80 - 89          | "B"
// 70 - 79          | "C"
// 60 - 69          | "D"
// 0 - 59           | "F"

// Подсказки:
// - Помните, что вы изучали условные конструкции (if, else if и else).
// - Помните, что вы изучали операторы сравнения (>, <, >=, <=, ===).


function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}

function getGrade(score) {
    if (score === 100) return 'A++'
    if ((90 <= score) && (score <= 99)) return 'A'
    if ((80 <= score) && (score <= 89)) return 'B'
    if ((70 <= score) && (score <= 79)) return 'C'
    if ((60 <= score) && (score <= 69)) return 'D'
    if ((0 <= score) && (score <= 59)) return 'F'
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));