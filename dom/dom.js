// const element = document.getElementsByClassName("blog");
// for (let nam of element) {
//   nam.style.fontSize = "22px";
//   nam.style.backgroundColor = "purple";
//   nam.style.color = "white";
//   nam.style.border = "5px solid orange";
//   nam.style.padding = "36px";
// }
function makebg() {
  const iu = document.getElementsByClassName("fg");
  for (let element of iu) {
    element.style.textAlign = "center";
    element.style.backgroundColor = "yellow";
    document.body.style.backgroundColor = "red";
  }
}
