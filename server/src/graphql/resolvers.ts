import { getToday as gToday } from './../utils/index'
import state from '../state'
type Resolver = (obj: any, args?: any, context?: any, info?: any) => any

const changeName: Resolver = (_, { name }) => {
	state.name = name
	return name
}
const greetTo: Resolver = (_, { name }) => {
	return `hello my friend ${name}`
}
const greetEdi: Resolver = () => {
	return `hello my friend edi`
}
const getDate: Resolver = () => {
	const today = gToday()
	return `${today.monthlyDay}th of ${today.month} of ${today.year}`
}
const getToday: Resolver = () => {
	return new Date()
}

export default {
	Query: {
		greet: () => `hello my friend ${state.name}`,
		greetTo,
		greetEdi,
		getDate,
		getToday
	},
	Mutation: {
		changeName
	}
}
