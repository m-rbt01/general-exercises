//Element References
const shopList = document.querySelector(".shopping-list");
const input = document.querySelector(".input-container #item");
const inputButton = document.querySelector(".input-container #input-button");

//Event Listeners
inputButton.addEventListener("click", createShoppingList);

//Functions
function createShoppingList(){
    const inputText = input.value;
    input.value = "";
    const listItem = document.createElement("li");
    const deleteButton = document.createElement("button");
    listItem.textContent = inputText;
    deleteButton.textContent = "Delete";
    listItem.appendChild(deleteButton);
    shopList.appendChild(listItem);
    deleteButton.addEventListener("click", deleteListItem);
    input.focus();
}

function deleteListItem(event){
    let itemToDelete = event.target.parentNode;
    shopList.removeChild(itemToDelete);
}