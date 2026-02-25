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
increaseBtn.onclick = function(){
    count++;
    countLap.textContent = count;
}
decreaseBtn.onclick = function(){
    count--;
    countLap.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLap.textContent = count;
}
subBtn.onclick = function(){
    let Age = Number(age.value);
     if(isNaN(Age) || Age <= 0 || Age >= 100)
{para.textContent =`you are not allowed to register ${name.value}`;
    paras.textContent =`you are not gay ${name.value}`;
}
     else if( Age>= 18){para.textContent =`hello ${name.value}`
if(checkBox.checked){if(radiO1.checked){paras.textContent =`you are  gay ${name.value} so suck it now 🥵`;}
    else if(radiO2.checked){paras.textContent =`you are  gay ${name.value} so kiss it now 😋`;}
     else if(radiO3.checked){paras.textContent =`you are  gay ${name.value} so touch it now 😝`;}
    else{paras.textContent =`you are  gay ${name.value} but you will not even see my dick 😡`;}
    }
    }
    else{para.textContent =`you are not allowed to register ${name.value}`
paras.textContent =`you are not allwed to be gay either ${name.value}`;}
    cleardata()
}
function cleardata(){
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