document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'apple',
            img: 'apple.png'
        },
        {
            name: 'bananas',
            img: 'bananas.png'
        },
        {
           name: 'grapes',
           img: 'grapes.png'
        },
        {
            name: 'cherry',
            img: 'cherry.png'
        },
        { 
            name: 'orange',
            img: 'orange.png'
        },
        {
            name: 'strawberry',
            img: 'strawberry.png'
        },
         {
            name: 'apple',
            img: 'apple.png'
        },
        {
            name: 'bananas',
            img: 'bananas.png'
        },
        {
           name: 'grapes',
           img: 'grapes.png'
        },
        {
            name: 'cherry',
            img: 'cherry.png'
        },
        { 
            name: 'orange',
            img: 'orange.png'
        },
        {
            name: 'strawberry',
            img: 'strawberry.png'
        }
    ];
    cardArray.sort(() => 0.5 - Math.random());

    const board = document.querySelector('.board')
    const result = document.querySelector('#score')
    const placeholder = 'plant.png';
    const blank = 'blank.jpg';

    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    function createBoard () {
    for (let i = 0; i <cardArray.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', placeholder);
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        board.appendChild(card);
    }
}

var cardsClicked = []
var cardsclickedId = []
var cardsMatched = []

function flipCard() {
    var cardId= this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
    }
}

createBoard();
})
