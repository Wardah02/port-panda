let emailElement = document.querySelector('#email');
console.log(emailElement);
let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function (e){
    e.preventDefault();
    console.log('clicked button 123');

    let emailValue = emailElement.value;
    let messageValue = messageElement.value;

    if(emailValue.includes('@')){
        //all good
        alert('thank you for your message');
    }else{
        alert('oh no. That does not look like a valid email address. Please try again.');
    }
})