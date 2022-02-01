function getCount(str) {
  let valueCount = 0;

  const arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "a":
        valueCount++;
        break;
      case "e":
        valueCount++;
        break;
      case "i":
        valueCount++;
        break;
      case "o":
        valueCount++;
        break;
      case "u":
        valueCount++;
        break;
    }
  }
  return valueCount;
}
