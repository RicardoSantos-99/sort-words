const fs = require('fs')
const path = require('path')

const caracteres = [".",":","-",">","<","?","!", "♪", "[","]","--","_",'"',"#",";","/","=","%","$","&"]
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
const textWithCaracteres = arrayWithOutSpace.join(",")

const charForReplace = caracteres.join("|")

const textWithCaracteresReplace = textWithCaracteres.replace(new RegExp(`[${charForReplace}]`, "g"), '')
const txt = textWithCaracteresReplace.replace(/[0-9]/g, '').replace(/\[|]|-|=|,|&|\$/g, ' ')
const txtInLines = txt.split(" ").join("\n")
const words = txtInLines.split("\n").filter(word => word.length > 0)

countWords = []
words.map((word) => {
  const index = countWords.findIndex(wd => wd.name === word)

  let wd = {
    name: word,
    num: 1
  }

  index !== -1 ? countWords[index].num += 1 : countWords.push(wd)
})

const arrayTotalWords = countWords.sort(function (a, b) {
  if (a.num < b.num) {
    return 1;
  }
  if (a.num > b.num) {
    return -1;
  }
  return 0;
})
console.log("-> ~ arrayTotalWords", arrayTotalWords)

