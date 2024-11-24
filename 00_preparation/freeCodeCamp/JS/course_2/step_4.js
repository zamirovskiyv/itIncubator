// Шаг 4
// Теперь, когда учитель получил всю необходимую информацию, он хочет иметь возможность отправить студенту сообщение с результатами.

// Завершите функцию studentMsg, которая принимает два параметра: totalScores (общий массив оценок) и studentScore (оценка конкретного студента).
// Функция должна возвращать строку, представляющую сообщение для студента.

// Если студент прошел курс, строка должна быть в таком формате:
// Пример:
// Средний балл по классу: average-goes-here. Ваша оценка: grade-goes-here. Вы прошли курс.

// Если студент не прошел курс, строка должна быть в таком формате:
// Пример:
// Средний балл по классу: average-goes-here. Ваша оценка: grade-goes-here. Вы не прошли курс.

// Замените average-goes-here на средний балл по классу.
// Замените grade-goes-here на оценку студента (буквенную).

// Подсказки:
// - Используйте функцию getAverage для расчета среднего балла по классу.
// - Используйте функцию getGrade для получения буквенной оценки студента.
// - Используйте конкатенацию строк (+), чтобы составить сообщение.
// - Будьте внимательны с пунктуацией и пробелами в сообщении.

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
    return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
    let tS = getAverage(totalScores)
    let sS = getGrade(studentScore)

    if (hasPassingGrade(studentScore)) {
        return `Class average: ${tS.toFixed(1)}. Your grade: ${sS}. You passed the course.`;
    } else {
        return `Class average: ${tS.toFixed(1)}. Your grade: ${sS}. You failed the course.`;
    }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100))
