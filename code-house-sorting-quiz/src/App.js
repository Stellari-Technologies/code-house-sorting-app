import React from 'react';
import { Landing } from './components/Landing.jsx'

function App() {
  //useState to show landing or Quiz

  return (
    <div className='flex flex-col justify-center'>
      <Landing/>
      <button> Start Quiz! </button>
    </div>
  );
}

export default App;
