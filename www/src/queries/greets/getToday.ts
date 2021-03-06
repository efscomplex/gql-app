import { gql } from 'graphql-request'

const getToday = gql`
	query {
		getToday
	}
`

export default getToday
