const container = document.querySelector(".container");
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