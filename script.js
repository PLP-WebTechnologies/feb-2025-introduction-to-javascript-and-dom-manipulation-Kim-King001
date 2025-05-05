// script.js

// Change text content dynamically
document.getElementById('main-title').textContent = "JavaScript Made This Dynamic!";

// Modify CSS styles via JavaScript
document.getElementById('style-btn').addEventListener('click', function() {
  const text = document.getElementById('dynamic-text');
  text.style.color = text.style.color === 'tomato' ? 'black' : 'tomato';
  text.style.fontWeight = text.style.fontWeight === 'bold' ? 'normal' : 'bold';
  text.style.backgroundColor = text.style.backgroundColor === 'yellow' ? '' : 'yellow';
});

// Add or remove an element when a button is clicked
let infoDiv = null;
document.getElementById('toggle-btn').addEventListener('click', function() {
  const section = document.querySelector('section');
  if (!infoDiv) {
    infoDiv = document.createElement('div');
    infoDiv.textContent = "Here is some extra info added by JavaScript!";
    infoDiv.style.marginTop = "1em";
    infoDiv.style.padding = "0.5em";
    infoDiv.style.border = "1px solid #aaa";
    section.appendChild(infoDiv);
  } else {
    infoDiv.remove();
    infoDiv = null;
  }
});
