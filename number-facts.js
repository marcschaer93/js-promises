
// let favNumber = 16;
// let baseURL = "http://numbersapi.com";

// // 1.
// $.getJSON(`${baseURL}/${favNumber}/trivia?json`).then(data => { 
//     console.log(data);
// });

// // 2.
// let favNumbers = [3,16,700]
// $.getJSON(`${baseURL}/${favNumbers}`).then(data => {
//     console.log(data);
// })

// // 3. 
// Promise.all(
//     Array.from({length:4}, ()=> {
//         return $.getJSON(`${baseURL}/${favNumber}?json`)
//     })
// ).then(facts => {
//     facts.forEach(fact => console.log('fact:', fact))
//     facts.forEach(fact => $("#list-facts").append(`<li class="list-group-item">${fact.text}</li>`))
    
// })


// CARDS
const baseCards = "https://deckofcardsapi.com/api/deck"

// // 1.
// response = $.getJSON(`${baseCards}/new/draw/?count=1`)
// .then(data => {
//     let {suit, value} = data.cards[0]
//     console.log(data, `${value} of ${suit}`);

// })

// 2.

// let firstCard = null;
// response = $.getJSON(`${baseCards}/new/draw/?count=1`)
// .then(data => {
//     // let {suit, value} = data.cards[0]
//     firstCard = data.cards[0];
//     let deckId = data.deck_id
//     // console.log(data, `${value} of ${suit}`);
//     return $.getJSON(`${baseCards}/${deckId}/draw/?count=1`)
// })
// .then(data => {
//     // let {suit, value} = data.cards[0]
//     let secondCard = data.cards[0];
//     let cards = [firstCard, secondCard]
//     cards.forEach((card) => {
//          console.log(`${card.value} of ${card.suit}`)})
// })


// 3.

let firstCard = null
let deckId = null

function drawCard() {
    if (firstCard === null) {
        response = $.getJSON(`${baseCards}/new/draw/?count=1`)
        .then(data => {
            firstCard = data.cards[0]
            deckId = data.deck_id
            $(".card").append( `<img src="${firstCard.image}" alt=""></img>`)

            console.log('fc', firstCard);
            // return $.getJSON(`${baseCards}/${deckId}/draw/?count=1`)
        })
    }
    else {
        $.getJSON(`${baseCards}/${deckId}/draw/?count=1`)
        .then(data => {
            let nextCard = data.cards[0]
            let angle = Math.random() * 90 - 45;
            let randomX = Math.random() * 40 - 20;
            let randomY = Math.random() * 40 - 20;

            console.log('nc', nextCard);

            // $(".card").append( `<img src="${nextCard.image}" alt=""></img>`)
            $("#card-board").append($('<img>', {
                src: `${nextCard.image}`,
                css: {
                  transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
                }
              }))
            

        })

    }

}





$("#submitBtn").on("click", drawCard)