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


function onAdd() {
    //1. 사용자 입력한 텍스트를 받아옴
    const text = input.value;

    if (text === '') {
        input.focus();
        return;
    } // 사용자가 아무것도 입력 안 했을 때, 그대로 함수를 나갈 것 + 포커스

    //2. 새로운 아이템 생성(텍스트+삭제버튼)
    const item = creatItem(text); //아이템 생성함수 실행

    //3. items 컨테이너 안에 새로 만든 아이템을 추가한다
    items.appendChild(item); //만든 아이템을 컨테이너 안에 끼워넣기


    //   +추가!! 자동으로 스크롤링 따라가기
    // 인풋초기화 하기 전에 새로 추가된 아이템으로 자동 스크롤링

    item.scrollIntoView({ block: 'center' });
    //4. 인풋을 초기화 한다
    input.value = '';
    input.focus();
};

// 2-1. creatItem 함수 만들기(전달인자? 지정)
function creatItem(text) {
    const itemRow = document.createElement('li'); //맨 처음에 있는 li 요소 추가
    itemRow.setAttribute('class', 'item__row'); //li에 클래스 부여

    // item, divider도 각각 추가해야함

    const item = document.createElement('div'); //아이템 만듦
    item.setAttribute('class', 'item'); // 클래스 부여

    const name = document.createElement('span'); // 아이템안에 span 만듦
    name.setAttribute('class', 'item__name'); // 클래스 부여
    name.innerText = text; // innerText에 전달받은 text를 할당해줌
    //여기 text -> creatItem에 전달 (( 2.creatItem(text) )) 그 텍스트를 이용해서 item__name의 innerText의 text로 설정해준다

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete');
    deleteBtn.innerHTML = '<i class="xi-trash"></i>'; //삭제버튼은 변동이유가 없으므로 creatElement 사용안함, 수동으로 작성
    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow);
        input.focus();
    })

    const itemDivider = document.createElement('div'); //디바이더 만듬
    itemDivider.setAttribute('class', 'divider'); // 클래스 부여

    //만들고 끝 아님! 아이템 안에 넣어줘야함(순서)
    //


    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);

    item.appendChild(name);
    item.appendChild(deleteBtn);
    return itemRow; //최종적으로 내가 만든 itemRow 리턴해주기

};


// 1-1. 버튼 핸들링 - 버튼이 클릭 되면 onAdd함수 실행해줘
addBtn.addEventListener('click', () => {
    onAdd();
});


// 마지막-엔터키로 인풋 내용 등록
// 어떤키가 눌렸는지 알려면 event를 바라보면 됨
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        onAdd();
    }
});