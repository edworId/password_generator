let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerpassword = document.querySelector("#container-password")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

// function to update the size with slider value;

slider.oninput = function() {
    sizePassword.innerHTML = this.value; 
}

// This function will generate with loop to get the random characters step by step; 

function generatePassword(){

    let pass = '';
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    
    console.log(pass)
    containerpassword.classList.remove("hide");
    password.innerHTML = pass;
    novaSenha = pass;
}

function copyPassword(){
    
    navigator.clipboard.writeText(novaSenha).then(function() {
        alert("Copied to clipboard successfully!");
      }, function(error) {
        alert("ERROR:\n"+error);
      });;
}
