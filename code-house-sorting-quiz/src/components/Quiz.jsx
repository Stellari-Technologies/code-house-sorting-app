import { useState } from "react"
import { data } from "../assets/data"

export const Quiz = ({show}) => {

    const [questionIndex, setQuestionIndex] = useState(0)
    const [userName, setUserName] = useState("")
    const [startQuiz, setStartQuiz] = useState(false)
    //const []

    const handleStart = () => {
        setStartQuiz(true)
    }

    return (

        /*
        11 Questions
        1st Question is Name
        Final answer depends on most common answer
        Also show 2nd most common answer result?
        */

        <div>
        {show && 
            <div className="flex flex-col">
                {startQuiz === false ?  (
                    <div className="flex flex-col content-center">
                        <label className="text-6xl mt-8"> Enter your Name: </label>
                        <input 
                            type="text"
                            id="userName"
                            required
                            maxLength={15}
                            onChange={(e) => setUserName(e.target.value)}
                            className="bg-yellow-100 rounded-2xl p-8 mt-8 text-8xl w-4/5 border-8 border-slate-900 self-center"
                        />
                        <button onClick={handleStart}className="m-16 text-4xl bg-yellow-500 border-8 border-yellow-300 box-content size-48 self-center" >Next</button>

                    </div>
                    ):( 
                    <div>
                        <h1> {data[questionIndex].question}</h1>
                        <ul className="flex flex-col text-start">
                            <li >{data[questionIndex].option1}</li>
                            <li >{data[questionIndex].option2}</li>
                            <li >{data[questionIndex].option3}</li>
                            <li >{data[questionIndex].option4}</li>
                        </ul>  
                    </div>
                   
                )}
                
            </div>
        }
        </div>
        
    )
}