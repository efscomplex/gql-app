import { GraphQLScalarType } from 'graphql/type'
import { formatDate } from '../../utils'

const Date = new GraphQLScalarType({
	name: 'Date',
	description: 'Date parser',
	serialize(date: any) {
		return formatDate(date)
	}
})
export default Date
