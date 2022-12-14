// Write a JavaScript program to find the most frequent item of an array

var arr1 = [
  3,
  "a",
  "a",
  "a",
  2,
  3,
  "a",
  3,
  "a",
  2,
  4,
  9,
  3,
  7,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
  2,
];

const Counter = [{ elem: "", count: 0 }];

arr1.forEach((currentValue) => {
  // for of loop

  for (let CounterElement of Counter) {
    if (CounterElement.elem === currentValue) {
      CounterElement.count++;
    } else {
      Counter.push({ elem: currentValue, count: 1 });
    }
  }
});

// console.log(JSON.stringify(Counter, null, 3));

function arrayMax(CounterObj) {
  return CounterObj.reduce(function (p, v) {
    return p.count > v.count
      ? { elem: p.elem, count: p.count }
      : { elem: v.elem, count: v.count };
  });
}

console.log(
  arrayMax(Counter).elem + " occured " + arrayMax(Counter).count + " time(s)"
);
