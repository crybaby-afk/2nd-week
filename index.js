const itemInput = document.getElementById('itemInput');
const addItemBtn = document.getElementById('addItemBtn');
const itemList = document.getElementById('itemList');
const markPurchasedBtn = document.getElementById('markPurchasedBtn');
const clearListBtn = document.getElementById('clearListBtn');

addItemBtn.addEventListener('click', () => {
  const itemText = itemInput.value.trim();
  if (itemText !== '') {
    const li = document.createElement('li');
    li.textContent = itemText;

    li.addEventListener('click', () => {
      li.classList.toggle('selected');
    });

    itemList.appendChild(li);
    itemInput.value = '';
  }
});

markPurchasedBtn.addEventListener('click', () => {
  document.querySelectorAll('.selected').forEach(item => {
    item.classList.toggle('purchased');
    item.classList.remove('selected');
  });
});

clearListBtn.addEventListener('click', () => {
  itemList.innerHTML = '';
});
