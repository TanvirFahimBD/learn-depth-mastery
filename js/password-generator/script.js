const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

const allCharacters = upperCase + lowerCase + numbers + symbols;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while(password.length < length){
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    
    passwordBox.value = password;
}


function copyPassword() {
    passwordBox.select();    
    passwordBox.setSelectionRange(0, 9999);
    if(passwordBox.value === ""){
        Swal.fire({
            position: "top-end",
            icon: "error",
            title: "No Password to Copy!",
            showConfirmButton: false,
            timer: 1500
        });
        return;
    }else{
        navigator.clipboard.writeText(passwordBox.value);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Password Copied!",
            showConfirmButton: false,
            timer: 1500
        });
    }
    
}