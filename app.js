// DOM Nodes
let duckysContainer = document.querySelector("section");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:nth-child(3)");

let userClicks = 0;
let maxClicks = 25;

const duckys = [];

// keep each goat in an object
function product(name, src, views, clicks) {
  this.name = name;
  this.src = src;
  this.views = views;
  this.clicks = clicks;

  duckys.push(this);
}

// function to choose a random goat
function getRandomIndex() {
  return Math.floor(Math.random() * duckys.length);
}
// function to render 2 random oddduckys
function renderduckys() {
  // get 2 rnadom indexes from our goat array
  let ducks1Index = getRandomIndex();
  let ducks2Index = getRandomIndex();
  let ducks3Index = getRandomIndex();

  // prevent the two images being the same oddduckys
  while (
    ducks1Index === ducks2Index ||
    ducks1Index === ducks3Index ||
    ducks2Index === ducks3Index
  ) {
    ducks2Index = getRandomIndex();
    ducks3Index = getRandomIndex();
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
  // check if the user has run out of clicks
  if (userClicks === maxClicks) {
    alert("You have run out of votes");
    renderChart();
    localStorage.setItem("duckys", JSON.stringify(duckys));
    return; // end the function here and don't run the rest
  }
  userClicks++;
  // get the name of the goat we just clicked
  let clickedducks = event.target.alt;

  // check if the click is on an image
  for (let i = 0; i < duckys.length; i++)
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
// if there is nothing in locaised storage for the product:
// instantiate my default products
if (localStorage.getItem("duckys") === null) {
  new product("bag", "./images/lab11-assets-main/Bag.jpg", 0, 0),
    new product("banana", "./images/lab11-assets-main/banana.jpg", 0, 0),
    new product("bathroom", "./images/lab11-assets-main/bathroom.jpg", 0, 0),
    new product("boots", "./images/lab11-assets-main/boots.jpg", 0, 0),
    new product("breakfast", "./images/lab11-assets-main/breakfast.jpg", 0, 0),
    new product("bubblegum", "./images/lab11-assets-main/bubblegum.jpg", 0, 0),
    new product("chair", "./images/lab11-assets-main/chair.jpg", 0, 0),
    new product("cthulhu", "./images/lab11-assets-main/cthulhu.jpg", 0, 0),
    new product("dog-duck", "./images/lab11-assets-main/dog-duck.jpg", 0, 0),
    new product("dragon", "./images/lab11-assets-main/dragon.jpg", 0, 0),
    new product("pen", "./images/lab11-assets-main/pen.jpg", 0, 0),
    new product("pet-sweep", "./images/lab11-assets-main/pet-sweep.jpg", 0, 0),
    new product("scissors", "./images/lab11-assets-main/scissors.jpg", 0, 0),
    new product("shark", "./images/lab11-assets-main/shark.jpg", 0, 0),
    new product("sweep", "./images/lab11-assets-main/sweep.png", 0, 0),
    new product("tauntaun", "./images/lab11-assets-main/tauntaun.jpg", 0, 0),
    new product("unicorn", "./images/lab11-assets-main/unicorn.jpg", 0, 0),
    new product("water-can", "./images/lab11-assets-main/water-can.jpg", 0, 0),
    new product(
      "wine-glass",
      "./images/lab11-assets-main/wine-glass.jpg",
      0,
      0
    );
} else {
  const productsLS = JSON.parse(localStorage.getItem("duckys"));
  for (let i = 0; i < productsLS.length; i++) {
    new product(
      productsLS[i].name,
      productsLS[i].src,
      productsLS[i].views,
      productsLS[i].clicks
    );
  }
}

duckysContainer.addEventListener("click", handleduckClick);
// render the results
// when the user clicks the view results button
// render a ul full of lis that tell the user how many tiems each goat has been clicked
renderduckys();

function showresults() {
  const results = document.getElementById("results");

  for (let i = 0; i < duckys.length; i++) {
    const li = document.createElement("li");
    const product = duckys[i];
    li.textContent = `${product.name} was viewd ${product.views} times, and clicked ${product.clicks} times`;
    results.appendChild(li);
  }
}
renderduckys();

function renderChart() {
  // get where we are going to put the chart
  const ctx = document.getElementById("myChart"); // context of the chart

  const labels = [];
  const views = [];
  const clicks = [];

  // loop through
  for (let i = 0; i < duckys.length; i++) {
    labels.push(duckys[i].name);
    views.push(duckys[i].views);
    clicks.push(duckys[i].clicks);
  }

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "# of views",
          data: views,
          borderWidth: 1,
        },
        {
          type: "line",
          label: "# of clicks",
          data: clicks,
          borderWidth: 1,
        },
      ],
    },
  });
}
