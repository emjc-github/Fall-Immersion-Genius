document.addEventListener("DOMContentLoaded", () => {
const form = document.getElemntById("userInfo")

    form.addEventListener('submit', function(event)){
    event.preventDefault()

    form = document.getElementById("name")
    form = document.getElementById("email")
    form = document.getElemnetById("message")

    if(document.getElementById("name") && document.getElementById("email") && document.getElemnetById("message"))
        alert('Form submitted successfully!\nName: ${username}\nEmail...');
    }
    else('Fill all the feilds\nName: ${username}\nEmail...');
}
