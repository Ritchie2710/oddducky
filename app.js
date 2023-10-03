// DOM Nodes
let duckysContainer = document.querySelector("section");
let image1 = document.querySelector("section img:first-child");
let image2 = document.querySelector("section img:nth-child(2)");
let image3 = document.querySelector("section img:nth-child(3)");

let userClicks = 0;
let maxClicks = 25;

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
// function to render 2 random oddduckys
function renderduckys() {
  // get 2 rnadom indexes from our goat array
  let ducks1Index = getRandomIndex();
  let ducks2Index = getRandomIndex();
  let ducks3Index = getRandomIndex();

  // prevent the two images being the same oddduckys
  while (ducks1Index === ducks2Index) {
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
    showresults();
    return; // end the function here and don't run the rest
  }
  userClicks++;
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
const duckys = [
  new product("bag", "./images/lab11-assets-main/Bag.jpg"),
  new product("banana", "./images/lab11-assets-main/banana.jpg"),
  new product("bathroom", "./images/lab11-assets-main/bathroom.jpg"),
  new product("boots", "./images/lab11-assets-main/boots.jpg"),
  new product("breakfast", "./images/lab11-assets-main/breakfast.jpg"),
  new product("bubblegum", "./images/lab11-assets-main/bubblegum.jpg"),
  new product("chair", "./images/lab11-assets-main/chair.jpg"),
  new product("cthulhu", "./images/lab11-assets-main/cthulhu.jpg"),
  new product("dog-duck", "./images/lab11-assets-main/dog-duck.jpg"),
  new product("dragon", "./images/lab11-assets-main/dragon.jpg"),
  new product("pen", "./images/lab11-assets-main/pen.jpg"),
  new product("pet-sweep", "./images/lab11-assets-main/pet-sweep.jpg"),
  new product("scissors", "./images/lab11-assets-main/scissors.jpg"),
  new product("shark", "./images/lab11-assets-main/shark.jpg"),
  new product("sweep", "./images/lab11-assets-main/sweep.png"),
  new product("tauntaun", "./images/lab11-assets-main/tauntaun.jpg"),
  new product("unicorn", "./images/lab11-assets-main/unicorn.jpg"),
  new product("water-can", "./images/lab11-assets-main/water-can.jpg"),
  new product("wine-glass", "./images/lab11-assets-main/wine-glass.jpg"),
];

duckysContainer.addEventListener("click", handleduckClick);
// render the results
// when the user clicks the view results button
// render a ul full of lis that tell the user how many tiems each goat has been clicked
renderduckys();

// function handleimgclick(event) {

//   userClicks++;

//   let clickedProduct = event.target.alt;

//   for (let i = 0; i < products.length; i++)
//     if (clickProduct === products[1].name)
//       if (userclicks === maxClicks) {
//         return;
//       }

//   image1.addEventListener("click", handleduckClick);
//   image2.addEventListener("click", handleduckClick);
//   image3.addEventListener("click", handleduckClick);

// }

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

  // populate the arrays with data
  // TODO: ^

  // run the Chart function (that does the chart making)
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "bag",
        "banana",
        "bathroom",
        "boots",
        "breakfast",
        "bubblegum",
        "chair",
        "cthulhu",
        "dog-duck",
        "dragon",
        "pen",
        "pet-sweep",
        "scissors",
        "shark",
        "sweep",
        "tauntaun",
        "unicorn",
        "water-can",
        "wine-glass",
      ],

      datasets: [
        {
          label: "# of views",
          data: views,
          borderWidth: 1,
          backgroundColor: [
            "red",
            "#cdaa7f",
            "skyblue",
            "green",
            "orange",
            "grey",
            "darkblue",
            "pink",
            "brown",
            "yellow",
            "black",
            "blue violet",
          ],
        },
        {
          label: "# of clicks",
          data: clicks,
          borderWidth: 1,
          backgroundColor: [
            "red",
            "#cdaa7f",
            "skyblue",
            "green",
            "orange",
            "grey",
            "darkblue",
            "pink",
            "brown",
            "yellow",
            "black",
            "blue violet",
          ],
        },
      ],
    },
  });
}

const ctx = document.getElementById("myChart");
const config = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "bag",
      "banana",
      "bathroom",
      "boots",
      "breakfast",
      "bubblegum",
      "chair",
      "cthulhu",
      "dog-duck",
      "dragon",
      "pen",
      "pet-sweep",
      "scissors",
      "shark",
      "sweep",
      "tauntaun",
      "unicorn",
      "water-can",
      "wine-glass",
    ],
    datasets: [
      {
        label: "# of votes",
        data: [5, 10, 3, 9, 8.9],
        borderWidth: 6,
        backgroundColor: ["red", "#cdaa7f", "skyblue", "green", "orange"],
      },
      {
        type: "line",
        label: "# of views",
        data: [30, 31, 11, 50, 90],
        borderWidth: 6,
        backgroundColor: ["red", "#cdaa7f", "skyblue", "green", "orange"],
      },
    ],
  },
});
