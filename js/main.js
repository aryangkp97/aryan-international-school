function handleSubmit(event) {
    event.preventDefault();

    emailjs.send(
        "service_ft3jlt7",
        "template_5cizpr9",
        {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        }
    )
    .then(function () {
        alert("Thank you! Your message has been sent successfully.");
        document.querySelector(".contact-form").reset();
    })
    .catch(function (error) {
        alert("Oops! Something went wrong. Please try again.");
        console.error("EmailJS Error:", error);
    });
}
