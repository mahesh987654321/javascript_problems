function woodCalculate(chair, table, bed) {
  const chairHood = 3;
  const tableHood = 5;
  const bedHood = 10;

  const chair_hood_quentity = chair * chairHood;
  const table_hood_quentity = table * tableHood;
  const bed_hood_quentity = bed * bedHood;

  const total_wood =
    chair_hood_quentity + table_hood_quentity + bed_hood_quentity;

  return total_wood;
}
console.log(woodCalculate(3, 6, 8));
