// This series of katas will introduce you to basics of doing geometry with computers.
//
// Write the function circleArea/CircleArea which takes in a Circle object and calculates the area of that circle.
// The Circle class can be seen below:
//
// Represents a Circle where center is a Point and radius is a Number
//     class Circle {
//         constructor(center, radius) {
//             this.center = center;
//             this.radius = radius;
//         }
//     }
// And the Point class can be seen below:
//
// Represents a Point where x and y are Numbers
//     class Point {
//         constructor (x,y) {
//             this.x = x;
//             this.y = y;
//         }
//     }

// Класс точки (Point)
class Point {
    constructor(x, y) {
        this.x = x;  // Координата x
        this.y = y;  // Координата y
    }
}

// Класс круга (Circle)
class Circle {
    constructor(center, radius) {
        this.center = center;  // Центр круга - объект Point
        this.radius = radius;  // Радиус круга
    }
}

// Функция для вычисления площади круга
function circleArea(circle) {
    return Math.PI * Math.pow(circle.radius, 2); // Используем формулу S = πr²
}

// Пример использования:
let center = new Point(0, 0);  // Центр круга с координатами (0, 0)
let circle = new Circle(center, 5);  // Создаём круг с радиусом 5
console.log(circleArea(circle));
