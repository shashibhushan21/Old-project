
let nameError = document.getElementById('name-error');
let phoneError = document.getElementById('phone-error');
let submitError = document.getElementById('submit-error');
// console.log(  nameError,  phoneError, emailError, messageError, submitError );

function validateName(){
    let name = document.getElementById('contact-name').value;
    if(name.length == 0){
        nameError.textContent = 'Name is required';
        return  false;
    }
    if(name.length < 3){
        nameError.textContent = 'Name must be  at least 3 characters long';
        return  false;
    }
    if(!name.match(/^[A-Za-z]+((\s)?([A-Za-z])+)*$/)){
        nameError.textContent = ' Enter First Name Last Name';
        return false;
    }
    if(name.split(/\s+/).length < 1) {
        nameError.textContent = 'Please enter at least a first and last name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return  true;
    
}



function validatePhone(){
    let phone = document.getElementById('contact-phone').value.trim();
    if(phone.length === 0){
        phoneError.innerHTML = 'Phone no is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Phone no must be only 10 digits long.';
        return false;
    }

    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits please.';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

// function validateEmail(){
//     let email = document.getElementById('contact-email').value.trim();
//     if(email.length === 0){
//         emailError.textContent = 'Email is required';
//         return false;
//     }
//     // if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA]/)){
//     //     emailError.innerHTML  = 'Invalid email address.';
//     //     return false;
//     // }
//     if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
//         emailError.innerHTML  = 'Invalid email address.';
//         return false;
//     }
//     emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

// }

// function validateMessage(){
//     let message = document.getElementById('contact-message').value.trim();
//     let required = 3;
//     let left = required -  message.length;
//    if(left > 0){
//     messageError.innerHTML ='At least '+ left + ' more  characters required.';
//     return false;
//    }
//     messageError.innerHTML  = '<i class="fa-solid fa-circle-check"></i>';

// }

// function validateForm(){
//     if(!validateName() ||  !validatePhone() || !validateEmail() || !validateMessage()){
//         submitError.style.display = 'block';
//         submitError.innerHTML = 'Plese fix error to submit';
//         setTimeout(function(){submitError.style.display = 'none';},3000)
//         // submitError.innerHTML  = '<i class="fa-solid fa-circle-exclamation"></i>';
//         return false;
//     }else {
//         submitError.style.display = 'none';
//         return true;
//     }
// }




// function validateForm(){
//     if(!validateName() ||  !validatePhone() || !validateEmail() || !validateMessage()){
//         submitError.style.display = 'block';
//         submitError.innerHTML = 'Please fix errors to submit';
//         setTimeout(function(){submitError.style.display = 'none';},3000)
//         return false;
//     } else {
//         // All validations passed
//         submitError.style.display = 'none';
//         // Add code here to submit the form or show a success message
//         // For example:
//         // showSuccessPopup();
//         return true;
//     }
// }



function validateEmail() {
    const email = document.getElementById('contact-email').value;
    const emailError = document.getElementById('email-error');

    if (email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;  // Make sure to return true if validation passes
}

function validateMessage() {
    const message = document.getElementById('contact-message').value;
    const messageError = document.getElementById('message-error');
    const required = 30;
    const left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;  // Make sure to return true if validation passes
}



function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix errors to submit';
        setTimeout(function() {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    } else {
        // Form is valid, show the popup
        showPopup();
        return false; // Prevent form submission if you're handling it via AJAX
    }
}

function showPopup() {
    document.getElementById('success-popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('success-popup').style.display = 'none';
}


function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix errors to submit';
        setTimeout(function() {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    } else {
        // Form is valid, show the popup
        showSuccessPopup();
        return false; // Prevent form submission
    }
}

function showSuccessPopup() {
    // Create popup element
    var popup = document.createElement('div');
    popup.className = 'popup';
    popup.innerHTML = `
        <div class="popup-content">
         <img src="https://cdn-icons-png.flaticon.com/128/5610/5610944.png" alt="">
            <h2>Success!</h2>
            <p>Your form has been submitted successfully.</p>
            <button onclick="this.parentElement.parentElement.remove()">Close</button>
        </div>
    `;

    // Style the popup
    popup.style.position = 'fixed';
    popup.style.top = '50';
    popup.style.left = '50';
    popup.style.width = '100%';
    popup.style.height = '100%';
    popup.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    popup.style.display = 'flex';
    popup.style.justifyContent = 'center';
    popup.style.alignItems = 'center';
    popup.style.img =  'margin: 20px';


    // Style the popup content
    var popupContent = popup.querySelector('.popup-content');
    popupContent.style.backgroundColor = 'white';
    popupContent.style.padding = '20px';
    popupContent.style.borderRadius = '5px';
    popupContent.style.textAlign = 'center';

    // Add popup to body
    document.body.appendChild(popup);
}


// console.log(submitError);

