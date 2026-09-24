let BotaoSubmit = document.getElementById("Submit")
let FeedbackValue = document.getElementById("FeedbackFormulario");
console.log(FeedbackValue.value)

BotaoSubmit = addEventListener("click" , EnviarFormularioBotao())


function EnviarFormularioBotao ("Submit"){
    Enviar.preventDefaut();

    const Nota = document.querySelector('input[name="feedback"]:checked');

    console.log(Nota.value)
};

