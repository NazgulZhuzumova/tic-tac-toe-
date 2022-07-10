window.addEventListener('DOMContentLoaded',() => {
    const tiles = Array.from(document.querySelectorAll('.title'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    let = board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;


    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    function handleResultValidation(){
        let roundWon =  false;
        for (let i = 0; i <= 7; i++){
            const winConditon = winningConditions[i];
            const a = board[winConditon[0]];
            const b = board[winConditon[1]];
            const c = board[winConditon[2]];
            if(a === b && b === c){
                roundWon = true;
                break;
            }
        }
        if(roundWon){
            announce(currentPlayer ==='X'?  PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return;
        }
        if (!board.include(''))
        announce(TIE);
    }

    const announce = (type) => {
        switch(type){
            case PLAYERO_WON:
                announcer.innerHTML = 'Player <span class=" player0">0</span>Won';
                break;
            case PLAYERX_WON:
                announcer.innerHTML = 'Player <span class=" player0"> X</span>Won';
                break;
            case TIE:
                announcer.innerHTML = 'Tie';
        }
        announcer.classList.remove('hide');
    };
    
    const isValidAction = (tile) => {
        if(tile.innerText === 'x' || tile.innerText === 'o') {
            return false;
        }
        return true;
    };
    const resetBoard = () => {
        board = ['', '', '', '','', '', '', '',''];
        is isGameActive = true;
        announcer.classicList.add('hide');
        if(currentPlayer === 'o'){
            chanagePlayer();
        }
        tiles.forEach(tile => {
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        })
    }

    const unpdateBoard = (index) => {
        board[index] = currentPlayer;
    }

    const userAction = (tile, index) => {
        if(isValidAction(tile) && isGameActive){
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            chanagePlayer();
        }
    }

    tiles.forEach((tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    })

    resetButton.addEventListener('click', resetBoard);
})
