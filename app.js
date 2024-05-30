const  myeyeclose = document.querySelector("#eye-close")
const myeyeopen = document.querySelector("#eye-open")
const InputBoxConfirmPassword = document.querySelector("")
const inputBox = document.querySelector("#password")

myeyeclose.addEventListener("click", function(){
   if(isEyeOpen){
    closeEye()
   }else{
    openEye()
   }
})

let isEyeOpen = false
function openEye(){
    isEyeOpen = true
    myeyeclose.classList.replace("fa-eye-slash","fa-eye")
    inputBox.type = "text"
}


function closeEye(){
    isEyeOpen = false
    myeyeclose.classList.replace("fa-eye","fa-eye-slash")
    inputBox.type = "password"
}