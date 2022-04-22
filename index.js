const fs = require('fs')
const path = require('path')


const joinPath = folder => fs.readdirSync(path.resolve(__dirname, folder))
const checkIfEndStr = str => str.endsWith('srt')

const allFiles = joinPath("legendas")
const files = allFiles.filter(checkIfEndStr)

//const texto = files.map(fl => fs.readFileSync(path.resolve(__dirname, "legendas", fl)), "utf8")


const fl = fs.readFileSync(path.resolve(__dirname, "legendas", "legendas_10.srt"), "utf8")

const texto = fl.split("/n")
