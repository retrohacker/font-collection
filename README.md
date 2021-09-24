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
![./imgs/Arial Black.png](./imgs/Arial Black.png)
### `fonts["Arial Bold Italic"]`
![./imgs/Arial Bold Italic.png](./imgs/Arial Bold Italic.png)
### `fonts["Arial Bold"]`
![./imgs/Arial Bold.png](./imgs/Arial Bold.png)
### `fonts["Arial Italic"]`
![./imgs/Arial Italic.png](./imgs/Arial Italic.png)
### `fonts["Arial Narrow Bold Italic"]`
![./imgs/Arial Narrow Bold Italic.png](./imgs/Arial Narrow Bold Italic.png)
### `fonts["Arial Narrow Bold"]`
![./imgs/Arial Narrow Bold.png](./imgs/Arial Narrow Bold.png)
### `fonts["Arial Narrow Italic"]`
![./imgs/Arial Narrow Italic.png](./imgs/Arial Narrow Italic.png)
### `fonts["Arial Narrow"]`
![./imgs/Arial Narrow.png](./imgs/Arial Narrow.png)
### `fonts["Arial Rounded Bold"]`
![./imgs/Arial Rounded Bold.png](./imgs/Arial Rounded Bold.png)
### `fonts["Arial"]`
![./imgs/Arial.png](./imgs/Arial.png)
### `fonts["Baskerville"]`
![./imgs/Baskerville.png](./imgs/Baskerville.png)
### `fonts["Chalkduster"]`
![./imgs/Chalkduster.png](./imgs/Chalkduster.png)
### `fonts["Comic Sans MS Bold"]`
![./imgs/Comic Sans MS Bold.png](./imgs/Comic Sans MS Bold.png)
### `fonts["Comic Sans MS"]`
![./imgs/Comic Sans MS.png](./imgs/Comic Sans MS.png)
### `fonts["Courier New Bold Italic"]`
![./imgs/Courier New Bold Italic.png](./imgs/Courier New Bold Italic.png)
### `fonts["Courier New Bold"]`
![./imgs/Courier New Bold.png](./imgs/Courier New Bold.png)
### `fonts["Courier New Italic"]`
![./imgs/Courier New Italic.png](./imgs/Courier New Italic.png)
### `fonts["Courier New"]`
![./imgs/Courier New.png](./imgs/Courier New.png)
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
![./imgs/Tahoma Bold.png](./imgs/Tahoma Bold.png)
### `fonts["Tahoma"]`
![./imgs/Tahoma.png](./imgs/Tahoma.png)
### `fonts["Times New Roman Bold Italic"]`
![./imgs/Times New Roman Bold Italic.png](./imgs/Times New Roman Bold Italic.png)
### `fonts["Times New Roman Bold"]`
![./imgs/Times New Roman Bold.png](./imgs/Times New Roman Bold.png)
### `fonts["Times New Roman Italic"]`
![./imgs/Times New Roman Italic.png](./imgs/Times New Roman Italic.png)
### `fonts["Times New Roman"]`
![./imgs/Times New Roman.png](./imgs/Times New Roman.png)
### `fonts["Times"]`
![./imgs/Times.png](./imgs/Times.png)
