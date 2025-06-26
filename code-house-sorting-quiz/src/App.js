import React, {useCallback, useState} from 'react';
import { Landing } from './components/Landing.jsx'
import { Quiz }  from './components/Quiz.jsx'
import { QuizResult } from './components/QuizResult.jsx';

function App() {
  const [show, setShow] = useState(false); 
  const [finish, setFinish] = useState(false)

  const handleToggle = useCallback(() => setShow(prevShow => !prevShow),[])
  const handleFinish = useCallback(() => setFinish(prevFinish => !prevFinish), [])

  return (
    <div className='flex flex-col justify-center text-center gap-8 my-8'>
      <h3 className="text-4xl"> Code Ninjas </h3>
      <h1 className="font-bold text-8xl "> CODE HOUSES </h1>
      <Landing handleToggle={handleToggle} show={show}/>
      <Quiz show={show}/>
    </div>
  );
}

export default App;
