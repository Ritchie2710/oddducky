// DOM Nodes
let duckysContainer = document.querySelector("section");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");

// keep each goat in an object
function product(name, src) {
  this.name = name;
  this.src = src;
  this.views = 0;
  this.clicks = 0;
}

// function to choose a random goat
function getRandomIndex() {
  return Math.floor(Math.random() * duckys.length);
}
console.log;
// function to render 2 random oddduckys
function renderduckys() {
  // get 2 rnadom indexes from our goat array
  let ducks1Index = getRandomIndex();
  let ducks2Index = getRandomIndex();
  let ducks3Index = getRandomIndex();

  // prevent the two images being the same oddduckys
  while (ducks1Index === ducks2Index) {
    ducks2Index = getRandomIndex();
  }

  // change the src of our 2 images
  image1.src = duckys[ducks1Index].src;
  image2.src = duckys[ducks2Index].src;
  image3.src = duckys[ducks3Index].src;
  image1.alt = duckys[ducks1Index].name;
  image2.alt = duckys[ducks2Index].name;
  image3.alt = duckys[ducks1Index].name;

  // increase the goats views
  duckys[ducks1Index].views++;
  duckys[ducks2Index].views++;
  duckys[ducks3Index].views++;
}

// handle the duckys being clicked
function handleduckClick(event) {
  // get the name of the goat we just clicked
  let clickedducks = event.target.alt;

  // check if the click is on an image
  if (event.target === duckysContainer) {
    alert("Please click on an image");
  } else {
    // render more goats
    renderduckys();
  }

  // increase the clicks of the goat
  // loop through allGoats
  for (let i = 0; i < duckys.length; i++) {
    // check if the name of the goat in the array, matches the alt tag of our image
    if (clickedducks === duckys[i].name) {
      // increase the number of clicks
      duckys[i].clicks++;
      // stop the for loop because we found the goat
      break;
    }
  }
}

// make the goats
const images = [
  new product("bag", "./images/Bag.jpg"),
  new product("banana", "./images/bananas.jpg"),
  new product("bathroom", "./images/bathroom.jpg"),
  new product("boots", "./images/boots.jpg"),
  new product("breakfast", "./breakfast.jpg"),
  new product("bublegum", "./images/bubblegum.jpg"),
  new product("chair", "./images/chair.jpg"),
  new product("cthulhu", "./images/sweater-goat.jpg"),
  new product("dog-duck", "./images/dog-duck.jpg"),
  new product("dragon", "./images/dragon.jpg"),
  new product("pen", "./images/pen.jpg"),
  new product("pet-sweep", "./images/pet-sweep.jpg"),
  new product("scissors", "./images/scissors.jpg"),
  new product("shark", "./images/shark.jpg"),
  new product("sweep", "./images/sweep.jpg"),
  new product("tauntaun", "./images/tauntaun.jpg"),
  new product("unicorn", "./images/unicorn.jpg"),
  new product("water-can", "./images/water-can.jpg"),
  new product("wine-glass", "./images/wine-glass.jpg"),
];

// render the results
// when the user clicks the view results button
// render a ul full of lis that tell the user how many tiems each goat has been clicked
renderduckys();
