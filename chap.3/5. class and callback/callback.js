class Counter {
    constructor(runEveryFiveTimes) {
        this.counter = 0;
        this.callback = runEveryFiveTimes; //콜백함수 등록
    }

    increase() {
        this.counter++;
        console.log(this.counter);

        if (this.counter % 5 === 0) { // increase함수 자체에서 5로 나눴을때 5, 10, 15 ... 

            this.callback && this.callback(this.counter);
            // ↑ if (this.callback) {
            //      this.callback(this.counter);} 
        }
// constructor(생성자)의 runEveryFiveTimes -> this.callback 가리킴(참조함)
// increase 내부의 if - this.callback이 있으면(&&) 해당 콜백 실행 this.callback(this.counter)

    }
}
// 뭘 콜백할건데? printSomething!!!! 
// class coolCounter의
// this.counter = 0 이고
// this.callback은 printSomething을 참조한다 
// = 클래스 만들때 new Counter(printSomething!)

function printSomething(num) {
    console.log(`호이! ${num}`);
}
function alertNum(num) {
    alert(`남바! ${num}`);  //콜백함수를 만들어서 필요할때마다 new 클래스(여기에)전달한다!
}


// coolCounter obj안의 increase함수에 printSomething(출력)함수를 만들어서 전달
//                     ㄴ안에는 ++기능과 / if(5배수)시 runIf5Time(); /이 있다. if 충족시 runIf..를 부모함수에 전달
const coolCounter = new Counter(printSomething);

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();

coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase(alertNum);


// class 생성 목적? 
// 5의배수마다 원하는 글이 print되는 것
// 5의배수마다 알림창이 뜨게


// 콜백함수를 이용해서 class를 만들면? class 쓰는 사람이 맘대로 만들 수 있음
// 하나의 class로 다양한 obj를 만들어서 각각 다른 기능을 수행하는 obj를 만들 수 있다
// class에 원하는 기능을 다 정의하면 자세히 컨트롤하기 어렵고, 재사용성이 떨어지니까 callback함수를 이용해서 class를 만든다
// class를 완전체로 만들기 전의, 재조립이 가능한 레고처럼 만드는 게 좋다 = class 재사용 가능성이 많아짐
