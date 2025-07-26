const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const box = 20;
const canvasSize = 400;
let snake = [ { x: 9 * box, y: 10 * box } ];
let direction = null;
let food = randomPosition();
let score = 0;

function randomPosition() {
    return {
        x: Math.floor(Math.random() * (canvasSize / box)) * box,
        y: Math.floor(Math.random() * (canvasSize / box)) * box
    };
}

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' && direction !== 'RIGHT') direction = 'LEFT';
    if (event.key === 'ArrowUp' && direction !== 'DOWN') direction = 'UP';
    if (event.key === 'ArrowRight' && direction !== 'LEFT') direction = 'RIGHT';
    if (event.key === 'ArrowDown' && direction !== 'UP') direction = 'DOWN';
});

function draw() {
    ctx.fillStyle = '#111';
    ctx.fillRect(0, 0, canvasSize, canvasSize);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = i === 0 ? '#0f0' : '#fff';
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }

    ctx.fillStyle = '#f00';
    ctx.fillRect(food.x, food.y, box, box);

    document.getElementById('score').innerText = 'Score: ' + score;

    let headX = snake[0].x;
    let headY = snake[0].y;

    if (direction === 'LEFT') headX -= box;
    if (direction === 'RIGHT') headX += box;
    if (direction === 'UP') headY -= box;
    if (direction === 'DOWN') headY += box;

    // Game over conditions
    if (
        headX < 0 || headX >= canvasSize ||
        headY < 0 || headY >= canvasSize ||
        snake.some((segment, idx) => idx !== 0 && segment.x === headX && segment.y === headY)
    ) {
        clearInterval(game);
        ctx.fillStyle = '#ff0';
        ctx.font = '40px Arial';
        ctx.fillText('GAME OVER', 60, 200);
        return;
    }

    let newHead = { x: headX, y: headY };
    snake.unshift(newHead);

    if (headX === food.x && headY === food.y) {
        score++;
        food = randomPosition();
    } else {
        snake.pop();
    }
}

let game = setInterval(draw, 100);
