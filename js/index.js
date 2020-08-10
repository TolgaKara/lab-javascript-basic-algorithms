console.log("I`m ready!")
// Iteration 1: Names and Input
let hacker1 = "Pul"
let hacker2 = "John"

console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)

let lengthOfHacker1 = hacker1.length
let lengthOfHacker2 = hacker2.length


// Iteration 2: Conditionals
if(lengthOfHacker1 > lengthOfHacker2){
  console.log(`The driver has the longest name, it has ${lengthOfHacker1} characters.`)
}else if(lengthOfHacker1< lengthOfHacker2){
  console.log(`It seems that the navigator has the longest name, it has ${lengthOfHacker2} characters.`)
}else if (lengthOfHacker1 == lengthOfHacker2){
  console.log(`Wow, you both have equally long name ${lengthOfHacker1} characters!.`)
}

// Iteration 3: Loops
let newHacker1Name = "";
for (let i= 0; i < hacker1.length; i++){
  newHacker1Name += hacker1[i].toUpperCase()+ " "
}

newHacker1Name = newHacker1Name.slice(0, -1)

console.log(newHacker1Name)
let reverseHacker2 = "";
for (let x= hacker2.length - 1; x>=0; x--){
  reverseHacker2 += hacker2[x]
}
console.log(reverseHacker2)

listOfHackers = [hacker1 , hacker2]


listOfHackers = listOfHackers.sort()

console.log(listOfHackers)
if(hacker1 == hacker2) {
  console.log("What?! You both have the same name?")
}
else if(listOfHackers[0] == hacker1){
  console.log("The driver's name goes first.")
}else if(listOfHackers[0] == hacker2){
  console.log("Yo, the navigator goes first definitely.")
}

