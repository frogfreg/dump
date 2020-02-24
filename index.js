const addItemInput = document.querySelector("#addItem");
const itemsUl = document.querySelector("#items");

addItemInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    const newLi = document.createElement("li");
    newLi.innerText = this.value;
    itemsUl.append(newLi);
    this.value = "";
  }
});
