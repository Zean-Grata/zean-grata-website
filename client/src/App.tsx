import { useState } from 'react'
import './App.css'
import { Button } from 'react-bootstrap';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://node-vite-app-281435d45db7.herokuapp.com/data'); // Replace with your API endpoint
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={fetchData} disabled={loading}> {loading ? 'Loading...' : 'Fetch Data'}</Button>

      {data && (
        <div>
          <h2>Fetched Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}


export default App
