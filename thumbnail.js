document.addEventListener("DOMContentLoaded", function(event) {
alert("Hello JavaScript");
  let targetImage = document.querySelector("#smart-image");
  targetImage.addEventListener("click", function() {
  targetImage.classList.add("small");
    if (targetImage.classList.contains("small")) {
targetImage.classList.add("small");
} else {
targetImage.classList.remove("small");
}
});
});
