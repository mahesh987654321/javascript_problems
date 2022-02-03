let duplicate = [
  "mahesh",
  "ratul",
  "mahesh",
  "mahesh",
  "Tufan",
  "Anando",
  "mahesh",
  "Ashik",
  "mahesh",
  "Utpol",
  "mahesh",
  "Ananya",
  "mahesh",
  "Riddita",
  "mahesh",
  "NAyok",
  "Hashi",
  "mahesh",
  "Dipto",
  "mahesh",
  "Kumersesh",
  "Dabul",
  "Habul",
  "mahesh",
  "Tabul",
  "Buddhiswar",
  "Rittik",
  "Laxmi",
  "Ayshrwiya",
  "Tiger",
];

function extra(duplicate) {
  unique = [];
  for (let element of duplicate) {
    console.log(element);
    if (unique.indexOf(element) == -1) {
      unique.push(element);
    }
  }
  return unique;
}
console.log("Dupilicate is: ", extra(duplicate));
