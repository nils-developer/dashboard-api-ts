import express from "express"

const app = express()
const PORT: Number = 3001

app.get('/', (req, res) => {
  res.send("Welcome!")
})

app.listen(PORT, () => {
  console.log("The application is listening on port http://localhost:"+PORT)
})