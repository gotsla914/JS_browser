// 객체지향언어 class 정리

// 밖에서 보이는 것과 안 보이는 것 캡슐화(encapsulation)
// class로 인한 상속, 다양성 일어남 = 모든 것이 객체지향언어

// class는? fields, methods가 종합적으로 묶여있는 것(fields만 들어있는 경우:data class라고 함)
class Person {
    constructor(name, age) {
        this.name = name;   // 속성 fields
        this.age = age; 
    }
    speak() {               // 행동 methods 
        console.log(`${this.name}: hello!`);
    }
}

const ddori = new Person('ddori', '20');
console.log(ddori.name);
console.log(ddori.age);

// class 템플릿, 청사진 - 클래스에는 데이터가 없고,들어올 데이터들의 틀만 정의함. 한 번만 선언
// class를 이용, 새로운 사례instance를 생성하면 obj가 됨
// class는 정의만, 메모리에 올라가지 않음. 데이터를 넣으면 obj는 메모리에 올라감

// 캡슐화 encapsulation 
// * 클래스 class
// ㄴ 메소드 method
// ㄴ 필드 fields
//    (변수 variables)

// class : 붕어빵 틀
// instance of a class
// created many times
// data in : 팥 넣으면 팥붕, 크림 넣으면 크림붕어


class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }                좀 더 친절하게 ↓
        this._age = value < 0 ? 0 : value;
    }
};

// user가 나이값을 -1로 입력해도 0이 설정되게 만들어주는 것 
const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);


// getter, setter 를 쓰는 이유
// 사용자가 비정상적인 값 -0을 설정해도, 우리가 setter에서 0으로 만들어주는 것

// 자판기 : 기능 ? 동전 넣고 , 커피 만듦

// 커피머신 property 는 
// - number of coffee (field / integer 정수)
// - put coins (method)
// - make coffee (method)

// num of coffee는 최소 0부터
// 사용자가 coffee number를 설정하는게 좋을까? No 
// 이 때 number of coffee라는 property를 private로 만드는 것 = encapsulation





// Public and Private Fields (encapsulation)
class Experiment {
    publicField = 2;
    #privateField = 0; 
};
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // #private영역, 클래스 외부에서 접근X





// Static properties and methods
class Article {
    static publisher = '열일하는 코더';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// obj.publisher가 아닌 class명.publisher를 호출해야 한다.
// static은 new class 생성시 obj마다 할당 되는 것이 아닌, class 자체에 할당되어지므로
// class명.field(변수명)으로 호출 해야함

// 참고) obj상관없이(들어오는 데이터에 상관없이) 공통적으로 class에서 쓸 수 있는 것이면
// static, static method를 이용하는 게 메모리 성능에 좋다.






// 상속, 다양성(overwriting, 필요 함수만 재정의해서 사용가능)

// ex) 도형 그리기 앱 = w,h 등 shape 속성값을 재사용 : 수정할 때 shape만 손대면 됨

class Shape {
    constructor(width, height, color) { //fields
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() { // 필요시 method를 수정하면 다같이 바뀜
        console.log(`drawing ${this.color} color 얍!`); //method
    }

    getArea() {
        return this.width * this.height; //method
    }
}

// 동그라미 생성! extends 키워드 사용해서 class를 연장해준다.
class Rectangle extends Shape {} // shape - fields, method가 자동으로 포함됨
class Triangle extends Shape { // 필요한 함수를 끌어다가 overwriting 가능!
    draw() {
        super.draw(); // overwritng 이후 부모 메서드 호출 할 때!
        console.log('▶️');
    }

    getArea() {
        return (this.width * this.height) / 2; // 삼각형 나누기 추가
    }
}

const rectangle = new Rectangle(20, 20, 'yellow');
rectangle.draw();
console.log(rectangle.getArea()); // 400

const triangle = new Triangle(20, 20, 'blue');
triangle.draw();

console.log(triangle.getArea()); // 200

// instance of operator
// claass로 만들어진 새로운 instance 

// 왼 obj가 오 class로 만들어졌는지 확인하는 것 ---- boolean 값으로 리턴

console.log(rectangle instanceof Rectangle); // t
console.log(triangle instanceof Rectangle); // f
console.log(triangle instanceof Triangle); // t
console.log(triangle instanceof Shape); // t
console.log(triangle instanceof Object); // t
                                // ↑ 클릭 참고
// js는 모든 obj를 상속 - obj중 공통적으로 존재하는 어떤 method도 쓸수 있다
// 예를들어 toString이라는 method를 써서 overwriting 할 수도 있음!
console.log(triangle.toString());
