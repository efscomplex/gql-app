import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './graphql/index'
import cors from 'cors'

const PORT = process.env.PORT || 3000
const app = express()

app.set('port', PORT)
app.use(cors())
/* Middlewares */
app.use(
	graphqlHTTP({
		schema,
		graphiql: true
	})
)

/* Start the App */
app.listen(3000, () => {
	console.log(`🚀 Server ready at http://localhost:${PORT}${'/graphql'}`)
})
