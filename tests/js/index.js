const countLap = document.querySelector(".countlab");
const increaseBtn = document.getElementById("increasebtn");
const resetBtn = document.getElementById("resetbtn");
const decreaseBtn = document.getElementById("decreasebtn");
const radiO1 = document.getElementById("radio1");
const radiO2 = document.getElementById("radio2");
const radiO3 = document.getElementById("radio3");
const checkBox = document.getElementById("checking");
const age = document.getElementById("age")
const name = document.getElementById("input1")
const subBtn = document.getElementById("sup")
const para = document.querySelector(".results")
const paras = document.querySelector(".resulting")
let count = 0;
increaseBtn.onclick = function () {
    count++;
    countLap.textContent = count;
}
decreaseBtn.onclick = function () {
    count--;
    countLap.textContent = count;
}
resetBtn.onclick = function () {

    countLap.textContent = count;
}
subBtn.addEventListener('click', () => {
    let Age = Number(age.value);
    if (isNaN(Age) || Age <= 0 || Age >= 100) {
        para.textContent = `you are not allowed to register ${name.value}`;
        paras.textContent = `you are not gay ${name.value}`;
    }
    else if (Age >= 18) {
        para.textContent = `hello ${name.value}`
        if (checkBox.checked) {
            if (radiO1.checked) { paras.textContent = `you are  gay ${name.value} so suck it now 🥵`; }
            else if (radiO2.checked) { paras.textContent = `you are  gay ${name.value} so kiss it now 😋`; }
            else if (radiO3.checked) { paras.textContent = `you are  gay ${name.value} so touch it now 😝`; }
            else { paras.textContent = `you are  gay ${name.value} but you will not even see my dick 😡`; }
        }
    }
    else {
        para.textContent = `you are not allowed to register ${name.value}`
        paras.textContent = `you are not allwed to be gay either ${name.value}`;
    }
    cleardata()
})
function cleardata() {
    name.value = '';
    age.value = '';
    checkBox.checked = false;
    radiO1.checked = false;
    radiO2.checked = false;
    radiO3.checked = false;
}
function clearText(element) {
    element.textContent = "";
}

let x = ["hi bITch", "WoW", "hahaha"]
console.log(x.join("_").trim().toLocaleUpperCase())
var y = x.findIndex((el) => el == "wow")
console.log(y)

// code = ()=>{
//     var Xmlhttp = new XMLHttpRequest()
//     Xmlhttp.onreadystatechange = function(){
//         if(this.readyState == 4 && this.status == 200){
//             console.log(this.responseText)
//         }
//     }
//     Xmlhttp.open( "get","https://dummyjson.com/products" , false)
//     Xmlhttp.send()
// }
// code()

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    compareAge(other) {
        if (other.age > this.age) {
            return `${other.name} is older than me`
        }
        else if (other.age < this.age) {
            return `${other.name} is younger than me`
        }
        else { return `${other.name} is same age as me` }

    }
}
const p1 = new Person("Samuel", 24)
const p2 = new Person("joel", 36)
const p3 = new Person("lily", 24)


cardHide = (str) => {
    //   return ` ${'*'.repeat(str.length - 4)}${str.split("").splice(str.length - 4).join("")}`
    //   return ` ${'*'.repeat(str.length - 4)}${str.slice(str.length - 4)}`
    return str.slice(str.length - 4).padStart(str.length, "*")
    //   return str.replace(str.slice(0,str.length - 4),"*".repeat(str.length - 4))
}
console.log(cardHide("1234123456785678"))
console.log(cardHide("8754456321113213"))
console.log(cardHide("35123413355523"))

// function fun1() {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(1)
//         }, 2000)
//     })
// }
// function fun2() {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(2)
//         }, 4000)
//     })
// }
// function fun3() {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(3)
//         }, 600)

//     })
// }
// function fun4() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(4)
//         }, 1000)
//     })
// }
// function fun5() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(5)
//         }, 1000)
//     })
// }

// fun1().then(value => {console.log(value); return fun2()}).then(value => {console.log(value); return fun3()}).then(value => {console.log(value); return fun4()}).then(value => {console.log(value); return fun5()}).then(value => {console.log(value)}).catch(err => console.error(err))



function Ajax() {
    return new Promise((resolve, reject) => {
        let Xhttp = new XMLHttpRequest()
        Xhttp.onreadystatechange = function () {
            if (Xhttp.readyState === 4) {
                if (Xhttp.status === 200) { resolve(JSON.parse(Xhttp.responseText)) }
                else {
                    reject(`Error: ${Xhttp.status}`)
                }
            }

        }
        Xhttp.open("GET", "http://127.0.0.1:5500/json/test.json")
        Xhttp.send()
    })
}

function Ajax1() {
    return new Promise((resolve, reject) => {
        let Xhttp = new XMLHttpRequest()
        Xhttp.onreadystatechange = function () {
            if (Xhttp.readyState === 4) {
                if (Xhttp.status === 200) { resolve(JSON.parse(this.responseText)) }
                else {
                    reject(`Error: ${Xhttp.status}`)
                }
            }
        }
        Xhttp.open("GET", "http://127.0.0.1:5500/json/test.json")
        Xhttp.send()
    })
}

async function test() {
    try {
        const ajx = await Ajax()
        console.log( ajx.map(value => value.name ))
    } catch (err) {
        console.error(err)
    }
    try {
        const ajx1 = await Ajax1()
        console.log( ajx1.map(value => value.name ))
    } catch (err) {
        console.error(err)
    }
}
test()



// function compact(arr) {
//     let arrs = [
//         { name: "ahmed", age: 59, state: "alive" },
//         { name: "jo", age: 39, state: "dead" },
//         { name: "mina", age: 99, state: "alive" },
//         { name: "jana", age: 9, state: "alive" },
//     ]

//    let mo = JSON.stringify(arrs)
//    console.log(JSON.parse(mo))
//     return arr.reduce((acc, curr) => typeof (curr) === "number" ? [...acc, curr] : acc, [])
// }
// console.log(compact([0, 1, false, 2, "", 3]))


// class Rectangle {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     getArea() { return `hello ${this.name}` }
//     getPerimeter() { return `${this.age} is good age` }
// }


// class Circle extends Rectangle {
//     constructor(name, age) {
//         super(name, age)
//         this.age = age;
//         this.name = name;
//     }
// }

// let rec = new Rectangle("jo", 20)
// console.log(rec.getPerimeter())

// let circy1 = new Circle("mo", 11)
// console.log(circy1.getPerimeter());

// let circy = new Circle("hello", 4)
// console.log(circy.getPerimeter());



// class Kojo {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     set name(name) {
//         if (typeof name === "string") {
//             this._name = name;
//         } else {
//             console.log("Enter Valid Data")
//         }

//     }
//     set age(age) {
//         if (typeof age === "number") {
//             this._age = age;
//         } else {
//             console.log("Enter Valid Data")
//         }
//     }
//     ty() {
//         console.log("hi there")
//     }
//     get age() {
//         return this._age
//     }
//     get name() {
//         return this._name
//     }
// }
// const tryy8 = new Kojo("looser", 33);
// console.log(tryy8)
// console.log(tryy8.age)

// class Kajo {
//     #name;
//     #age;

//     constructor(name, age) {
//         this.name = name; // هيمر على setter
//         this.age = age;
//     }

//     set name(value) {
//         if (typeof value === "string") {
//             this.#name = value;
//         } else {
//             console.log("Enter valid name");
//         }
//     }

//     get name() {
//         return this.#name;
//     }

//     set age(value) {
//         if (typeof value === "number") {
//             this.#age = value;
//         } else {
//             console.log("Enter valid age");
//         }
//     }

//     get age() {
//         return this.#age;
//     }

//     ty() {
//         return this.age
//     }
// }



