// Scenario: Iniciar el sistema
export function iniciarSistema(btn, formularioDni) {
    formularioDni.style.display = 'block'
    btn.style.display = 'none'
}

// Scenario: Input vacio
// Scenario: Numero fuera de rango
// Scenario: Dato no numerico
export function verificarDatos(input) {
    const numero = Number(input)

    if (input.trim() === '' || Number.isNaN(numero) || numero < 0 || numero > 99999999) {
        return false
    }

    return true
}

// Scenario: DNI valido
export function calcularNumero(input) {
    const numero = Number(input)
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E']
    const modulo = numero % 23
    const letraDni = letras[modulo]

    return letraDni
}

// Scenario: Repeticion del proceso
export function repetirProceso(inputDni) {
    inputDni.value = ''
    inputDni.focus()
}

// Scenario: Cancelacion del proceso
export function cancelarProceso(formularioDni, btn, inputDni, resultadoDni) {
    formularioDni.style.display = 'none'
    btn.style.display = 'block'
    inputDni.value = ''
    resultadoDni.textContent = ''
}

if (typeof document !== 'undefined') {
    const btn = document.getElementById('iniciar')
    const formularioDni = document.getElementById('formulario-dni')
    const inputDni = document.getElementById('numero-dni')
    const btnCalcular = document.getElementById('calcular')
    const resultadoDni = document.getElementById('resultado-dni')
    const btnCancelar = document.getElementById('cancelar')

    btn.addEventListener('click', () => {
        iniciarSistema(btn, formularioDni)
    })

    btnCalcular.addEventListener('click', () => {
        const input = inputDni.value

        if (!verificarDatos(input)) {
            resultadoDni.textContent = 'El dato introducido es incorrecto'
            return
        }

        const letraDni = calcularNumero(input)
        resultadoDni.textContent = `La letra de tu DNI es ${letraDni}`

        repetirProceso(inputDni)
    })

    btnCancelar.addEventListener('click', () => {
        cancelarProceso(formularioDni, btn, inputDni, resultadoDni)
    })
}
