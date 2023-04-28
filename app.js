const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const readline = require('readline');

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout,
})

const dirPath = './data';
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
}

const dataPath = './data/contact.json';
if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, '[]', 'utf-8')
}


const QuestionName = () => {
    return new Promise((resolve, reject) => {
        rl.question('Write your name : ', (name) => {
            resolve(name)
        })
    })
}
const QuestionEmail = () => {
    return new Promise((resolve, reject) => {
        rl.question('Input your email : ', (email) => {
            resolve(email)
        })
    })
}

const main = async () => {
    const name = await QuestionName()
    const email = await QuestionEmail()

    const contact = {name, email}
    const fileBuffer = fs.readFileSync('./data/contact.json', 'utf-8')
    const contacts = JSON.parse(fileBuffer)

    contacts.push(contact)
    fs.writeFileSync('./data/contact.json', JSON.stringify(contacts))

    console.log('Thanks for the participation.');
    rl.close()
}

main()
