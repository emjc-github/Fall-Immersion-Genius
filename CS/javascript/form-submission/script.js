document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElemntById("userInfo")

    form.addEventListener('submit', function(event)){
        event.preventDefault()

        username = document.getElementById("name")
        email = document.getElementById("email")
        message = document.getElemnetById("message")

        if(("name") && ("email") && ("message"))
        alert('Form submitted successfully!\nName: ${username.value}\nEmail: ${email.value}\nMessage: ${message.value}');
        }
        else(("name") && ("email") && ("message"))
            alert('Fill all the feilds in\nName: ${username.value}\nEmail: ${email.value}\nMessage: ${message.value}');
        }
