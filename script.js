let nameError = document.getElementById('name-error')
let emailError = document.getElementById('email-error')
let phoneError = document.getElementById('phone-error')
let genderError = document.getElementById('gender-error')
let ageError = document.getElementById('age-error')
let errors = [nameError,emailError,phoneError,genderError,ageError]
var regEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
let regPhone = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/g;
function validate(){
    errors.forEach(element => {
        element.innerHTML = ''
    });
    
    var firstName = document.forms["signUp"]["first-name"].value;
    
    if(firstName == ''){
        errors[0].innerHTML = 'Enter a valid name.'
        return false;
    }

    var email = document.forms["signUp"]["email"].value;

    if(!regEmail.test(email)){
        errors[1].innerHTML = 'Enter a valid email id.'
        return false;
    }

    var phone = document.forms["signUp"]["phone"].value;

    if(!regPhone.test(phone)){
        errors[2].innerHTML = 'Enter a valid phone number.'
        return false;
    }

    var gender = document.forms["signUp"]["gender"];

    if((gender[0].checked == false) && (gender[1].checked == false) && (gender[2].checked == false)){
        errors[3].innerHTML = 'Please select an option.'
        return false;
    }
    
    var age = document.forms["signUp"]["age"].value;

    if(age <= 0){
        errors[4].innerHTML = 'Invalid Age.'
        return false;
    }

    if(age < 12){
        errors[4].innerHTML = 'Sorry you must be 12+.'
        return false;
    }

    if(age > 125){
        errors[4].innerHTML = 'Are you kidding me , you must be dead by now.'
        return false;
    }
    return true;
}