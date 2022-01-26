const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    items.push({ text, done: false });
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items));
    this.reset();
}

function populateList(plates = [], plateList) {
    plateList.innerHTML = plates.map((plate, index) => {
        return `
            <li key='${index}'>
                <input type='checkbox' data-index=${index} id='item${index}' ${plate.done ? 'checked' : ''} />
                <label for='item${index}'>${plate.text}</label>
            </li>
        `;
    }).join('');
}

function updateChecklist(e) {
    const element = e.target;
    if (!element.matches('input')) return;
    const index = element.dataset.index;
    items[index].done = !items[index].done;
    updateLocalStorage(items);
}

if (items.length !== 0) populateList(items, itemsList);

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', updateChecklist);