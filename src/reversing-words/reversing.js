export function reverseWords (text){

console.log ('connected')

if (typeof text !== 'string') { 
    throw new Error ('This should be a string')

}
 const textWithoutSpace = text.trim()
 if (textWithoutSpace==='') return ''

const words = textWithoutSpace.split(/\s+/)
const reversedWords = words.reverse()
const reversedText = reversedWords.join(' ')

return reversedText
}

