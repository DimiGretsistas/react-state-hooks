import './App.css';
import Counter from './components/Counter';
import { useState } from 'react';


 
function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = event => {
    setTheme(event.target.value);
  };

  return (
    <div className={'App ' + theme}>
      <h1>React - state and events</h1>
      <Counter />

      <select onChange= {toggleTheme}>
        <option value = "light"> Light </option>
        <option value = "dark"> Dark </option>
      </select>
    </div>
  );
}
 
export default App;





































// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
