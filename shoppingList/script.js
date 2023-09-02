const itemForm = document.getElementById('item-form');
// const inputItem = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const itemInput = document.getElementById('item-input');
const clearButton = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formBtn = itemForm.querySelector('button');
let isEditMode = false;

function displayItems() {
  const itemsFromStorage = getItemsFromStorage();
  itemsFromStorage.forEach((i) => {
    addItemToDom(i);
  });
  resetUI();
}

function onAddItemmSubmit(e) {
  e.preventDefault();
  const newItem = itemInput.value.replace(/\s+/g, ' ').trim();

  if (newItem === '') {
    alert('Enter something!');
    return;
  }

  //Check for Edit Mode
  if (isEditMode) {
    const itemToEdit = itemList.querySelector('.edit-mode');
    removeItemFromStorage(itemToEdit.textContent);
    itemToEdit.classList.remove('edit-mode');
    itemToEdit.remove();
    isEditMode = false;
  } else {
    if (checkIfItemExists(newItem)) {
      alert('Item Already Exists');
      return;
    }
  }

  //Create Item DOM element
  addItemToDom(newItem);

  //Add item to local storage
  addItemToStorage(newItem);

  itemInput.value = '';
  resetUI();
}

function addItemToDom(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createButton('remove-item btn-link text-red');

  li.appendChild(button);
  itemList.appendChild(li);
}

function addItemToStorage(item) {
  const itemsFromStorage = getItemsFromStorage();

  itemsFromStorage.push(item);
  //Add new item to array

  //Covert to JSON string and set to localstorage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function getItemsFromStorage() {
  let itemsFromStorage;
  if (localStorage.getItem('items') === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem('items'));
  }
  return itemsFromStorage;
}

function createButton(classes) {
  const button = document.createElement('button');
  button.className = classes;

  const icon = createIcon('fa-solid fa-xmark');
  button.appendChild(icon);

  return button;
}

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

function onClickItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    removeItem(e.target.parentElement.parentElement);
  } else {
    setItemToEdit(e.target);
  }
}

function removeItem(item) {
  if (confirm('Are you sure?')) {
    //remove item from DOM
    item.remove();
    //remove item from storage
    removeItemFromStorage(item.textContent);
  }
  resetUI();
}

function removeItemFromStorage(item) {
  let itemsFromStorage = getItemsFromStorage();
  //   console.log(itemsFromStorage);

  itemsFromStorage = itemsFromStorage.filter((i) => i !== item);
  //reset to localstorage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function setItemToEdit(item) {
  isEditMode = true;
  itemList
    .querySelectorAll('li')
    .forEach((i) => i.classList.remove('edit-mode'));

  item.classList.add('edit-mode');
  formBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item';
  itemInput.value = item.textContent;
  formBtn.style.backgroundColor = 'green';
}

function checkIfItemExists(item) {
  const itemsFromStorage = getItemsFromStorage();
  return itemsFromStorage.includes(item);
}

function clearItems(e) {
  if (clearButton) {
    if (confirm('Are you sure?')) {
      while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
      }
    }
  }
  localStorage.removeItem('items');
  resetUI();
}

function filterItems(e) {
  const text = e.target.value.toLowerCase();
  const items = itemList.querySelectorAll('li');

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();
    if (itemName.indexOf(text) !== -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

function resetUI() {
  itemInput.value = '';
  const items = itemList.querySelectorAll('li');
  items.length === 0
    ? ((itemFilter.style.display = 'none'),
      (clearButton.style.display = 'none'))
    : ((itemFilter.style.display = 'block'),
      (clearButton.style.display = 'block'));

  isEditMode = false;
  formBtn.innerHTML = `<i class="fa-solid fa-plus"></i> Add Item`;
  formBtn.style.backgroundColor = '#333';
}

function init() {
  //Events Listeners
  itemForm.addEventListener('submit', onAddItemmSubmit);
  itemList.addEventListener('click', onClickItem);
  clearButton.addEventListener('click', clearItems);
  itemFilter.addEventListener('input', filterItems);
  document.addEventListener('DOMContentLoaded', displayItems);
  resetUI();
}
init();
