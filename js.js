const lightbulbSwitch = document.querySelector("#lightbulb-switch");
const lightbulbImage = document.querySelector("#lightbulb-img");
console.log(lightbulbImage);
let lightbulbOn = false;

lightbulbSwitch.addEventListener("click", function (event) {
  if (lightbulbOn) {
    lightbulbImage.src = "off.png";
    lightbulbOn = false;
  } else {
    lightbulbImage.src = "on.png";
    lightbulbOn = true;
  }
});
