const fs = require('fs')
const path = require('path')


const caracteres = [",",".",":","-",">","'","?","!", "♪", "[","]","--","_",'"', " "]
const takePath = name => path.resolve(__dirname, name)
const joinPathDir = path => fs.readdirSync(path)
const checkIfEndStr = str => str.endsWith('srt')
const pathFile = filename => path.resolve(__dirname, "legendas", filename)
const joinPathFile = file => fs.readFileSync(file, "utf8")
const splitString = str => word => word.split(str)

const splitForLine = splitString("\n")
const pathFolder = takePath("legendas")
const allFiles = joinPathDir(pathFolder)
const files = allFiles.filter(checkIfEndStr)

const texto = files.map(fileName => joinPathFile(pathFile(fileName)))
const array = texto.map(splitForLine).flat()
const arrayWithOutSpace = array.map(word => word.trim())
const textWithCaracteres = arrayWithOutSpace.join(",").replace("[0-9]", '')
console.log("-> ~ textWithCaracteres", textWithCaracteres)


const charForReplace = caracteres.join("|")


//const textWithCaracteresReplace = textWithCaracteres.replace(new RegExp(`[${charForReplace}]`, "g"), '')
//console.log("-> ~ textWithCaracteresReplace", textWithCaracteresReplace)


//replace(new RegExp(`[${charForReplace}]`, "g"), '')