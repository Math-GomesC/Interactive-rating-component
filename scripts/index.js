let Feedback = document.querySelectorAll('input[name="feedback"]')

Feedback.forEach((Input) =>{
    Input.addEventListener("click" ,(event) => {
        Input.nextElementSibling.classList.add("clicado")
        console.log(event.target.value);})    
})

