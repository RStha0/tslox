import path from 'path'
import fs from 'fs'
import Tokenizer from '../tokenizer/tokenizer'
import Parser from '../parser'

function run(source: string) {
    const tokenizer = new Tokenizer(source)
    tokenizer.scanTokens()
    const parser = new Parser(tokenizer.Tokens)
    const expr = parser.parse()
    if (expr) console.log(JSON.stringify(expr, null, 4))
}

function runFile(filePath: string) {
    if (!path.isAbsolute(filePath)) filePath = path.join(process.cwd(), filePath)
    const source = fs.readFileSync(filePath, { encoding: 'utf-8' })
    run(source)
}

async function runPrompt() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    async function prompt(): Promise<string> {
        return new Promise((resolve) => {
            readline.question('>', (source: string) => resolve(source))
        })
    }

    for (;;) {
        const source = await prompt()
        run(source)
    }
}

;(async function main() {
    const filePath = process.argv[2]
    if (filePath) {
        runFile(filePath)
    } else {
        runPrompt()
    }
})()
