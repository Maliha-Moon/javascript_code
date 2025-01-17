/*
* access element
*/

let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('.reset');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

/*
* Player Turn
*/
let turnO = true; //playerX, playerO
let count = 0;

/*
* Pattern
*/
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

/*
* Reset Game
*/

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add('hide');
};


/*
* Clickable
*/
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('box was clicked');
        if (turnO) {
            // playerO
            box.innerText = 'O';
            turnO = false;
        } else {
            // playerX
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;
        count++;
        let isWinner = checkWinner();

        if (count == 9 && !isWinner) {
            gameDraw();
        }
        // checkWinner();
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a draw`;
    msgContainer.classList.remove('hide');
    disableBoxes();
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

/*
* Show winner
*/

const gameWinner = (winner) => {
    msg.innerText = `Congratulations🎉, Winner is ${winner}`
    msgContainer.classList.remove('hide');
    disableBoxes();
};

/*
* Winning Condition
*/

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 != '' && pos2 != '' && pos3 != '') {
            if (pos1 == pos2 && pos2 == pos3) {
                gameWinner(pos1);
            }
        }
    }
}

newGameBtn.addEventListener('click', resetGame);
resetbtn.addEventListener('click', resetGame);
