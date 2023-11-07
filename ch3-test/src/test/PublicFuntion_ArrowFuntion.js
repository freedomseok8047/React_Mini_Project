// 화살표 함수, 일반 함수 차이점 확인해보기

// ex1)
// setTimeout 이 함수를 기준으로 모양 확인 

// es6 화살표 함수로 바로 자동 완성.
// 첫 매개변수 : 콜백 함수,
// 두번쨰 매개변수 : 특정 시간, 3000ms -> 3초
// 특정 시간 후, 콜백 함수 동작.
// setTimeout(() => {
//     console.log("화살표 함수 테스트 setTimeout")
// }, 3000);


// setTimeout(function test() {
//     console.log("일반 함수 테스트 setTimeout")
// }, 2000);


// 차이점 
// 일반 함수, 화살표 함수 가리키는 this의 영향권.

// 일반함수 this 확인.
function testDog() {
    this.name = "멍멍이1";
    return{
        name : "멍멍이2",
        // 일반함수로 사용
        sound : function(){
            console.log(this.name + ": 멍멍!!!!"); //멍멍이2: 멍멍!!!!
        }
    }
} 

// 실행 테스트
// const testdog = new testDog();
// testdog.sound();

// 결론, 일반함수에서 this는 자신이 종속된 객체를 가리킴 -> 가장 가까운 객체

//==================================================================================================

// 화살표 함수 this확인 
// -> testDog2
function testDog2() {
    this.name = "멍멍이1";
    return{
        name : "멍멍이2",
        // 화살표함수 사용
        sound: () =>
            console.log(this.name + ": 멍멍!!!!") //멍멍이1: 멍멍!!!!
    };
} 

// 실행 테스트
const testdog2 = new testDog2();
testdog2.sound();

// 결론, 화살표 함수에서 this는 자신이 종속된 인스턴스를 가리킴 -> 멍멍이1