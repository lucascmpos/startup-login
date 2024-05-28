import { useState } from 'react'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import Footer from './layouts/footer'
import Header from './layouts/header'

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null)
  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider>
        <RedwoodApolloProvider>
          <Header
            loggedInUser={loggedInUser}
            setLoggedInUser={setLoggedInUser}
          />
          <Routes setLoggedInUser={setLoggedInUser} />
          <Footer />
        </RedwoodApolloProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  )
}

export default App
