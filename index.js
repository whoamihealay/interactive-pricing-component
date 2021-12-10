const discountToggle = document.getElementById("toggle");
const circle = document.getElementById("circle");

discountToggle.onclick = () => {
  if (circle.classList.contains("discount")) {
    circle.classList.remove("discount");
  } else {
    circle.classList.add("discount");
  }
};
