let Feedback = document.querySelectorAll('input[name="feedback"]')
let NotaFeedback = 0
let CardDeNotas = document.getElementById("CampoDeFeedback")
let BotaoSubmit = document.getElementById("Submit")
let ResultadoValor = document.querySelector(".FeedbackResultado")
let CardResultado = document.getElementById("CampoDeResultado")

/*Pega o valor do Feedback e armazena na variavel NotaFeedback*/
Feedback.forEach((Input) =>{
    Input.addEventListener("click" ,(event) => {
        
        if (Input.nextElementSibling.classList.contains("clicado")){
            Input.nextElementSibling.classList.remove("clicado")
            NotaFeedback = 0 /*se clicou no mesmo que ja havia clicado zera o valor*/
            console.log(NotaFeedback)
        } else {
            Feedback.forEach((Checked) =>{
                Checked.nextElementSibling.classList.remove("clicado") /*se ja clicou em um remove o outro*/
            })
            Input.nextElementSibling.classList.add("clicado")
            NotaFeedback = event.target.value /*pega o valor que foi clicado*/
            console.log(NotaFeedback)
        }
        ResultadoValor.textContent = `You selected ${NotaFeedback} out of 5`
    })  
})
/*alterando o card*/

BotaoSubmit.addEventListener("click" , (event) =>{
    CardDeNotas.style.display = "none"
    CardResultado.style.display = "flex"
})
/*botao for clicado ele vai apagar o display do card notas*/
