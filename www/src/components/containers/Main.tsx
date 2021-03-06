import QueryRender from 'components/common/QueryRender'
import React from 'react'

const children = (data: any) => {
	console.log(data)

	return <h1>{data.getToday}</h1>
}
export default function Main() {
	return (
		<React.Fragment>
			<QueryRender name='getToday'>{children}</QueryRender>
			<QueryRender name='greetEdi'>
				{(data: any) => data.greetEdi}
			</QueryRender>
		</React.Fragment>
	)
}
