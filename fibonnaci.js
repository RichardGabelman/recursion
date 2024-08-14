function fibs(length) {
  if (length <= 0) {
    return [];
  }
  if (length == 1) {
    return [0];
  }
  if (length == 2) {
    return [0, 1];
  }

  let first = 0;
  let second = 1;
  let sum;
  let result = [0, 1];

  for (let x = 2; x < length; x++) {
    sum = first + second;
    first = second;
    second = sum;
    result.push(sum);
  }
  return result;
}

function fibsRec(length) {
  let result = [];

  function fibFinder(index) {
    if (index < 2) {
      return index;
    }
    return fibFinder(index - 2) + fibFinder(index - 1);
  }

  for (let i = 0; i < length; i++) {
    result.push(fibFinder(i));
  }

  return result;
}


