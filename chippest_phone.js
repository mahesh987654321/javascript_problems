let phones = [
  { name: "Iphone", price: 23000, model: "s3", warrienty: "5 years" },
  { name: "Samsung", price: 2300, model: "w4", warrienty: "4 years" },
  { name: "Micromax", price: 2, model: "i8", warrienty: "3 years" },
  { name: "Motorola", price: 13456, model: "l9", warrienty: "7 years" },
  { name: "Blackberry", price: 98776, model: "g5", warrienty: "1 years" },
  { name: "Symphony", price: 3456, model: "v7", warrienty: "05 years" },
  { name: "Kingstar", price: 47567, model: "m0", warrienty: "6 years" },
  { name: "Lava", price: 120000, model: "e4", warrienty: "2 years" },
];
let chippest = phones[0];
for (let phone of phones) {
  if (phone.price < chippest.price) {
    chippest = phone;
  }
}
console.log(chippest);
