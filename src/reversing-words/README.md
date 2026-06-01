# Reversing Words

*Debes escribir una función que invierta el orden de las palabras en una cadena de texto (string) proporcionada*

*Una palabra se define como una secuencia de caracteres sin espacios. La cadena de entrada puede contener espacios al principio o al final, así como múltiples espacios entre palabras. Tu función debe manejar estos casos eliminando los espacios innecesarios.*
- *El orden de las palabras debe invertirse (la última palabra pasa a ser la primera, etc.)*
- *Limpieza de datos: Se deben ignorar los espacios en blanco adicionales al principio y al final de la cadena (trailing/leading spaces)*
- *Espacios intermedios: Si hay más de un espacio entre palabras, el resultado final solo debe tener un único espacio separándolas*

## Tecnología

- **Lenguaje:** JavaScript
- **Framework de Pruebas:** Vitest
- **Entorno de Desarrollo (IDE):** Visual Studio Code

## Algoritmo

1. Crear una funcion que recibe un parametro:texto
2. Comprobar si la función recibe datos
3. Comprobar si los datos son un string 
4. Definir la variable: texto sin espacios 
5. Eliminar los espacios al principio
6. Eliminar los espacios al final
7. Una cadena vacía o que solo contiene espacios debe devolver una cadena vacía
8. Eliminar multiples espacios innecesarios  entre palabras
9. La puntuación se mantenga unida a la palabra a la que acompaña
10. Invertir el orden de las palabras
11. Realizar tests.


*Estructura del proyecto**

```text
f5-bootcamp-javascript-exercises/
|-- img/
|   `-- reversing-words/
|       `-- reversing-vitest.jpg
|-- src/
|   `-- reversing-words/
|       |-- README.md
|       |-- reversing.js
|       `
|-- tests/
|   `-- reversing-words/
|       |-- reversing.test.js
|       `
|-- README.md
|-- package-lock.json
`-- package.json
```

## Entregables

- [Repositorio de GitHub](https://github.com/Alexapop/f5-bootcamp-javascript-exercises)
- ![Vitest](../../img/word-exists-or-not/vitest.jpg)

