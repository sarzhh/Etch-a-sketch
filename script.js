const board = document.querySelector('.board');

for(let i = 0; i < 16 * 16; i++){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    board.appendChild(cell);
}

const cells = document.querySelectorAll('.cell')
cells.forEach(cell =>{
    cell.addEventListener('mouseenter', () => {
        cell.style.backgroundColor = 'black';
    })
})
