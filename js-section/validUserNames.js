function validUserNames(usernames) {
  // your code here
  let newArr = usernames.filter((el) => {
    return el.length < 10;
  });
  return newArr;
}
