document.addEventListener('DOMContentLoaded', () => {
    createBoard(32);
})

function createBoard(size) {
    let board = document.querySelector('.board');
    
    board.style.gridTemplateColumns = `repreat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numberDivs = size * size;

    for (let i=0 ; i<numberDivs ; i++) {
        let div = document.createElement('div');
        div.style.backgroundColor = 'yellow';
        board.insertAdjacentElement('beforeend', div);
    }
}