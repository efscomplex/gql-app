import React from 'react'
import { Spinner } from 'reactstrap'
import { useGraphqlQuery } from 'HOCs/gql/graphqlContext'

interface Props {
	name: string
	[key: string]: any
}

function QueryRender({ name, children }: Props) {
	const query = useGraphqlQuery()
	const { data, isLoading } = query(name)

	if (isLoading) return <Spinner color='primary' />

	return data && children(data)
}

export default QueryRender
