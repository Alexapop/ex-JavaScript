## Counting Sheep

*Debes escribir una function que nos diga cuantas ovejas hay en total o si los lobos se han comido las ovejas*

**Descripción del problema**

Los "true" son ovejas, los "false" son lobos ... Cuantas ovejas hay? La función recibirá una lista de valores booleans.

*Criterios:*

-*Scenario: Solo hay ovejas*

    Given que proporciono una lista válida que contiene únicamente valores true
    When ejecuto la función countAnimals
    Then el resultado debe ser "There are <quantity> sheep in total"

-*Scenario: Solo hay lobos*

    Given que proporciono una lista válida que contiene únicamente valores false
    When ejecuto la función countAnimals
    Then el resultado debe ser "UPS!!! A pack of hungry wolves"

-*Scenario: Hay más ovejas que lobos*

    Given que proporciono una lista válida de valores booleanos
    And la cantidad de true es mayor que la cantidad de false
    When ejecuto la función countAnimals
    Then el resultado debe ser "<quantity> sheep escaped!!!"

-*Scenario: Hay más lobos que ovejas*

    Given que proporciono una lista válida de valores booleanos
    And la cantidad de false es mayor que la cantidad de true
    When ejecuto la función countAnimals
    Then el resultado debe ser "UPS!!! Wolves ate all the sheep"

-*Scenario: El input no es un array*

    Given que proporciono un valor que no es un array
    When ejecuto la función countAnimals
    Then debe lanzarse un error con el mensaje "Invalid input: list must contain only boolean values"

-*Scenario: El array contiene elementos que no son booleanos*

    Given que proporciono un array con valores no booleanos
    When ejecuto la función countAnimals
    Then debe lanzarse un error con el mensaje "Invalid input: list must contain only boolean values"

*Requisitos*
Testing: Obligatorio realizar tests unitarios de los escenarios
Ejemplos:

Input: animals = [ false, false, false ]

Output: UPS!!! A pack of hungry wolves

Input: animals = [ true, true ]

Output: There are 2 sheep in total

## Tecnología

- **Lenguaje:** JavaScript
- **Framework de Pruebas:** Vitest
- **Entorno de Desarrollo (IDE):** Visual Studio Code

*Algoritmo*
- La consola recibe datos
- Crear el input animales
- El input no es 'array', lanzar error "Invalid input: list must contain only boolean values"
- El array contiene elementos que no son booleans, lanzar error "Invalid input: list must contain only boolean values"
- 'True' son las ovejas
- 'False' son los lobos
- Contar numero ovejas y lanzar "There are <quantity> sheep in total"
- Solo hay lobos, lanzar "UPS!!! A pack of hungry wolves"
- Hay mas ovejas que lobos, lanzar "<quantity> sheep escaped!!!"
- Hay mas lobos que ovejas, lanzar UPS!!! Wolves ate all the sheep"



*Estructura del proyecto*

```text
f5-bootcamp-javascript-exercises/
|-- img/
|   `-- counting-sheep/
|       `-- counting-vitest.jpg
|-- src/
|   `-- counting-sheep/
|       |-- README.md
|       |-- counting.js
|       `
|-- tests/
|   `-- counting-sheep/
|       |-- counting.test.js
|       `
|-- README.md
|-- package-lock.json
`-- package.json
```

*Entregables:*

- [repositorio GitHub](https://github.com/Alexapop/f5-bootcamp-javascript-exercises)
- [tests Vitest](/img/counting-sheep/counting-vitest.jpg)
