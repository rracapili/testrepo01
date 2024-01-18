console.log("Welcome to Javascript! Programming!")

var a=100
console.log(typeof a)
var a = "Hello World"
console.log(typeof a)

console.log(a)

let b = 200
const c = 500
//c = 800
console.log(c)
b = "Hello World"

console.log(b)
{
    let b = 300
    console.log(b)
}
console.log(b)

console.log("-----------------------------------------------------")


function sayHello(){
    console.log("Hello, Ronald!")
}
sayHello()

function add(a,b){
    return a+b
}

console.log(add(10,20))

console.log(typeof (add))

//Object Literal

var person = {
    name: "Ronald",
    age: 33,
    address: {
        city: "Thronhill",
        state: "Ontario"
    },
    sayHello2: function() {
        console.log(`Hello, ${this.name}`)
    }
}

person.sayHello2()