emailjs.init("vGH8d22gyTEBQraHG");

const succesForm = document.getElementById('succesForm');
const errorForm = document.getElementById('errorForm');

const sections = document.querySelectorAll('section');
const buttons = document.querySelectorAll('li');

document.getElementById("sendEmail").addEventListener("click", function() {

    const form = document.getElementById("contactForm");
    const name = form.querySelector('[name="to_name"]');
    const email = form.querySelector('[name="to_email"]');
    const message = form.querySelector('[name="message"]');

    if (!name.value || !email.value || !message.value) {
        errorForm.textContent = "Please fill out all fields correctly.";
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email.value)) {
        errorForm.textContent = "Please enter a valid email address.";
        return;
    }


    const serviceID = "service_t6t0xha";
    const templateID = "template_xrz86sf";

    emailjs.sendForm(serviceID, templateID, form)
    .then(() => {
        succesForm.textContent = "Message sent successfully";
        errorForm.textContent = "";
        form.reset();
    }, (error) => {
        console.error("Error al enviar el correo:", error);
        errorForm.textContent = "There was an error sending the message, please try again later";
    });
});

let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            sections.forEach((section, i) => {
                const scrollPosition = window.scrollY;
                const sectionPosition = section.offsetTop;
                const sectionHeight = section.clientHeight;
            
                if (scrollPosition >= sectionPosition && scrollPosition < sectionPosition + sectionHeight) {
                    buttons[i].classList.remove('text-gray-400')
                    buttons[i].classList.add('text-gray-200');
                }
                else {
                    buttons[i].classList.remove('text-gray-200');
                    buttons[i].classList.add('text-gray-400');
                }
            });
            ticking = false;
        });
        ticking = true;
    }
})
