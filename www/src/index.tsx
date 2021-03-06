import { render } from 'react-dom'
import Wrap from './components/App'
import React from 'react'
import withGraphqlQueries from 'HOCs/gql/withGraphqlQueries'
import * as greetQueries from 'queries/greets'

import 'bootstrap/dist/css/bootstrap.min.css'

const queryOpts = {
	requests: {
		url: process.env.GQL_SERVER_URL
	}
}

const App = withGraphqlQueries(Wrap, greetQueries, queryOpts)

render(<App />, document.getElementById('app'))
