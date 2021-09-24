Fonts
=====

Fonts for use with [canvas](https://npmjs.com/package/canvas)

# Usage

```js
const { registerFont, createCanvas } = require('canvas')

registerFont(fonts["Comic Sans MS"], { family: "Comic Sans MS" })

const canvas = createCanvas(400, 48)
const ctx = canvas.getContext('2d')
ctx.font = `24px "Comic Sans MS"`
ctx.fillText("Hello World!", 5, 30)
```

# Fonts

### `fonts["AmericanTypewriter"]`
![./imgs/AmericanTypewriter.png](./imgs/AmericanTypewriter.png)
### `fonts["Arial Black"]`
![./imgs/Arial%20Black.png](./imgs/Arial%20Black.png)
### `fonts["Arial Bold Italic"]`
![./imgs/Arial%20Bold%20Italic.png](./imgs/Arial%20Bold%20Italic.png)
### `fonts["Arial Bold"]`
![./imgs/Arial%20Bold.png](./imgs/Arial%20Bold.png)
### `fonts["Arial Italic"]`
![./imgs/Arial%20Italic.png](./imgs/Arial%20Italic.png)
### `fonts["Arial Narrow Bold Italic"]`
![./imgs/Arial%20Narrow%20Bold%20Italic.png](./imgs/Arial%20Narrow%20Bold%20Italic.png)
### `fonts["Arial Narrow Bold"]`
![./imgs/Arial%20Narrow%20Bold.png](./imgs/Arial%20Narrow%20Bold.png)
### `fonts["Arial Narrow Italic"]`
![./imgs/Arial%20Narrow%20Italic.png](./imgs/Arial%20Narrow%20Italic.png)
### `fonts["Arial Narrow"]`
![./imgs/Arial%20Narrow.png](./imgs/Arial%20Narrow.png)
### `fonts["Arial Rounded Bold"]`
![./imgs/Arial%20Rounded%20Bold.png](./imgs/Arial%20Rounded%20Bold.png)
### `fonts["Arial"]`
![./imgs/Arial.png](./imgs/Arial.png)
### `fonts["Baskerville"]`
![./imgs/Baskerville.png](./imgs/Baskerville.png)
### `fonts["Chalkduster"]`
![./imgs/Chalkduster.png](./imgs/Chalkduster.png)
### `fonts["Comic Sans MS Bold"]`
![./imgs/Comic%20Sans%20MS%20Bold.png](./imgs/Comic%20Sans%20MS%20Bold.png)
### `fonts["Comic Sans MS"]`
![./imgs/Comic%20Sans%20MS.png](./imgs/Comic%20Sans%20MS.png)
### `fonts["Courier New Bold Italic"]`
![./imgs/Courier%20New%20Bold%20Italic.png](./imgs/Courier%20New%20Bold%20Italic.png)
### `fonts["Courier New Bold"]`
![./imgs/Courier%20New%20Bold.png](./imgs/Courier%20New%20Bold.png)
### `fonts["Courier New Italic"]`
![./imgs/Courier%20New%20Italic.png](./imgs/Courier%20New%20Italic.png)
### `fonts["Courier New"]`
![./imgs/Courier%20New.png](./imgs/Courier%20New.png)
### `fonts["Helvetica"]`
![./imgs/Helvetica.png](./imgs/Helvetica.png)
### `fonts["HelveticaNeue"]`
![./imgs/HelveticaNeue.png](./imgs/HelveticaNeue.png)
### `fonts["Impact"]`
![./imgs/Impact.png](./imgs/Impact.png)
### `fonts["Luminari"]`
![./imgs/Luminari.png](./imgs/Luminari.png)
### `fonts["MarkerFelt"]`
![./imgs/MarkerFelt.png](./imgs/MarkerFelt.png)
### `fonts["Noteworthy"]`
![./imgs/Noteworthy.png](./imgs/Noteworthy.png)
### `fonts["Papyrus"]`
![./imgs/Papyrus.png](./imgs/Papyrus.png)
### `fonts["PartyLET-plain"]`
![./imgs/PartyLET-plain.png](./imgs/PartyLET-plain.png)
### `fonts["SignPainter"]`
![./imgs/SignPainter.png](./imgs/SignPainter.png)
### `fonts["Tahoma Bold"]`
![./imgs/Tahoma%20Bold.png](./imgs/Tahoma%20Bold.png)
### `fonts["Tahoma"]`
![./imgs/Tahoma.png](./imgs/Tahoma.png)
### `fonts["Times New Roman Bold Italic"]`
![./imgs/Times%20New%20Roman%20Bold%20Italic.png](./imgs/Times%20New%20Roman%20Bold%20Italic.png)
### `fonts["Times New Roman Bold"]`
![./imgs/Times%20New%20Roman%20Bold.png](./imgs/Times%20New%20Roman%20Bold.png)
### `fonts["Times New Roman Italic"]`
![./imgs/Times%20New%20Roman%20Italic.png](./imgs/Times%20New%20Roman%20Italic.png)
### `fonts["Times New Roman"]`
![./imgs/Times%20New%20Roman.png](./imgs/Times%20New%20Roman.png)
### `fonts["Times"]`
![./imgs/Times.png](./imgs/Times.png)
