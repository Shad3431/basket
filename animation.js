// const t = setInterval(move, 20);
// let pos = 0;
// let i = 1;


// function move() {
//     pos += 1;
//     ball.style.left = pos + 'px';
//     ball.style.right = pos + 'px';
//     if (pos === 300) {
//         clearInterval(t);
//
//     }
// // }
// function move() {
//     pos += i;
//     ball.style.right = pos + 'px';
//     ball.style.top = pos + 'px';
//     ball.style.center= pos + 'px';
//
//
//     if (pos === 300 || pos === 0) {
//         i = -i;
//
//     }
// }
const ball = document.getElementById('ball');
let angle = 0;
const bounceSound = new Audio("Sound/bounce_trimmed.mp3");

let y = 0;
let vy = 0;
let gravity = 0.5;
let bounce = 0.7;
let floor = window.innerHeight - 100;
let bouncing = false;

function fall() {
    angle += 5;
    ball.style.transform = `translateX(-50%) rotate(${angle}deg)`;
    if (!bouncing) return;

    vy += gravity;
    y += vy;

    if (y >= floor) {
        y = floor;
        bounceSound.currentTime = 0;
        bounceSound.play();


        ball.classList.add('glow');
        setTimeout(() => {
            ball.classList.remove('glow');
        }, 300);

        vy = -vy * bounce;


        if (Math.abs(vy) < 1) {
            bouncing = false;
            y = floor;
        }
    }

    ball.style.top = y + 'px';

    if (bouncing) {
        requestAnimationFrame(fall);
    }
}
document.getElementById('startBtn').addEventListener('click', () => {
    if (!bouncing) {
        bouncing = true;
        vy = 0;
        y = 0;
        glowStrength = 1;
        fall();
    }
});
//fall();