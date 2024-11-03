// Select the <h2> element with the class 'header'
const headerElement = document.querySelector('.header');

// Change its content to "Welcome to FiTech!"
headerElement.textContent = "Welcome to FiTech!";

// Print the selected element
console.log(headerElement);


// Select the input field with the class 'user-input'
const userInput = document.querySelector('.user-input');

// Add a keydown event listener
userInput.addEventListener('keydown', (event) => {
    console.log("Key pressed");
    console.log(userInput.value); // Print current value of the input
});


// Select the <img> element by its ID
const imageElement = document.getElementById('bootcamp-image');

// Add a title attribute
imageElement.setAttribute('title', 'Bootcamp Image');

// Print the <img> element
console.log(imageElement);


// Select the button by its ID
const buttonElement = document.getElementById('my-button');

// Add a click event listener
buttonElement.addEventListener('click', () => {
    buttonElement.textContent = "Button Clicked!";
    console.log("Button was clicked");
});


// Select the <div> element by its ID
const dynamicBox = document.getElementById('dynamic-box');

// Change its width and background color
dynamicBox.style.width = "200px";
dynamicBox.style.backgroundColor = "green";

// Print the modified element
console.log(dynamicBox);


// Select the <a> element by its ID
const githubLink = document.getElementById('github-link');

// Retrieve the value of the href attribute
const hrefValue = githubLink.getAttribute('href');

// Print the value of the href attribute
console.log(hrefValue);


// Select all <p> elements
const paragraphs = document.getElementsByTagName('p');

// Change the content of the first paragraph
if (paragraphs.length > 0) {
    paragraphs[0].textContent = "This is the updated paragraph 1";
}

// Print the collection of <p> elements
console.log(paragraphs);


// Select the <h1> element by its ID
const welcomeMessage = document.getElementById('welcome-message');

// Change its content
welcomeMessage.textContent = "DOM Manipulation is Amazing!";

// Print the modified element
console.log(welcomeMessage);


// Select all elements with the class 'box'
const boxes = document.getElementsByClassName('box');

// Change the background color of the second box
if (boxes.length > 1) {
    boxes[1].style.backgroundColor = "yellow";
}

// Print the collection of elements
console.log(boxes);


// Select all elements with the class 'item'
const items = document.querySelectorAll('.item');

// Change the text of the second item
if (items.length > 1) {
    items[1].textContent = "Updated Item 2";
}

// Print the NodeList of items
console.log(items);
