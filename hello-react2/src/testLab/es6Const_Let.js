function test() {
    var a = "hello";
    if(true){
        var a = "hi";
        console.log(a);
    }
    console.log(a)
}

// 함수 사용
test();


function test2() {
    let a = "hello";
    if(true){
        let a = "hi";
        console.log(a);
    }
    console.log(a)
}

test2();

