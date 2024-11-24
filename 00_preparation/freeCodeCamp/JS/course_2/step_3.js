// Шаг 3
// Учитель очень доволен программой, которую вы создали.
// Но теперь он хочет иметь простой способ проверить, прошел ли студент зачет.
// Зачетной считается любая оценка, кроме "F".

// Завершите функцию hasPassingGrade, которая принимает числовую оценку студента в качестве параметра.
// Ваша функция должна возвращать true, если студент прошел зачет, и false, если не прошел.

// Подсказки:
// - Используйте функцию getGrade, чтобы получить буквенную оценку студента.
// Затем проверьте, является ли эта оценка зачетной.

function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}

function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function hasPassingGrade(score) {
    return  getGrade(score)!=='F'
}


console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));