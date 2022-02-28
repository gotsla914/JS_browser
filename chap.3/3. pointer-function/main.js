function add(num1, num2) {
    return num1 + num2;
}


function divide(num1, num2) {
    return num1 / num2;
}

function surprise(operator) {
    const result2 = operator(2, 7); // add(2, 3);   // divide(2, 3)과 같다
    console.log(result2); //받아온 인자(operator)를 실행~ 그 결과값을 result에 할당한다
}

surprise(add);
surprise(divide);



//함수 내 고정값이 아닌 내가 매번 다른 값을 전달해보기

function surp(operator, num1, num2) {
    const result = operator(num1, num2);
    console.log(result);
}

surp(divide, 3, 7);


//------------------------------------------------


// 함수이름을 여기저기 전달하는 것은, 이 이름의 ref를 복사하는 것
// ref를 일반함수 호출 하듯이 ()괄호로 호출할 수 있다.


// 아무값을 전달하지않으면 undefined 상태
//함수 print()에 인자가 없으면 print를 계속 찍어도 안 나옴.
//    ↓인자는 내가 정의한 이름
function print(a, b) {
    console.log(`${a}, ${b}`);
}
print(8, 99);


const doSomething = add;
const result = doSomething(2, 3); //add(2, 3);과 같다
console.log(result);

const result2 = add(2, 3);
console.log(result2);



// 함수이름=함수 정의된 곳을 가리킴(ref가짐)
// 해당 함수 이름을 할당하면, ref가 doSome에 할당, 결국 똑같은 함수를 가리킴
// 함수 호출을 위해()를 하면, 똑같은 함수를 수행하는 것이 됨