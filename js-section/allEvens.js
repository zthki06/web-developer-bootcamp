function allEvens(arr) {
  let res = arr.every((w) => {
    return w % 2 === 0;
  });
  return res;
}
