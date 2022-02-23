// 구현할 기능
// 1)텍스트 타이핑, 2)아이템 추가 2가지 방법(버튼클릭 or 엔터)
// 3)아이템은 스크롤링 되는 리스트에 등록, 4)휴지통 클릭 시 삭제

// + 버튼 / input 창 / item이 들어 갈 컨테이너(ul) 선택하기(정의하기)

// 만들어야할 로직
//1. 사용자 입력한 텍스트를 받아옴
//2. 새로운 아이템 생성(텍스트+삭제버튼)
//3. items 컨테이너(= shopList) 안에 새로 만든 아이템을 추가한다
//4. 인풋을 초기화 한다

// 주석은 코드를 그대로 설명하는 주석X
// 주석에는 함수의 의도, 사용법, 왜 사용해야하는지, 왜 이런 방식으로 작성했는지를 적는다.










const items = document.querySelector('.items');
const addBtn = document.querySelector('.footer__button');
const input = document.querySelector('.footer__input');

// 주요기능함수생성- 1.인풋 받아오기 2. li등록-함수생성 3.ul에 등록하기 4. 인풋 초기화,스크롤링 고정,포커스

function onAdd() {
    const text = input.value;
    console.log(text);


    if ( text === '' ) { 
        input.focus();
        return;
    };
    
    const item = creatItem(text);
    items.appendChild(item);

    input.value = '';
    item.scrollIntoView();
    input.focus();
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


    itemRow.appendChild(item);
    itemRow.appendChild(divider);

    item.appendChild(name);
    item.appendChild(deleteBtn);

    return itemRow;
};


addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keypress', (event) => {
    if ( event.key === 'Enter' ) {
        onAdd();
    };
});