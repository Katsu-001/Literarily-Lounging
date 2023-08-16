import React, { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// on every page
import Navbar from './components/Navbar/index.js';
import Footer from './components/Footer/index.js';

//different pages to be loaded
import Home from './pages/Home';
import List from './pages/List.js';
import Comments from './pages/Comments';
import Login from './pages/Login';
import Signup from './pages/Signup.js';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleSetCurrentPage = (page) => {
    setCurrentPage(page);
  }

  const renderPage = () => { 
    if(currentPage === 'home') {
      return <Home setCurrentPage={handleSetCurrentPage} />
    }
    if(currentPage === 'list') {
      return <List setCurrentPage={handleSetCurrentPage} />
    }
    if(currentPage === 'comments') {
      return <Comments setCurrentPage={handleSetCurrentPage} />
    }
    if(currentPage === 'login') {
      return <Login setCurrentPage={handleSetCurrentPage} />
    }
    if(currentPage === 'signup') {
      return <Signup setCurrentPage={handleSetCurrentPage} />
    }
  }

  return (
    <ApolloProvider client={client}>
      <div>
        <Navbar 
          currentPage={currentPage}
          setCurrentPage={handleSetCurrentPage} 
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