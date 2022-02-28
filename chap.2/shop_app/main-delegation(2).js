// Event Delegation (2차)

const items = document.querySelector('.items');
const addBtn = document.querySelector('.footer__button');
const input = document.querySelector('.footer__input');
const form = document.querySelector('.new_form');

form.addEventListener('submit', event => {
    event.preventDefault();
    onAdd();
});

function onAdd() {
    const text = input.value;
    if (text === '') {
        input.focus();
        return;
    }

    const item = creatItem(text); 
    items.appendChild(item);
    item.scrollIntoView({
        block: 'center'
    });

    input.value = '';
    input.focus();
};


// 리팩2) 
let id = 0; // 실무에선 UUID 쓰도록 해라
// 2-1. creatItem 함수 만들기(전달인자? 지정)
function creatItem(text) {
    const itemRow = document.createElement('li'); //맨 처음에 있는 li 요소 추가
    itemRow.setAttribute('class', 'item__row'); //li에 클래스 부여
    itemRow.setAttribute('data-id', id);
    itemRow.innerHTML = `
        <div class="item">
            <span class="item__name">${text}</span>
            <button class="item__delete">
                <i class="xi-trash" data-id=${id}></i>
            </button>
        </div>
        <div class="divider"></div>`;
    id++;
    return itemRow;
};

items.addEventListener('click', event => {
    const id = event.target.dataset.id;
    if (id) {
        const toBeDelete = document.querySelector(`.item__row[data-id="${id}"]`);
        toBeDelete.remove();
    }
});