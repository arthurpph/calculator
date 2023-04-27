function calcular() {
    const number1 = Number(document.getElementById("number1").value)
    const number2 = Number(document.getElementById("number2").value)
    const aCheckbox = document.getElementById("soma")
    const bCheckbox = document.getElementById("subtracao")
    const cCheckbox = document.getElementById("multiplicacao")
    const dCheckbox = document.getElementById("divisao")
    const resultado = document.getElementById("resultado")
    if (aCheckbox.checked) {
        var total = number1 + number2
        resultado.innerHTML = total
    } else if (bCheckbox.checked) {
        var total = number1 - number2
        resultado.innerHTML = total
    } else if (cCheckbox.checked) {
        var total = number1 * number2
        resultado.innerHTML = total
    } else if (dCheckbox.checked) {
        var total = number1 / number2
        resultado.innerHTML = total
    } else {
        resultado.innerHTML = "Por favor selecione algum operador"
    }
}
