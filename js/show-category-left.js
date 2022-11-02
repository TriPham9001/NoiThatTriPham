const targetDiv = document.getElementById("showColor");
const btn = document.getElementById("clickColor");
btn.onclick = function () {
  if (targetDiv.style.display !== "none") {
    targetDiv.style.display = "none";
  } else {
    targetDiv.style.display = "block";
  }
};


const targetDiv2 = document.getElementById("filter");
const btn2 = document.getElementById("clickfilter");
btn2.onclick = function () {
  if (targetDiv2.style.display !== "none") {
    targetDiv2.style.display = "none";
  } else {
    targetDiv2  .style.display = "block";
  }
};  





