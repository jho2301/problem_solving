function getLeftFoods(foods: number, nthFood: number): number[] {
  const foodList = [];
  let k = nthFood;
  for (let i = 1; i <= foods; i++) foodList.push(i);
  while (2 < foodList.length) {
    foodList.splice(k % foods, 1);
    k += nthFood;
  }
  return foodList;
}

console.log(getLeftFoods(6, 3));
