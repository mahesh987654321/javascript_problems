const items = document.getElementsByClassName("same");
for (let item of items) {
  item.addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
  });
}
