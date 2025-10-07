import readlineSync from 'readline-sync'

const message = readlineSync.question("Enter your message: ")
// const message = "Yo, wassup?!"
console.log(`Here's your message: ${message}`)