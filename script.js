const board = document.querySelector('.board');
const gridSizeElement = document.querySelector('.gridsize');


const createBoard = (size) => {
    board.innerHTML = '';

    for(let i = 0; i < size * size; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        board.appendChild(cell);
    }

    const cells = document.querySelectorAll('.cell');

    const cellSize = 100 / size;
    cells.forEach(cell => {
        cell.style.flexBasis = `${cellSize}%`;
    })
    
    
    cells.forEach(cell =>{
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = 'black';
        })
    })


}
createBoard(16);


const gridSize = () => {
    gridSizeElement.addEventListener('click', () => {
     const gridNumber = prompt('Enter Size of the grid');
     if (gridNumber >= 2 && gridNumber <= 100){
        createBoard(gridNumber);
        }

    else (alert("Grid size should be between 1 and 100"));
    })

    
}

gridSize();
