import { makeExecutableSchema } from '@graphql-tools/schema'

import typeDefs from './typeDefs'
import resolvers from './resolvers'
import Date from './scalars/date'

export default makeExecutableSchema({
	typeDefs,
	resolvers: { ...resolvers, Date }
})
