let n = 10;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

for (var i = 1; i <= 5; i++) {
  var x = "";
  for (j = 1; j <= i; j++) {
    x = x + "*";
  }
  console.log(x);
}
