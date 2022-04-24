const fs = require('fs')
const path = require('path')

const caracteres = [".",":","-",">","<","?","!", "♪", "[","]","--","_",'"',"#",";","/","=","%","$","&"]
const takePath = name => path.resolve(__dirname, name)
const joinPathDir = path => fs.readdirSync(path)
const checkIfEndStr = str => str.endsWith('srt')
const pathFile = filename => path.resolve(__dirname, "legendas", filename)
const joinPathFile = file => fs.readFileSync(file, "utf8")
const splitString = str => word => word.split(str)
const graterThanZero = arr => arr.length > 0
const removeSpaces = str => str.trim()
const sortByNum = (a, b) =>  b.num - a.num

const splitForLine = splitString("\n")
const pathFolder = takePath("legendas")
const allFiles = joinPathDir(pathFolder)
const files = allFiles.filter(checkIfEndStr)

const texto = files.map(fileName => joinPathFile(pathFile(fileName)))
const array = texto.map(splitForLine).flat()
const arrayWithOutSpace = array.map(removeSpaces)
const textWithCaracteres = arrayWithOutSpace.join(",")

const charForReplace = caracteres.join("|")

const words = textWithCaracteres
  .replace(new RegExp(`[${charForReplace}]|\[|]|-|=|,|&|\$|[0-9]`, "g"), '')
  .split(" ")
  .filter(graterThanZero)

countWords = []
words.map((word) => {
  const index = countWords.findIndex(wd => wd.name === word)

  let wd = {
    name: word,
    num: 1
  }

  index !== -1 ? countWords[index].num += 1 : countWords.push(wd)
})

console.log("-> ~ countWords.sort(sortByNum)", countWords.sort(sortByNum))

