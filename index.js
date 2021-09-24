const fs = require('fs')
const path = require('path')

const FONT_DIR = path.join(__dirname, 'fonts')

module.exports = {}
const fontFiles = fs.readdirSync(FONT_DIR).map(path.parse)

for(let i = 0; i < fontFiles.length; i++) {
	const file = fontFiles[i]
	module.exports[file.name] = path.join(FONT_DIR, file.base)
}