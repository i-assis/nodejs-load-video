// now, at the console:
// >> npm install chalk morgan
const color = require("chalk")

const app = require("./app")
const port = 4000

app.listen(port, () => console.log(`The server is listening on port ${color.green(port)}`));

