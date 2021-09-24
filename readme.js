const fonts = require('./index.js')
const fs = require('fs')
const { registerFont, createCanvas } = require('canvas')

const fontNames = Object.keys(fonts)
for(let i = 0; i < fontNames.length; i++) {
	const name = fontNames[i]
	const font = fonts[name]
	console.log('Generating =>', name)
	registerFont(font, { family: name })
	const canvas = createCanvas(400, 48)
	const ctx = canvas.getContext('2d')
	ctx.font = `24px "${name}"`
	ctx.fillText(name, 5, 30)
	fs.writeFileSync(`./imgs/${name}.png`, canvas.toBuffer())
	fs.writeFileSync('./README.md', `### \`fonts["${name}"]\`\n`, { flag: 'a' })
	fs.writeFileSync('./README.md', `![./imgs/${encodeURI(name)}.png](./imgs/${encodeURI(name)}.png)\n`, { flag: 'a' })
}