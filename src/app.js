import express from 'express'
import routes from './routes'

const app = express()
const PORT = 3000

// global variables definition
global.personList = []
global.friendshipRelations = []

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Welcome to Friends Recommendation API!')
})

routes(app)

app.listen(PORT, (req, res) => {
  console.log(`Listenning on port: ${PORT}`)
})
