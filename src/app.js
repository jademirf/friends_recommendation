import express from 'express'
import routes from './routes'

const app = express()

// add port from process.env so it can be published to heroku
const PORT = process.env.PORT || 3000

// global variables definition
global.personList = []
global.friendshipRelationships = []

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.send('Welcome to Friends Recommendation API!')
})

routes(app)

app.listen(PORT, (req, res) => {
  console.log(`Listenning on port: ${PORT}`)
})
