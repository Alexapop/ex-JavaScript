import { describe, expect, test} from "vitest"
import { reverseWords } from "../../src/reversing-words/reversing.js"


describe ('reverseWords',() => {
    test ('should reverse the order of the text',() => {
        const text='Hello World'
        expect(reverseWords(text)).toBe('World Hello')
       
})

   test ('should reverse the order of the text and keeping the punctuation',() => {
        const text='Hi There.'
        expect(reverseWords(text)).toBe

   })

    test ('should reverse the order of the text and remove leading spaces',()=> {
        const text='espacios al rededor'
        expect(reverseWords(text)).toBe('rededor al espacios')
        
})

  test('should reverse the order of the text and remove spaces between words',() => {
        const text='Muchos espacios intermedios'
        expect(reverseWords(text)).toBe('intermedios espacios Muchos')
  })
})