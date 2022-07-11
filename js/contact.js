function getData() {
    let name = document.getElementById("input-name").value
    let phone = document.getElementById("input-phone").value
    let email = document.getElementById("input-email").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value


    if (!name) {
        alert("Name cannot be empty")
    } else if (!phone) {
        alert("phone cannot be empty")
    } else if (!email) {
        alert("email cannot be empty")
    } else if (!subject) {
        alert("subject cannot be empty")
    } else if (!message) {
        alert("message cannot be empty")
    }

    let emailReceiver = "muhamadsubkhan99@gmail.com"

    let a = document.createElement('a')

    a.href = `mailto:${emailReceiver}?subject=${subject}&body= Hello my name ${name},let's talk with me about ${subject} with me asap`
    a.click()
}