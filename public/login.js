const loginbox = document.getElementById("box-login-1");
const divlogin = document.getElementById("div");
const plogin = document.createElement("p");
plogin.innerText = "login";
plogin.style.textAlign = "center";
plogin.style.lineHeight = "35px";
plogin.style.fontFamily = "fire-sans";
plogin.style.fontSize = "22px";
plogin.style.color='white'
document.querySelector("#div").appendChild(plogin);
const password = document.getElementById("password");
const toggleicon = document.getElementById("toggleicon");
const form = document.getElementById('form')
toggleicon.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    toggleicon.classList.remove("fa-eye");
    toggleicon.classList.add("fa-eye-slash");
  } else {
    password.type = "password";
    toggleicon.classList.remove("fa-eye-slash");
    toggleicon.classList.add("fa-eye");
  }
});
const username = document.getElementById("username");
const errtext = document.getElementById("errtext");
username.addEventListener("input", () => {
  if (username.value.trim() === "") {
    errtext.innerText = "فیلد نباید خالی باشد";
    errtext.style.color = "red";
  } else {
    errtext.innerText = "";
  }
});
username.addEventListener('click' , ()=>{
username.style.border='2px solid lightblue'
})
form.addEventListener('submit' , (e)=>{
e.preventDefault();
  if(username.value.trim() === "" || password.value.trim()===""){
    errtext.innerText='جای خالی را پر کنید'
    errtext.style.color='red'
    errtext.style.fontFamily='babes-font'
  }else{
    errtext.innerTex=' '
    window.location.href='succes.html'
  }
})

