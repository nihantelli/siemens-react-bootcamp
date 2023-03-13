import Loading from './Loading';
import Error from './Error';
import useFetch from '../hooks/useFetch';
import { useState } from 'react';

function Users() {
  const [endpoint, setEndpoint] = useState(
    'https://jsonplaceholder.typicode.com/users'
  );
  const { data, error, loading } = useFetch(endpoint);

  console.log({ data, error, loading });

  return (
    <div>
      <h1>Users</h1>
      <div>
        <button
          onClick={() =>
            setEndpoint('https://jsonplaceholder.typicode.com/posts')
          }
        >
          Click
        </button>
      </div>

      {loading && <Loading />}
      {error && <Error message={error} />}

      {JSON.stringify(data)}
    </div>
  );
}

export default Users;