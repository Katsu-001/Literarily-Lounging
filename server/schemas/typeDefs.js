const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    readingLists: [ReadingList]
  }
  
  type ReadingList {
    _id: ID! 
    user: User!
    books: [Book!]
  }
  
  type Book {
    _id: ID!
    title: String!
    author: String!
  }

  type Query {
    users: [User!]
    user(userId: ID!): User
    readingLists: [ReadingList!]
    readingList(listId: ID!): ReadingList
  }

  type Mutation {
    createUser(username: String!, email: String!): User
    updateUser(userId: ID!, username: String, email: String): User
    deleteUser(userId: ID!): User
    
    createReadingList(userId: ID!, bookIds: [ID]!): ReadingList
    addBookToList(listId: ID!, bookId: ID!): ReadingList
    removeBookFromList(listId: ID!, bookId: ID!): ReadingList
    deleteReadingList(listId: ID!): ReadingList
  }
`;

module.exports = typeDefs;