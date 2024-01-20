// toggle sidebar
var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar(){
    if(!sidebarOpen)
    {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar()
{
    if(sidebarOpen)
    {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}

//login and signup form js

var signUpBtn = document.getElementById("signUpBtn");
var signInBtn = document.getElementById("signInBtn");
var signUp = document.getElementById("signUp");
var signIn = document.getElementById("signIn");
var signInSubmit = document.getElementById("signInSubmit");
var signUnSubmit = document.getElementById("signUpSubmit");
var nameField = document.getElementById("name");
var title = document.getElementById("title");

signInBtn.onclick = function(){
    nameField.style.borderBottom="none";
    nameField.style.maxHeight=0;
    title.innerHTML = "Sign In";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
    signInSubmit.classList.remove("disable");
    signUpSubmit.classList.add("disable");

}
signUpBtn.onclick = function(){
    nameField.style.borderBottom="1px solid #d1cedf"
    nameField.style.maxHeight="60px";
    title.innerHTML = "Sign Up";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
    signInSubmit.classList.add("disable");
    signUpSubmit.classList.remove("disable");
}

// visibility on and off 

function passwordToggle()
{
    var passwordInput = document.getElementById("passwordInput");
    var hide1= document.getElementById("hide1");
    var hide2= document.getElementById("hide2");
    

    if (passwordInput.type === 'password')
    {
        passwordInput.type = "text";
        hide1.style.display="block";
        hide2.style.display="none";
    }
    else{
        passwordInput.type = "password";
        hide1.style.display="none";
        hide2.style.display="block";
    }
}




