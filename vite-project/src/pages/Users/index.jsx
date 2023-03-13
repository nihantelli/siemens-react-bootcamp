import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListItem from './ListItem';

function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users').then((res) => {
      setUsers(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h2>Users</h2>

      {loading && <div>Loading...</div>}

      <div className='user-list'>
        {users.map((user) => (
          <ListItem key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Users;