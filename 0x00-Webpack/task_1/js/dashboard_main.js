// dashboard_main.js

// Import jQuery and Lodash
import $ from 'jquery';
import _ from 'lodash';

// Initialize click count
let clickCount = 0;

// Function to update the counter
function updateCounter() {
  clickCount += 1; // Increment the click count
  $('#count').text(`${clickCount} clicks on the button`); // Update the paragraph content
}

// Debounce the updateCounter function
const debouncedUpdateCounter = _.debounce(updateCounter, 300); // Wait for 300 milliseconds

// Document ready function to append elements and set up event listeners
$(document).ready(function () {
  // Add paragraph: Holberton Dashboard
  $('body').append('<p>Holberton Dashboard</p>');

  // Add paragraph: Dashboard data for the students
  $('body').append('<p>Dashboard data for the students</p>');

  // Add button with text: Click here to get started
  const button = $('<button>Click here to get started</button>');
  $('body').append(button);

  // Add paragraph with id 'count'
  $('body').append('<p id="count"></p>');

  // Add paragraph: Copyright - Holberton School
  $('body').append('<p>Copyright - Holberton School</p>');

  // Bind the debounced updateCounter function to the button click event
  button.on('click', debouncedUpdateCounter);
});
