import { createContext, useContext } from 'react'

type Query = (queryName?: string) => any

const callback: Query = () => {}

export const GraphqlContext = createContext(callback)

export const useGraphqlQuery = () =>
	GraphqlContext && useContext(GraphqlContext)
