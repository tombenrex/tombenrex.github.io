import { useState } from 'react';
import FrontPage from './components/FrontPage';
import MainPage from './components/MainPage'; // din huvudsida

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {entered ? (
        <MainPage /> // Här laddas huvudsidan
      ) : (
        <FrontPage onEnter={() => setEntered(true)} />
      )}
    </>
  );
}

export default App;
