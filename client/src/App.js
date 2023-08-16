import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// on every page
import Navbar from './components/Navbar/index.js';
import Footer from './components/Footer/index.js';

//different pages to be loaded
import Home from './pages/Home';
import Search from './pages/List.js';
import Comments from './pages/Comments';
import Login from './pages/Login';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  // Looks to see which page is the current
  const [currentPage, setCurrentPage] = useState('login'); // Default page to home
  const renderPage = () => {
    if (currentPage === 'home') {
      return <Home />;
    }
    if (currentPage === 'list') {
      return <Search />;  
    }
    if (currentPage === 'comments') {
      return <Comments />;
    }
    if (currentPage === 'login') {
      return <Login />;
    }
  };

  return (
    <ApolloProvider client={client}>
      <div>
        <Navbar 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}  
        />
        <div>
          {renderPage()}
        </div>
        <Footer />
      </div>
    </ApolloProvider>
  );
};

export default App;