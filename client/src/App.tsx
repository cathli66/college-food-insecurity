import React from 'react';
import './App.css';
import '../src/components/Shelf';
import '../src/components/Tile';
import Home from '../src/pages/Home';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <p className='title'>let's roll</p>
      <Home/>
    </div>
  );
}

export default App;
