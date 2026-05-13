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

function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const firstCard = cardsClickedId[0]
    const secondCard = cardsClicked[1]
    if (firstCard === secondCard) {
        cards[firstCard].setAttribute('src', placeholder)
        cards[secondCard].setAttribute('src', placeholder)
        alert('You have clicked the same image!!')
    }
    else if (cardsClicked[0] === cardsClicked[1]) {
        cards[firstCard].setAttribute('src', blank)
        cards[secondCard].setAttribute('src', blank)
        cardsMatched.push(cardsClicked)
        cards[firstCard].removeEventListener('click', flipCard)
        cards[secondCard].removeEventListener('click', flipCard)
    }
    else {
            cards[firstCard].setAttribute('src',placeholder)
            cards[secondCard].setAttribute('src', placeholder)
        }
        cardsClicked = []
        cardsClicked = []
        result.textContent = cardsMatched.length
        if (cardsMatched.length === cardArray.length/2) {
            result.textContent = 'congratulations!, you completed it'
        }
}

createBoard();
})
