import { test, expect } from 'vitest'
import {
    iniciarSistema,
    verificarDatos,
    calcularNumero,
    repetirProceso,
    cancelarProceso,
} from '../../src/kata-dni/kata-dni.js'

test('El boton Iniciar desaparece y aparece el formulario', () => {
    const btn = { style: { display: 'block' } }
    const formularioDni = { style: { display: 'none' } }

    iniciarSistema(btn, formularioDni)

    expect(formularioDni.style.display).toBe('block')
    expect(btn.style.display).toBe('none')
})

test('Devuelve false si el input esta vacio', () => {
    const input = ''

    const resultado = verificarDatos(input)

    expect(resultado).toBe(false)
})


test('Devuelve false si el numero esta fuera de rango', () => {
    const input = '100000000'

    const resultado = verificarDatos(input)

    expect(resultado).toBe(false)
})

test('Devuelve false si el dato no es un numero', () => {
    const input = 'hola'

    const resultado = verificarDatos(input)

    expect(resultado).toBe(false)
})
test('Devuelve true si el numero es correcto', () => {
    const input = '44444444'

    const resultado = verificarDatos(input)

    expect(resultado).toBe(true)
})

test('Calcula la letra del DNI', () => {
    const input = '44444444'

    const resultado = calcularNumero(input)

    expect(resultado).toBe('A')
})

test('Vuelve a pedir un nuevo numero despues de calcular', () => {
    let focusActivado = false
    const inputDni = {
        value: '44444444',
        focus: () => {
            focusActivado = true
        },
    }

    repetirProceso(inputDni)

    expect(inputDni.value).toBe('')
    expect(focusActivado).toBe(true)
})

test('Cancela el proceso y vuelve al estado inicial', () => {
    const formularioDni = { style: { display: 'block' } }
    const btn = { style: { display: 'none' } }
    const inputDni = { value: '44444444' }
    const resultadoDni = { textContent: 'La letra de tu DNI es A' }

    cancelarProceso(formularioDni, btn, inputDni, resultadoDni)

    expect(formularioDni.style.display).toBe('none')
    expect(btn.style.display).toBe('block')
    expect(inputDni.value).toBe('')
    expect(resultadoDni.textContent).toBe('')
})
