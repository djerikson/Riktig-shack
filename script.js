const chessboard = document.getElementById('chessboard');

// Unicode symbols for the chess pieces
const pieces = {
    'white': {
        'king': '&#9812;',
        'queen': '&#9813;',
        'rook': '&#9814;',
        'bishop': '&#9815;',
        'knight': '&#9816;',
        'pawn': '&#9817;'
    },
    'black': {
        'king': '&#9818;',
        'queen': '&#9819;',
        'rook': '&#9820;',
        'bishop': '&#9821;',
        'knight': '&#9822;',
        'pawn': '&#9823;'
    }
};

// Initial board setup
const initialBoard = [
    ['black.rook', 'black.knight', 'black.bishop', 'black.queen', 'black.king', 'black.bishop', 'black.knight', 'black.rook'],
    ['black.pawn', 'black.pawn', 'black.pawn', 'black.pawn', 'black.pawn', 'black.pawn', 'black.pawn', 'black.pawn'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['white.pawn', 'white.pawn', 'white.pawn', 'white.pawn', 'white.pawn', 'white.pawn', 'white.pawn', 'white.pawn'],
    ['white.rook', 'white.knight', 'white.bishop', 'white.queen', 'white.king', 'white.bishop', 'white.knight', 'white.rook']
];

// Function to create the chessboard
function createChessboard() {
    for (let row = 0; row < 8; row++) {
        const tr = document.createElement('tr');
        for (let col = 0; col < 8; col++) {
            const td = document.createElement('td');
            td.setAttribute('data-row', row);
            td.setAttribute('data-col', col);
            
            // Set alternating colors for the squares
            if ((row + col) % 2 === 0) {
                td.classList.add('white');
            } else {
                td.classList.add('black');
            }

            // Add chess pieces based on initial setup
            const pieceInfo = initialBoard[row][col];
            if (pieceInfo) {
                const [color, piece] = pieceInfo.split('.');
