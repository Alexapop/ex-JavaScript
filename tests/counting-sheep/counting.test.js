import { describe, expect, test } from "vitest"
import { countAnimals } from '../../src/counting-sheep/counting.js'

describe('countAnimals', () => {
    test('the input is not an array', () => {
        expect(() => countAnimals('not an array')).toThrow(
            'Invalid input: list must contain only boolean values'
        )
    })

    test('the input array contains non-boolean values',()=>{
        expect(()=>countAnimals('non-boolean values')).to.Throw(
            'Invalid input: list must contain only boolean values'
        )
    })
   test('input contains only the value true',()=>{
    expect(countAnimals([true, true])).toBe(
        'There are 2 sheep in total'
    )
   })

   test('input contains only the value false',()=>{
    expect(countAnimals([false, false,false])).toBe(
        'UPS!!! A pack of hungry wolves'
    )
   })

    test('input contains more true than false',()=>{
    expect(countAnimals([true, true, false,true, false])).toBe(
        '3 sheep escaped!!!'
    )
   })

    test('input contains more false than true',()=>{
    expect(countAnimals([true, false, false,false, false])).toBe(
        'UPS!!! Wolves ate all the sheep'
    )
   })
})