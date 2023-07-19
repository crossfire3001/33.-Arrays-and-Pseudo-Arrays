"use strict";

// 1
const heroes = [
  "Jungle boy",
  "El Capitano",
  "The SuperX",
  "Chemical Joe",
  "Do little",
  3933,
];

// удаление последнего элемента из нашего массива
heroes.pop();

console.log(heroes);

// 2
const gangsters = [
  "Jungle boy",
  "El Capitano",
  "The SuperX",
  "Chemical Joe",
  "Do little",
  3933,
];

// добавление элемента в конец массива
gangsters.push("The BIG");

console.log(gangsters);

// 3
const chemicalBrothers = [
  "Jungle boy",
  "El Capitano",
  "The SuperX",
  "Chemical Joe",
  "Do little",
  3933,
];

// перебор элементов массива
for (let i = 0; i < chemicalBrothers.length; i++) {
  console.log(chemicalBrothers[i]);
}

// 4
const supers = [
  "Jungle boy",
  "El Capitano",
  "The SuperX",
  "Chemical Joe",
  "Do little",
  3933,
];

// перебор элементов массива
for (let value of supers) {
  console.log(value); // можно использовать break и continue
}

// 5

supers[99] = 0;
console.log(supers.length); // 100
console.log(supers);

// 6

const photon = ["man", "emc", "T", 18];

// самый часто использующийся метод массивов
photon.forEach(function (item, index, photon) {
  console.log(`${index}: ${item} внутри массива ${photon}`);
});

// 7
// методы: split, join и sort

const otb = prompt("", "");
const products = otb.split(", ");
products.sort();
console.log(products.join("; "));

// 8

const numbes = [2, 3, 10, 111, 332, 19, 1];
numbes.sort(compareNumbers);
console.log(numbes);

function compareNumbers(a, b) {
  return a - b;
}
