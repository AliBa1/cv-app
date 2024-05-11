import { useState } from 'react'
import General from './components/General.jsx'
import GeneralForm from './components/GeneralForm.jsx'
import Education from './components/Education.jsx'
import EducationForm from './components/EducationForm.jsx'
import Experience from './components/Experience.jsx'
import ExperienceForm from './components/ExperienceForm.jsx'
import './App.css'

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

function App(){
  return (
    <>
      <div className="forms">
        <GeneralForm/>
        <EducationForm/>
        <ExperienceForm/>
      </div>

      <div className="cv">
        <General />
        <Education/>
        <Experience/>
      </div>
    </>
  )
}

export default App
