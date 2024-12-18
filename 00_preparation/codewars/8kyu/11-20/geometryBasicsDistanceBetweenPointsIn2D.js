function distanceBetweenPoints(a, b) {
    const difX = b.x - a.x;
    const difY = b.y - a.y;

    const squareX = difX * difX;
    const squareY = difY * difY;

    return Math.sqrt(squareX + squareY);
}

const a = { x: 1, y: 2 };
const b = { x: 4, y: 6 };

console.log(distanceBetweenPoints(a, b))