const submit = document.getElementById("form-signin");

const reEmail = new RegExp("@")

const validate = (test, field, errorField, value) => {
    let error = document.getElementById(errorField);
    console.log(test);
    if (value == ""){
        error.textContent = field +" cannot be blank."
        error.style.color = "red"
    } else if (!test) {
        error.textContent = field +" is not valid."
        error.style.color = "red"
    } else {
        error.textContent = ""
    }
}

const mainValidateFunction = () => {
    let eMailValue = document.getElementById("email").value
    const eMailTest = reEmail.test(eMailValue) 
    let emailValid = validate(eMailTest, "Email","errorEmail", eMailValue)

    if (emailValid) {
        window.location = "families.html";
    }
}

submit.addEventListener("click", function (e) {
    e.preventDefault();
    mainValidateFunction();
    console.log("Clicked");
  });