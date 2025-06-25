import { useState } from "react"
import { data } from "../assets/data"

export const Quiz = ({show}) => {

    const [questionIndex, setQuestionIndex] = useState(0)
    const [userName, setUserName] = useState("")
    const [startQuiz, setStartQuiz] = useState(false)

    let userAnswers = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
    }

    const handleStart = () => {
        setStartQuiz(true)
    }

    const chooseAnswer = ( chosenAnswer ) => {
        console.log(chosenAnswer)
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
                        <label className="text-6xl mt-8"> Enter your name: </label>
                        <input 
                            type="text"
                            id="userName"
                            placeholder="Name"
                            required
                            maxLength={15}
                            onChange={(e) => setUserName(e.target.value)}
                            className="bg-yellow-100 rounded-2xl p-8 mt-8 text-8xl w-4/5 border-8 border-slate-900 self-center"
                        />
                        <button onClick={handleStart}className="m-16 text-4xl bg-yellow-500 border-8 border-yellow-300 min-w-72 min-h-32 self-center hover:border-yellow-500 hover:bg-yellow-300 hover:text-white" >Next</button>

                    </div>
                    ):( 
                    <div>
                        <h1 className="text-4xl underline decoration-8"> {data[questionIndex].question}</h1>
                        <ul className="grid grid-cols-2 text-start max-w-1/2 gap-8 mt-16 mx-16">
                            <button onClick={console.log("hello")} className="text-3xl py-16 px-8 border-8 border-pink-200 rounded-md bg-pink-100 cursor-pointer hover:border-pink-300 active:bg-pink-200">{data[questionIndex].option1}</button>
                            <button onClick={chooseAnswer("B")} className="text-3xl py-16 px-8 border-8 border-blue-200 rounded-md bg-blue-100 cursor-pointer hover:border-blue-300 active:bg-blue-200">{data[questionIndex].option2}</button>
                            <button onClick={chooseAnswer("C")} className="text-3xl py-16 px-8 border-8 border-orange-200 rounded-md bg-orange-100 cursor-pointer hover:border-orange-300 active:bg-orange-200">{data[questionIndex].option3}</button>
                            <button onClick={chooseAnswer("D")} className="text-3xl py-16 px-8 border-8 border-purple-200 rounded-md bg-purple-100 cursor-pointer hover:border-purple-300 active:bg-purple-200">{data[questionIndex].option4}</button>
                        </ul>  
                    </div>
                   
                )}
                
            </div>
        }
        </div>
        
    )
}