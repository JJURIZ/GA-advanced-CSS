const container = document.querySelector(".container");
const body = document.querySelector("body");
console.log(container);

container.addEventListener('mouseover', function(){
    const newElement = createNewElement('p', 'This is super cool!');
    container.appendChild(newElement);
    console.log("I am currently hovering over the container element.")
})

function createNewElement(tagName, text) {
    const newElement = document.createElement(tagName);
    newElement.textContent = text;
    return newElement;
}

const card = createNewElement('div', 'My new car(d)');
card.classList.add('card');
console.log(card);

const cardText = createNewElement('p', 'Friday, I\'m in love');
cardText.classList.add('card-title');

//append cardText to card

card.appendChild(cardText);

const link = createNewElement('a', 'Cat Car');
link.classList.add('btn', 'btn-primary');
link.setAttribute('href', 'https://i.redd.it/4o0u22gwce531.jpg');
link.setAttribute('target', 'blank');

//append link to card
card.appendChild(link)
body.appendChild(card);

function setAttributes(element, attributes) {
    for(let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

setAttributes('a', {"src": "http://google.com", "heght": "100%"})