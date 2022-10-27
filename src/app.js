import express from 'express'
import routes from './routes'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.send('Welcome to Friends Recommendation API!')
})

app.listen(PORT, (req, res) => {
  console.log(`Listenning on port: ${PORT}`)
})