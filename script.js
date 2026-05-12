document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: '1',
            img: 'https://img.icons8.com/?size=100&id=lOvhiSMwKCwC&format=png&color=000000'
        },
        {
            name: '2',
            img: 'https://img.icons8.com/?size=100&id=O8qZGG8hWatE&format=png&color=000000'
        },
        {
           name: '3',
           img: 'https://img.icons8.com/?size=100&id=5UN4LPGHfiBS&format=png&color=000000'
        },
        {
            name: '4',
            img: 'https://img.icons8.com/?size=100&id=1jBlYcdpMaNj&format=png&color=000000'
        },
        { 
            name: '5',
            img: 'https://img.icons8.com/?size=100&id=1jBlYcdpMaNj&format=png&color=000000'
        },
        {
            name: '6',
            img: 'https://img.icons8.com/?size=100&id=pmiijGGgOR0N&format=png&color=000000'
        },
         {
            name: '1',
            img: 'https://img.icons8.com/?size=100&id=lOvhiSMwKCwC&format=png&color=000000'
        },
        {
            name: '2',
            img: 'https://img.icons8.com/?size=100&id=O8qZGG8hWatE&format=png&color=000000'
        },
        {
           name: '3',
           img: 'https://img.icons8.com/?size=100&id=5UN4LPGHfiBS&format=png&color=000000'
        },
        {
            name: '4',
            img: 'https://img.icons8.com/?size=100&id=1jBlYcdpMaNj&format=png&color=000000'
        },
        { 
            name: '5',
            img: 'https://img.icons8.com/?size=100&id=1jBlYcdpMaNj&format=png&color=000000'
        },
        {
            name: '6',
            img: 'https://img.icons8.com/?size=100&id=pmiijGGgOR0N&format=png&color=000000'
        }
    ]

    const board = document.querySelector('.board')
    const result = document.querySelector('#score')
    const placeholder = 'https://cloud-5ystxzer7.vercel.app/7placeholder.png'
    const blank = 'https://cloud-5ystxzer7.vercel.app/6blank.png'
})

function createBoard () {
    for (let i = 0; i <cardArray.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', placeholder)
        card.setAttribute('data-id', i)
    }
}

card.addEventListener('click', flipCard)