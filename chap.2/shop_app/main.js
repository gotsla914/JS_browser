// 핸들링 - 인풋창, add버튼, ul컨테이너
// 로직
// 주요 함수만들기 - 인풋받아오기, 아이템생성(생성함수짜기,끼워넣기)후 끼워넣기
// 인풋 스크롤링 고정되게, 인풋내용 초기화, 인풋창 포커스 고정, 엔터 기능넣기

const items = document.querySelector('.items');
const addBtn = document.querySelector('.footer__button');
const input = document.querySelector('.footer__input');

function onAdd() {
    const text = input.value;
    console.log(text);


    if (input.value === ''){
        input.focus();
        return;
    };

    const addItem = creatItem(text);
    items.appendChild(addItem);

    input.focus();
    input.value = '';
    addItem.scrollIntoView({ block: 'center' });
};

function creatItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const name = document.createElement('span');
    name.setAttribute('class', 'item__name');
    name.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete');
    deleteBtn.innerHTML = '<i class="xi-trash"></i>';

    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow); 
    });


    const divider = document.createElement('div');
    divider.setAttribute('class', 'divider');

    //아하! itemRow(li)는 주요함수 onAdd에서 끼워넣을거라서!!!! 부모로만 불려지고 끝!인듯
    itemRow.appendChild(item);
    itemRow.appendChild(divider);

    item.appendChild(name);
    item.appendChild(deleteBtn);

    // 추가한 목록 전체인 li(itemRow를 리턴)
    return itemRow;
};

addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        onAdd();
    };
});