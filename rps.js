let fruit = []

const randomFruit = (fruits)=>{
   const randomNumber = Math.floor( Math.random()* fruits.length)
   console.log(randomNumber)
   return fruits[randomNumber]
}
fruit = ["orange","apple","pear","pineapple"]
console.log(randomFruit(fruit))


const weatherScore = (weather)=>{
 let score 
 if (weather==='rainny'){
   score = 1
 }
 else if (weather === 'sunny'){
   score = -1
 }
 else{
   score = 0
 }
 return score
}
console.log(weatherScore('sunny'))