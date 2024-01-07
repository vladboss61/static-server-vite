import { useMemo, useState } from 'react';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Outlet, useNavigate } from 'react-router-dom';

const App = () => {

  const [count, setCount] = useState(0)

  const randomF = useMemo(() => Math.random(), [count]);// Just remove for test purpose.

  const navigate = useNavigate();

  return (
    <>
      {randomF}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
        <button onClick={() => navigate('home')}>
          Home
        </button>
        
        <button onClick={() => navigate('units')}>
          Units
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      {/* Render child routes here. / (default index <Content></Content>) or <Units></Units> */}
      <Outlet/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
