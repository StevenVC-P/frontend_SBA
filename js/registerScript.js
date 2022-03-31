const submit = document.getElementById("registerForm");

const reNumbers = new RegExp("[0-9]+")
const reEmail = new RegExp("@")
const reSpecial = new RegExp("[!`#$%^&*]+")

const validate = (test, field, errorField, value) => {
    let error = document.getElementById(errorField);
    console.log(test);
    if (value == ""){
        error.textContent = field +" cannot be blank."
        error.style.color = "red"
        return false
    } else if (!test) {
        error.textContent = field +" is not valid."
        error.style.color = "red"
        return false
    } else {
        error.textContent = ""
        return true
    }
}

const mainValidateFunction = () => {
    let userNameValue = document.getElementById("userName").value
    const reUserName = new RegExp("(" + reNumbers.source + ")|(" + reEmail.source + ")|(" + reSpecial.source + ")")
    const userNameTest = reUserName.test(userNameValue) 
    let nameValid = validate(!userNameTest, "User Name","errorUserName", userNameValue)

    let eMailValue = document.getElementById("email").value
    const eMailTest = reEmail.test(eMailValue) 
    let emailValid = validate(eMailTest, "Email","errorEmail", eMailValue)

    let passwordValue = document.getElementById("password").value
    let passwordvalid = validate(true, "Password","errorPassword", passwordValue)
    
    let confirmPasswordValue = document.getElementById("confirmPassword").value
    let confirmPasswordValid = validate(true, "Confirm Password","errorConfirmPassword", confirmPasswordValue)

    if (passwordValue != confirmPasswordValue) {
        confirmPasswordError.textContent = "Passwords must match."
        confirmPasswordError.style.color = "red"
        confirmPasswordValid=false
    }

    if (nameValid && emailValid && passwordvalid && confirmPasswordValid) {
        window.location = "families.html";
    }
}

submit.addEventListener("click", function (e) {
    e.preventDefault();
    mainValidateFunction();
    console.log("Clicked");
  });