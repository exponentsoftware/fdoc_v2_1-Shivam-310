function filterByLength(arr, num) {
    return arr.filter(str => str.length >= num);
  }

  const arr = ["apple", "banana", "cherry", "date", "elderberry"];
  console.log(filterByLength(arr, 6));
