import './style.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';
import { ChakraProvider, ColorModeScript, extendTheme, Container } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

import Header from './components/Header';
import Footer from './components/Footer';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// adding global styles
const styles = {
  global:(props) => ({
    body: {
      color:mode('gray.900', 'whiteAlpha.900')(props),
      bg:mode('gray:200', '#000000')(props)
    }
  })
}

// setting default color scheme to dark
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

// adding colors in theme
const colors = {
  gray: '#4c4c4c',
  darkPurple: '#643672',
  neonBlue: '#5371ff',
  lightPurple: '#cb6c36',
  darkBlue: '#293483'
}

const theme = extendTheme({ config, styles, colors })

function App() {
  return (
    <ApolloProvider client={client}>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Container maxW='700px'>
              <Header />
              
                <Outlet />

              <Footer />
            </Container>
        </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
