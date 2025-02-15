// console.log("Hello");
// console.log(window);
// alert("Reached!!");
document.getElementById("changeText").addEventListener("click", function () {
  let paragraph = document.getElementById("paragraph-1");
  console.log(paragraph);
  paragraph.textContent = "the para is changed";
});

document.getElementById("highlight1").addEventListener("click", function () {
  let diffCities = document.getElementById("diffCities");

  diffCities.firstElementChild.classList.add("highlight");
});
