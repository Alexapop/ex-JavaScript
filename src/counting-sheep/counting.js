
  console.log('connected')

export function countAnimals(animals){

 if (!Array.isArray(animals)){
    throw new Error('Invalid input: list must contain only boolean values')

 }

 for (let i=0; i<animals.length; i++)
    if (typeof animals[i]!=='boolean'){
    throw new Error('Invalid input: list must contain only boolean values')

 }

 const sheep=animals.filter(animal=>animal===true).length
const wolves=animals.filter(animal=>animal===false).length
 
  if (sheep>0 && wolves==0) return `There are ${sheep} sheep in total`
  if (sheep==0 && wolves>0) return `UPS!!! A pack of hungry wolves`
  if (sheep>wolves) return `${sheep} sheep escaped!!!`
  if (wolves>sheep) return `UPS!!! Wolves ate all the sheep`

}
