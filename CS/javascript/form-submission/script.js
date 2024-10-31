document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElemntById("userInfo");

    form.addEventListener('submit', function(event)){
        event.preventDefault()

        username = document.getElementById("name");
        email = document.getElementById("email");
        message = document.getElemnetById("message");

        if(username && email && message){
            alert('Form submitted successfully!\nName: ${username.value}\nEmail: ${email.value}\nMessage: ${message.value}');
        }
        else{
            alert('Fill all the fields in');
        }
    });
});
