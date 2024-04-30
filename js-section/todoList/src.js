let lst = [];

console.log("Welcome to our todo list");
let cmd = prompt("Do you want to continue or quit");

while (cmd !== "quit") {
  cmd = prompt("Choose one option: new - list - delete - quit");
  if (cmd === "new") {
    let article = prompt("Add a todo");
    lst.push(article);
  } else if (cmd === "list") {
    for (let l of lst) {
      console.log(l);
    }
  } else if (cmd === "delete") {
    console.log("Your current list");
    for (let i = 0; i < lst.length; i++) {
      console.log(`${i} - ${lst[i]}`);
    }
    let element = parseInt(prompt("Choose the element you want to delete"));
    lst.splice(element, 1);
  }
}
console.log("You quit the app!");
