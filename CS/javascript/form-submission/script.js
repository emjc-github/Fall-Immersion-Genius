document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElemntById("userInfo")

    form.addEventListener('submit', function(event)){
        event.preventDefault()

    name = document.getElementById("name")
    email = document.getElementById("email")
    message = document.getElemnetById("message")

    if(document.getElementById("name") && document.getElementById("email") && document.getElemnetById("message"))
        alert('Form submitted successfully!\nName: ${username}\nEmail...');
    }
    else(document.getElementById("name") && document.getElementById("email") && document.getElemnetById("message"))
        alert('Fill all the feilds\nName: ${username}\nEmail...');
}
