import React from 'react';
import { useState } from 'react';
import './Home.css';

const Home = () => {
  const [query, setQuery] = useState(''); 
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    // Make API request 
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    const data = await response.json();
    setBooks(data.items);
  }

  return (
    <div className="homePage-container">
      <span>Literarily Lounging</span>
      <p>
        Simply search your book of choice, find by title or author, add books to your favorites, comment and share you thoughts 
        about books, even take place in live book chats!
      </p>
      <div className="searchbar-container">
        <input 
          value={query}
          onChange={(e) => setQuery(e.target.value)} 
        />
        <button onClick={handleSearch}>GO!</button>
      </div>
      <span>Search Here</span>
      <div className="results-container">
        {books.map(book => (
          <div key={book.id} className="result-card">
            <div>
              <button>Add to List</button>
              <button>Add Comment</button>
            </div>
            <span className="result-cardTitle">Title: {book.volumeInfo.title}</span>
            <span className="result-cardAuthor">Author: {book.volumeInfo.authors}</span>
            <p className="result-cardDesc">Description: {book.volumeInfo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;