/*
//This variable keeps track of whose turn it is.
let activeplayer = 'X';
//This array stores an array of moves, We use this to determine win conditions.
let selectedSquares = [];
//This function is for placing an x or o in a square.
function placeXOrO(squareNumber) {
    //This condition ensures a square hasn't been selected already.
    //The ,some()method is used to check each element of the selectsquare array.
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrieves the HTMl element id that was clicked.
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is.
        if (activeplayer === 'X') {
            //If activeplayer is equal to 'x', the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/x.png")';
            //Active player may only be 'X'or 'o'so, if not 'x" it nust be 'o'
        } else {
            //If activePlayer is equal to 'o', the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/o.png")';
        }

        //squareNumber and activeplayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activeplayer);
        //This calls a function to check for any win conditions.
        checkWinConditions();
        //This condition is for changing the active player.

        if (activeplayer === 'X') {
            //If active player is 'x" change it to 'o'.
            activeplayer = 'O';
            //if active player is anything other than "X'
        } else {
            //change the 
            activeplayer = 'X';
        }
        //This function plays placement sound.
        audio('./media/place.mp3');
        //This condition checks to see if it is the conputers turn.
        if (activeplayer === 'O') {
            //This function disables clicking for computers turn.
            disableclick();
            //This function waits 1 second bofore the computer placas an image and onables click.
            setTimeout(function () {
                computersTurn();
                enableClick();
            }, 1000);
        }
        //Returning true is needed for our conputersTurn() function to work.
        return true;
    }
}
    //This function resuLts in a random sqaure being selected by the computer.
    function computersTurn() {
        //This boolean is needed for our while loop.
        let success = false;
        //This variable stores a random number 0-8.
        let pickAsquare;
        //This condition allows our while loop to keep trying if a square is selected already.
        while (!success) {
            //A random number between 0 and 8 is selected.
            pickAsquare = String(Math.floor(Math.random() * 9));
            //If the random nunber evaluated returns true, the square hasn't been selected yet.
            if (placeXOrO(pickAsquare)) {
                //This line calls the function.
                placeXOrO(pickAsquare);
                //This changes our boolean and ends the loop.
                success = true;
            };
        }
    }


function checkWinConditions() {
    //X8,1,2 condition.
    if (arrayIncludes('0x', '1x', '2x')) { drawWinLine(50, 100, 558, 100) }
    //x3,4，5 condition.
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    //X6,7,8 condition.
    else if (arrayIncludes('6X', '7%', '8X')) { drawWinLine(50, 508, 558, 508) }
    //X8,3,6 condition.
    else if (arrayIncludes('0X', '3x', '6X')) { drawWinLine(100, 50, 100, 558) }
    //x1,4,7 condition.
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    //X2,5,8 condition.
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    //x6,4,2 condition.
    else if (arrayIncludes('6X', '4x', '2x')) { drawWinLine(100, 508, 510, 90) }
    //X0,4,8 condition.
    else if (arrayIncludes('0x', '4x', '8x')) { drawWinLine(100, 180, 520, 520) }
    //O 0，1,2 condition.
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    //O3，4，5 condition.
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    //O6，7,8 condition.
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    //O0，3，6 condition.
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    //O1,4,7 condition.
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    //O2，5，8 condition.
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    //O6,4,2 condition.
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    //O0,4,8 condition.
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }

    //This condition checks for a tie, If none of the above conditions are met and
    //9 squares are selected the code executes.
    else if (selectedSquares.length >= 9) {
        //This function plays the tie game sound.
        audio('./media/tie.mp3');
        //This function sets a .3 second timer before the resetGame is called.
        setTimeout(function () { resetGame(); }, 500);
    }
}
    //This function checks if an array includes 3 strings. It is used to check
    //for each win condition,
    function arrayIncludes(squareA, squareB, squareC) {
        //These 3 variables will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //if the 3 variables will we pass are all incluede in our array then
        //true is returned and our else if condition executes the drawLine()function.
        if (a === true && b === true && c === true) { return true; }
    }

//This function makes our body element temporarily unclickable.
function disableclick(){
    //This makes our body unclickable.
    body.style.pointerEvents ='none';
    //This makes our body clickable again after 1 second.
    setTimeout(function() {body.style.pointerEvents ='auto';},1000);
}
    //This function takes a string parameter of the path you set earlier for
    //placement sound("./media/place.mp3')
function audio(audioURL){
    //We create a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    //Play method plays our audio sound.
    audio.play();
}

//Function to draw the lineacrosswinningcoordinates
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1;
    y1 = coordY1;
    x2 = coordX2;
    y2 = coordY2;
    x = x1;
    y = y1;
    
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70,255,33,.8)';
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
       
        }
    }
    
    //clears the board after the n=animation
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    disableclick();
    audio('./media/winGame.mp3');
    animateLineDrawing();
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//disable click during the compputer's turn



   /* function disableclick() {
        // This variable stores all the squares.
        let squares = document.getElementsByClassName('square');

        // This loop disables all squares.
        for (let i = 0; i < squares.length; i++) {
            squares[i].style.pointerEvents = 'none';
        }
    }

    // This function enables clicking for the player's turn.
    function enableClick() {
        // This variable stores all the squares.
        let squares = document.getElementsByClassName('square');

        // This loop enables all squares.
        for (let i = 0; i < squares.length; i++) {
            squares[i].style.pointerEvents = 'auto';
        }
    }

    // This function plays placement sound.
    function audio(soundfile) {
        // This variable creates a new audio object.
        let audioElement = new Audio(soundfile);

        // This line plays the sound.
        audioElement.play();
    }

    // This function checks for any win conditions.
    function checkWinConditions() {
        // This variable stores all the squares.
        let squares = document.getElementsByClassName('square');

        // Winning conditions for horizontal wins.
        if (
            selectedSquares.includes('0X') &&
            selectedSquares.includes('1X') &&
            selectedSquares.includes('2X')
        ) {
            // This function displays a message for the winner.
            showMessage('Player X wins!');
        } else if (
            selectedSquares.includes('3X') &&
            selectedSquares.includes('4X') &&
            selectedSquares.includes('5X')
        ) {
            // This function displays a message for the winner.
            showMessage('Player X wins!');
        } else if (
            selectedSquares.includes('6X') &&
            selectedSquares.includes('7X') &&
            selectedSquares.includes('8X')
        ) {
            // This function displays a message for the winner.
            showMessage('Player X wins!');
        }

        // Winning conditions for vertical wins.
        else if (
            selectedSquares.includes('0X') &&
            selectedSquares.includes('3X') &&
            selectedSquares.includes('6X')
        ) {
            // This function displays a message for the winner.
            showMessage('Player X wins!');
        } else if (
            selectedSquares.includes('1X') &&
            selectedSquares.includes('4X') &&
            selectedSquares.includes('7X')
        ) {
            // This function displays a message for the winner.
            showMessage('Player X wins!');
        } else if (
            selectedSquares.includes('2X') &&
            selectedSquares.includes('5X') &&
            selectedSquares.includes('8X')
        ) {
            // This function displays a message for the winner.
            showMessage('Player X wins!');
        }

        // Winning conditions for diagonal wins.
        else if (
            selectedSquares.includes('0X') &&
            selectedSquares.includes('4X') &&
            selectedSquares.includes('8X')
        ) {
            // This function displays a message for the winner.
            showMessage('Player X wins!');
        } else if (
            selectedSquares.includes('2X') &&
            selectedSquares.includes('4X') &&
            selectedSquares.includes('6X')
        ) {
            // This function displays a message for the winner.
            showMessage('Player X wins!');
        }

        // Winning conditions for horizontal wins.
        else if (
            selectedSquares.includes('0O') &&
            selectedSquares.includes('1O') &&
            selectedSquares.includes('2O')
        ) {
            // This function displays a message for the winner.
            showMessage('Player O wins!');
        } else if (
            selectedSquares.includes('3O') &&
            selectedSquares.includes('4O') &&
            selectedSquares.includes('5O')
        ) {
            // This function displays a message for the winner.
            showMessage('Player O wins!');
        } else if (
            selectedSquares.includes('6O') &&
            selectedSquares.includes('7O') &&
            selectedSquares.includes('8O')
        ) {
            // This function displays a message for the winner.
            showMessage('Player O wins!');
        }

        // Winning conditions for vertical wins.
        else if (
            selectedSquares.includes('0O') &&
            selectedSquares.includes('3O') &&
            selectedSquares.includes('6O')
        ) {
            // This function displays a message for the winner.
            showMessage('Player O wins!');
        } else if (
            selectedSquares.includes('1O') &&
            selectedSquares.includes('4O') &&
            selectedSquares.includes('7O')
        ) {
            // This function displays a message for the winner.
            showMessage('Player O wins!');
        } else if (
            selectedSquares.includes('2O') &&
            selectedSquares.includes('5O') &&
            selectedSquares.includes('8O')
        ) {
            // This function displays a message for the winner.
            showMessage('Player O wins!');
        }

        // Winning conditions for diagonal wins.
        else if (
            selectedSquares.includes('0O') &&
            selectedSquares.includes('4O') &&
            selectedSquares.includes('8O')
        ) {
            // This function displays a message for the winner.
            showMessage('Player O wins!');
        } else if (
            selectedSquares.includes('2O') &&
            selectedSquares.includes('4O') &&
            selectedSquares.includes('6O')
        ) {
            // This function displays a message for the winner.
            showMessage('Player O wins!');
        }

        // This condition checks for a tie.
        else if (selectedSquares.length >= 9) {
            // This function displays a message for a tie.
            showMessage('It\'s a tie!');
        }
    }

    // This function displays a message for the winner.
    function showMessage(message) {
        // This variable stores the message element.
        let messageElement = document.getElementById('message');

        // This line changes the innerHTML of the message element.
        messageElement.innerHTML = message;
    }*/
//This function parses the selectedsquares array to search for win conditions.
//drawLine()function is called to draw a line on the screen if the condition is met.

let board = Array(9).fill(null); // 游戏板
let currentPlayer = 'X'; // 当前玩家
let isGameActive = true; // 游戏是否进行中

// 检查获胜的组合
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// 加载音频和图片文件
let placeSound = new Audio('media/place.mp3');
let tieSound = new Audio('media/tie.mp3');
let winSound = new Audio('media/winGame.mp3');
let xImage = new Image();
xImage.src = 'images/x.png';
let oImage = new Image();
oImage.src = 'images/o.png';

function placeXOrO(cellNumber) {
    if (!isGameActive || board[cellNumber] !== null) {
        return;
    }

    board[cellNumber] = currentPlayer;
    document.getElementById(cellNumber).style.backgroundImage = `url(images/${currentPlayer}.png)`;
    placeSound.play();

    // 检查游戏是否结束
    if (checkWin()) {
        isGameActive = false;
        winSound.play();
        alert(`Player ${currentPlayer} has won!`);
        return;
    }

    if (checkDraw()) {
        isGameActive = false;
        tieSound.play();
        alert('The game is a draw!');
        return;
    }

    // 切换玩家
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

    // 如果是电脑的回合
    if (currentPlayer === 'O') {
        let availableCells = board.reduce((acc, val, idx) => val === null ? acc.concat(idx) : acc, []);
        let computerCell = availableCells[Math.floor(Math.random() * availableCells.length)];
        setTimeout(() => placeXOrO(computerCell), 500); // 延迟半秒让电脑下棋
    }
}

function checkWin() {
    for (let combination of winningCombinations) {
        if (
            board[combination[0]] !== null &&
            board[combination[0]] === board[combination[1]] &&
            board[combination[0]] === board[combination[2]]
        ) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return board.every(cell => cell !== null);
}
