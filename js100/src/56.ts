const nationWidth = {
  Korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

const krWidth: number = nationWidth['Korea'];

delete nationWidth['Korea'];

const entries: [string, number][] = Object.entries(nationWidth);
let similarNation: [string, number] = [
  '',
  Math.max.apply(null, Object.values(nationWidth)),
];

for (let nation of entries)
  if (Math.abs(krWidth - nation[1]) <= similarNation[1]) similarNation = nation;

console.log(similarNation);
