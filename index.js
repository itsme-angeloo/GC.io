
const num1 = document.getElementById("nstp")
const num2 = document.getElementById("chem")
const num3 = document.getElementById('pe')
const num4 = document.getElementById('gecone')
const num5 = document.getElementById('gectwo')
const num6 = document.getElementById('gecthree')
const num7 = document.getElementById('cpeone')
const num8 = document.getElementById('cpetwo')
const num9 = document.getElementById('math')
const resultDisplay = document.getElementById('gwa')
const averageDisplay = document.getElementById('average')
let gwaDiscription = ''
/*const ave = parseFloat(num1.value) + parseFloat(num2.value) + parseFloat(num3.value) + parseFloat(num4.value) + parseFloat(num5.value) + parseFloat(num6.value) + parseFloat(num7.value) + parseFloat(num8.value) + parseFloat(num9.value) / 9*/

function computingGrade(){
    averageDisplay.innerHTML = (parseFloat(num1.value) + parseFloat(num2.value) + parseFloat(num3.value) + parseFloat(num4.value) + parseFloat(num5.value) + parseFloat(num6.value) + parseFloat(num7.value) + parseFloat(num8.value) + parseFloat(num9.value) )/ 9

    let randomNo = Math.floor(Math.random()*4)

    switch (randomNo){
        case 1: 
        gwaDiscription = "Magaral ng mabuti para ang buhay ay joke lang wag ka na mag aral"
        break;
        case 2: 
        gwaDiscription = "Sabay Sabay na tayo mag drop"
        break;
        case 3: 
        gwaDiscription = "Sumuko ka na"
    }


    resultDisplay.innerHTML = gwaDiscription 
}