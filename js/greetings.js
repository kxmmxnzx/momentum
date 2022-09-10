const loginForm = document.querySelector("#login-form");

const LoginInput = loginForm.querySelector("input");

const h1 = document.querySelector("h1");

const logButton = document.querySelector("#login-out");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function handleSubmit(event){
    event.preventDefault();
    loginForm.classList.add("hidden");
    localStorage.setItem("username",LoginInput.value);
    paintGreetings();
}

function handlelogout() {
    logButton.classList.add(HIDDEN_CLASS);
    h1.classList.add(HIDDEN_CLASS);
    loginForm.classList.remove(HIDDEN_CLASS);
    localStorage.removeItem("username");
}

loginForm.addEventListener("submit",handleSubmit)
logButton.addEventListener("click",handlelogout);

function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    h1.innerText = `Hello, ${username}!`;
    h1.classList.remove(HIDDEN_CLASS);
    logButton.classList.remove(HIDDEN_CLASS);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASS);
}
else {
    paintGreetings();
}
