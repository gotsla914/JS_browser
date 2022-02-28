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

//-----------------------------------

// + 버튼 / input 창 / item이 들어 갈 컨테이너(ul) 선택하기(정의하기)

//1. 사용자 입력한 텍스트를 받아옴


// 사용자가 아무것도 입력 안 했을 때, 그대로 함수를 나갈 것 + 포커스

//2. 새로운 아이템 생성(텍스트+삭제버튼)
//아이템 생성함수 실행

//3. items 컨테이너(= shopList) 안에 새로 만든 아이템을 추가한다
//만든 아이템을 컨테이너 안에 끼워넣기


//   +추가!! 자동으로 스크롤링 따라가기
// 인풋초기화 하기 전에 새로 추가된 아이템으로 자동 스크롤링

//4. 인풋을 초기화 한다


// 2-1. creatItem 함수 만들기(전달인자? 지정)


//맨 처음에 있는 li 요소 추가
//li에 클래스 부여

// item, divider도 각각 추가해야함

//아이템 만듦
// 아이템안에 span 만듦

// innerText에 전달받은 text를 할당해줌
//여기 text -> creatItem에 전달 

//삭제버튼만듬. 버튼은 변동이유가 없으므로 creatElement 사용안함, 수동으로 작성


//디바이더 만듬


//만들고 끝 아님! 아이템 안에 넣어줘야함(순서)
//최종적으로 내가 만든 itemRow 리턴해주기


// 1-1. 버튼 핸들링 - 버튼이 클릭 되면 onAdd함수 실행해줘


// 마지막-엔터키로 인풋 내용 등록
// 어떤키가 눌렸는지 알려면 event를 바라보면 됨


// ------------------------------------------ 시작!


// 버튼, 아이템 컨테이너(ul), 인풋창 선택 정의하기
const items = document.querySelector('.items');
const addBtn = document.querySelector('.footer__button');
const input = document.querySelector('.footer__input');


//1.텍스트 받아오기
//2.아이템생성(텍스트+삭제버튼) - 생성 함수 만들기
//3.아이템 끼워넣기
//4.인풋 초기화 및 스크롤링 고정
//5. 생성했으니 마지막으로 등록해주고, item list 리턴 해주기(li 찾아서 리턴) 


// onAdd 함수 생성
function onAdd() {
    const text = input.value;
    console.log(text);

    if (text === '') {
        input.focus();
        return;
    }

    const item = creatItem(text); // 냅다 함수생성 함수 뭐?어저라구 //함수ㅡ만들어야함


    //만든 item을 컨테이너에 끼워 넣기
    items.appendChild(item); //items의 자식노드에 item 추가함

    item.scrollIntoView({ block: 'center' });
    //4. 인풋을 초기화 한다
    input.value = '';
    input.focus();


};

function creatItem(text) { // createElement는 태그네임 만들어줌-클래스 지ㅏ정해주는 이유이기도 함
    // 클래스명 부여할 때 - 정의x 필요없음(새로 할당할 필요 없으니, .선택자 안씀!!)
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const name = document.createElement('span');
    name.setAttribute('class', 'item__name');
    name.innerText = text;

    // text를 할당해줌, html 중에 어디에?! ----> 이름 받았으면 전달해야지!

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete');
    deleteBtn.innerHTML = '<i class="xi-trash"></i>';

    const divider = document.createElement('div');
    divider.setAttribute('class', 'divider');

    // 1) innerText,  2) innerHTML의 차이
    // 1) 태그명 포함 전체 문장 찾아옴                 --- text는 text그대로 가져옴 /해석x
    // 2) HTML로 출력되는 것만 읽어옴(사람이 보는 글자만) --- 태그 해석O 아이콘 출력O

    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow); //부모.리무브차일드(지울 자식변수명);
    });



    // 아이템 행 ---- item묶음(이름,삭제버튼) / 디바이더 생성

    const itemDivider = document.createElement('div')
    itemDivider.setAttribute('class', 'divider');


    //creatItem함수 내에서 생성한 것들 끼워넣어줘야함(등록), 후 리턴해주기
    item.appendChild(name); //아이템(div)의 자식노드로 (이것을)추가
    item.appendChild(deleteBtn);

    itemRow.appendChild(item); //item div를 itemRow행 자식노드에 추가
    itemRow.appendChild(itemDivider); //divider div도 추가

    // 모두 등록한 후 마지막 itemRow 행(생성된 li 전체)를 리턴
    return itemRow;


};


// 푸터 버튼 핸들링 추가 - 클릭시 onAdd함수 실행해줘
addBtn.addEventListener('click', () => {
    onAdd();
});


input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        onAdd();
    }
});