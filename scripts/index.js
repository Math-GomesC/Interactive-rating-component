let Feedback = document.querySelectorAll('input[name="feedback"]')
let NotaFeedback = 0

Feedback.forEach((Input) =>{
    Input.addEventListener("click" ,(event) => {
        
        if (Input.nextElementSibling.classList.contains("clicado")){
            Input.nextElementSibling.classList.remove("clicado")
            NotaFeedback = 0 /*se clicou no mesmo que ja havia clicado*/
            console.log(NotaFeedback)
        } else {
            Feedback.forEach((Checked) =>{
                Checked.nextElementSibling.classList.remove("clicado")
            })
            Input.nextElementSibling.classList.add("clicado")
            NotaFeedback = event.target.value
        }
    })  
})

