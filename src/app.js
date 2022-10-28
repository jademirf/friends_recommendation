import express from 'express'
import routes from './routes'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const app = express()

// add port from process.env so it can be published to heroku
const PORT = process.env.PORT || 3000

// swagger configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Recommendation API",
      description: `This API allows you to add people, create friendship relationships between added people then recommend new friends based on users friend's relationships. 
      Recommendations are also ordered by scores, the score is calculated based on how many friends of the user have friendship with that person.`,
      servers: [`http://localhost:${PORT}`]

    }
  },
  apis: ['./src/routes/*.routes.js']
}

const swaggerDocs = swaggerJSDoc(swaggerOptions)
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

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
