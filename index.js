// VARS

const slider = document.getElementById("slider");
const discountToggle = document.getElementById("toggle");
const circle = document.getElementById("circle");
let money;
let percentage = 1;

// FUNCTIONS

const switcher = (discount) => {
  switch (slider.value) {
    case "1":
      money = 8 * discount;
      document.getElementById("slider-views").innerHTML = "10K";
      document.getElementById("slider-money").innerHTML = `$${money}`;
      break;
    case "2":
      money = 12 * discount;
      document.getElementById("slider-views").innerHTML = "50K";
      document.getElementById("slider-money").innerHTML = `$${money}`;
      break;
    case "3":
      money = 16 * discount;
      document.getElementById("slider-views").innerHTML = "100K";
      document.getElementById("slider-money").innerHTML = `$${money}`;
      break;
    case "4":
      money = 24 * discount;
      document.getElementById("slider-views").innerHTML = "500K";
      document.getElementById("slider-money").innerHTML = `$${money}`;
      break;
    case "5":
      money = 36 * discount;
      document.getElementById("slider-views").innerHTML = "1M";
      document.getElementById("slider-money").innerHTML = `$${money}`;
      break;
    default:
      break;
  }
};

// Call functions on changes

const getDiscount = () => {
  if (discountToggle.checked === true) {
    percentage = 0.75;
    switcher(percentage);
  } else {
    percentage = 1;
    switcher(percentage);
  }
};

slider.onchange = () => {
  switcher(percentage);
};

discountToggle.onchange = () => {
  getDiscount();
};

// Inititial values with cached elements

getDiscount();
switcher(percentage);
