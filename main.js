
// = #
//변수만들기//
var a = 10
console.log(a) // print

const b = 20 // 상수: 한번 정하면 바뀌지 않음
console.log(b)

a = a +40
console.log(a)

// + - = / //%

var num1 = 10
var num2 = 30
var s =  '$(num1) + $(num2) = $(num1 + num2)'
console.log(s)

//문자열

var s = "hello"
console.log(s[0]) // 인덱스
console.log(s.slice(1,3)) //슬라이딩

//리스트

var a = Array([1,2,3])
console.log(a)

var c = Array(10)  // 빈공간의 리스트 를 만들대 사용합니다
console.log(c)

//추가
a.push(5)
console.log(a)

//삭제
a.pop()
console.log(a)

//맨앞
a.shift(5)
console.log(a)

// 조건문

var a = 10
if (a == 10){
    console.log("같다")
}
else if (a < 10){
    console.log("작다")
}
else{
    console.log("같다")
}

//반복
for(var i = 0 ; i < 10 ; i+=2){
    console.log(i)
}

i = 0
while(i < 10){
    i++ // 1ㅂ만큼 더 간다.
    console.log(i)
}

for(var 앞 = 0 ; 앞 < 20 앞++){
    for(var 뒤 = 1; 뒤 < 20 ; 뒤++){
        console.log('${앞} * ${뒤} = ${앞*뒤;}')
    }
}

// 1 부터 3432 까지 숫자의 합을 반복문으로 구성하시오.

var num = 0
for(var i = 0 ; i < 3453 ; i++){
    num += i
}
console.log(num)

// 객체

var 공룡 = {
    x : 10,
    y : 20,
    w : 100,
    h : 100,
    draw(){
        console.log(this.x)
        console.log("그리기 함수")
    }
}

공룡.draw()