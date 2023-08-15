import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../utils/queries';

function Home() {
  const { loading, error, data } = useQuery(QUERY_USERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Usernames</h2>

      {data.users.map(user => (
        <div key={user._id}>{user.username}</div>
      ))}
    </div>
  );
};

export default Home;