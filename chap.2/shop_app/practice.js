// const nameBlock = prompt('이름을 입력하렴', '디폴트값-인수');
// alert(`반가워요 ${nameBlock}님`);

// const adult = confirm(`하이요?`);
// console.log(adult);

// const mathScore = prompt(`수학 몇점?`);
// const engScore = prompt(`영어 몇점?`);  <---- string 타입이라, 출력값 9030 나옴
const mathScore = 90;
const engScore = 30;


const result = (mathScore + engScore) / 2;
console.log(result);

let a = 10;
let aResult = --a;
console.log(aResult);


console.log(10 > 5);
console.log(10 == 5);
console.log(10 != 5);

const c = 1;
const d = '1';

console.log(c === d);
console.clear();

// if, (else if), else
//age = prompt(`나이가?`); // 문자형 타입! else if에서 숫자형으로 거르기 안되네

const age = 19;

if(age > 19) {
  console.log(`환영합니다 ${age}살이시네요! 참어른!`); 
}
else if(age === 19){
    console.log(`${age} 청춘, 수능 잘 치셈 -또잼민-`);
} else { // else가 없다면? if (age <= 19)
    console.log(`안돼 돌아가. ${age}살은 가랏!`);
};

console.log('---------------');

const ages = 10;
const isAdult = ages > 19;


if(!isAdult) {
    console.log('돌아가소');
};

console.log('---------------');
console.log('---------------');

const named = 'Jennie';
const gender = 'F';
const adult = true;

// 남자이고, 이름이 Mike이거나 성인이면 통과
        // 남자인 동시에 이름이 mike or 성인
// if(gender === 'M' && named === 'Mike' || adult ) {
    //연산자 우선순위때문에 and가 먼저 평가됨, 성인이라서 뒤는 무조건 true가 나오기때문에 이름,성별 달라도 true나옴!

if(gender === 'M' && (named === 'Mike' || adult )) {
    console.log('통과!')
} else {
    console.log('돌아가');
};