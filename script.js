// -- Variables (var/let/const) & data types/structures (strings/numbers/booleans/arrays/objects) --
var test = 5 // You could re write var test = 10 and have two seperate values (introduces const and let)
let description = 'We need a new floor.' // String
const squareMeters = 100 // Numbers
const specialCoating = true // Boolean
const floorOptions = [1, 2, 3] // Array
const floorType = ['carpet', 'hardwood', 'tiles'] // Lists
const renovationJob = {
  owner: {
    name: 'John',
    address: 'Some Street 55',
    city: 'saratoga',
  },
  maximumPrice: 5000,
  category: 'Bathroom',
  newShower: true,
  colorOptions: ['seagreen,', 'oceanblue', 'cyan'],
} // Objects

const error = {
  statusCode: 404,
  description: '...',
  retry: false,
}

// -- Traditional Functions vs arrow functions --
function calculatePrice() {
  const price = 50 * squareMeters
  return price
}
calculatePrice()

function calculatePrice1(sqMeters) {
  // -- You can pass anything into the name
  const price1 = 1000 + sqMeters
  return price1
}
const result = calculatePrice1(5000) // -- Same thing as result = 6000

var calculatePrice2 = function (squareMeters) {
  const price = 1000 + squareMeters // not used alot but still works the same
  return price
}

const calculatePrice3 = (sqMeters) => {
  // -- Most common way of functions
  const price = 1000 + sqMeters
  return price
}

const calculatePrice4 = (squareMeters) => 1000 + squareMeters

// -- string concatenation vs template literals --

/// const price = 9000
/// const totalprice = 'The total cost will be: ' + price
const price = 9000
const totalprice = `the total cost will be: ${price}`

// -- if-else vs ternary operator --

if (price < 10000) {
  console.log('the price is less than $10,000')
} else {
  console.log('the price is more than $10,000')
}

if (price == 5000) {
  // loose comparison == means is equal but if you use === it has to be both numbers not a string and number
}

// -- manipulating HTML and CSS --
const headingEl = document.querySelector('.heading')
headingEl.textContent = 'This is a test' // does not do html

headingEl.innerHTML = 'Hello <span class="heading--big">everyone</span>!' // parses the string as html
headingEl.insertAdjacentHTML(
  //Allows you to manipulate at which part you want the HTML to go
  'afterbegin',
  'Hello <span class="heading--big">everyone</span>!',
)
headingEl.stlye.fontSize = '55px' // CSS manipulation NOT RECCOMMENDED
headingEl.classList.add('heading--big')
headingEl.classList.remove('heading--big')
// -- events and functions for handling events (also called "event handlers") --

const clickHandler = () => {
  headingEl.style.color = 'red'
  console.log('Changed')
}
headingEl.addEventListener('click', clickHandler)
