import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import Homepage from './pages/HomePage'
import Article from './pages/Article'
import Category from './pages/Category'

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
  cache: new InMemoryCache(),
})

const App = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className='App'>
          <Switch>
            <Route exact path='/'>
              <Homepage />
            </Route>
            <Route path='/articles/:id'>
              <Article />
            </Route>
            <Route path='/categories/:id'>
              <Category />
            </Route>
          </Switch>
        </div>
      </ApolloProvider>
    </Router>
  )
}

export default App
