

export function validation() {
"use strict"

const forms = document.querySelectorAll(".requires-validation")
Array.from(forms)
    .forEach((form: any) => {
        form.addEventListener("submit", (event: any) => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add("is-validated")
        }, false)
    })

}

