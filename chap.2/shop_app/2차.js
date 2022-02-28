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



//----------------------------------------
// li들어갈 컨테이너, 인풋창, 추가버튼 선택 정의하기
const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

// 1. 주요기능 - 함수 만들기

function onAdd() {
    const text = input.value;
    console.log(text);

    // 3. 아이템 생성함수 만들기
    const item = creatItem(text);

    if (text === '') {
        input.focus();
        return;
    };

    // 4. ul컨테이너 안에 끼워 넣기(자식노드에 item 추가)
    // 생성했으니 ul 자식노드로 등록하기! 끼워넣기
    items.appendChild(item);

    // 5. NEW item에 스크롤링 고정, input 초기화, 포커스 고정
    item.scrollIntoView({
        block: 'center'
    });

    input.value = '';
    input.focus();
};


// 3-1. li-item2개(이름,삭제버튼)/divider 만들고, 클래스 부여하기
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

    // 3-2. 생성 후 li(.item__row), div(.item) 안에 끼워넣기(자식노드로 추가)
    item.appendChild(name);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(divider);

    return itemRow; // 최종적으로 내가만든 itemRow (li) 리턴해주기
};


// 2. 버튼 핸들링 추가 - 클릭시 onAdd 함수 실행시켜줘
addBtn.addEventListener('click', () => {
    onAdd();
});


// 6. 엔터키 동작시 onAdd 함수 실행
input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        onAdd();
    };
});