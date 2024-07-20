
const passwordText = document.querySelector('#passwordText')


const specialCharter = document.querySelector('#specialChar')


const number = document.querySelector('#number')


const copyButton=document.querySelector('#copyBtn');




const form = document.querySelector('#passwordForm')
const range = document.getElementById('range')
const passwordLength = document.getElementById('passwordLength')
form.addEventListener('submit', (e) => generatePassword(e))
range.addEventListener('input', handleRange)
copyButton.addEventListener('click',copyPasswordValue)




const alphabetsLowercase = "abcdefghijklmnopqrstuvqxyx"
const alphabetsUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

const digits = "0123456789"

const specialChar = " !@#$%^&*()_+-=[]{}|<>?/~ "

let password = ''



handleRange()

function handleRange() {

    passwordLength.innerText = range.value
}

function randomPassword(length) {
    let passwordString = alphabetsLowercase + alphabetsUppercase

    if (specialCharter.checked) {
        passwordString += specialChar
    }
    if (number.checked) {
        passwordString += digits;
    }
    let passwordGenerate = ''
    for (let i = 0; i < length; i++) {


        const randomIndex = Math.floor(Math.random() * passwordString.length);
        passwordGenerate += passwordString[randomIndex];
    }


    passwordText.style.fontFamily = 'Arial, sans-serif'
    passwordText.value = passwordGenerate;
    password=passwordGenerate;

}




function generatePassword(e) {
    e.preventDefault()
    randomPassword(range.value)
}


function copyPasswordValue(){
    // console.log(password)
    navigator.clipboard.writeText(password)

    copyButton.innerText='copied'
    passwordText.style.backgroundColor='gray'
    setTimeout(()=>{
        copyButton.innerText='copy'
        passwordText.style.backgroundColor='white'
    },1000)
}



