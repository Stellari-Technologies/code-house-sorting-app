import { useState } from "react"
import { data } from "../assets/data"

export const Quiz = ({show}) => {

    const [questionIndex, setQuestionIndex] = useState(0)
    const [userName, setUserName] = useState("")
    const [startQuiz, setStartQuiz] = useState(false)
    const [finishQuiz, setFinishQuiz] = useState(false)
    const [userHouse, setUserHouse] = useState("")
    const [secondHouse, setSecondHouse] = useState("")

    let userAnswers = []

    const handleStart = () => {
        setStartQuiz(true)
    }

    /**
     https://www.geeksforgeeks.org/javascript/javascript-program-to-find-the-most-frequent-element-in-an-array/ 
     */
    function mostFrequent(userAnswers) {
        let m = {}
        let maxCount = 0
        let res = null

        for (let i of userAnswers) {
            m[i] = (m[i] || 0) +1;
            if (m[i] > maxCount){
                maxCount = m[i]
                res = i
            }
        }
        return res
    }

    const getUserHouses = () => {
        setUserHouse(mostFrequent(userAnswers))
    }

    const chooseAnswer = ( chosenAnswer ) => {
        switch (chosenAnswer) {
            case "A":
                userAnswers.push("A");
                break;
            case "B":
                userAnswers.push("B") ;
                break
            case "C":
                userAnswers.push("C") ;
                break
            case "D":
                userAnswers.push("D") ;
                break
            default: 
                console.log("Error!")
                break
        }
        if (questionIndex < 9){
            setQuestionIndex(questionIndex+1)
        } else {
            setFinishQuiz(!finishQuiz)
            getUserHouses()
        }
    }

    return (

        <div>
        {show && 
            <div className="flex flex-col">
                {startQuiz === false ?  (
                    
                    <form className="flex flex-col content-center" onSubmit={handleStart}>
                        {/*TODO separate into own component */}
                        <label className="text-6xl mt-8"> Enter your name: </label>
                        <input 
                            type="text"
                            id="userName"
                            placeholder="Name"
                            required
                            maxLength={15}
                            minLength={2}
                            onChange={(e) => setUserName(e.target.value)}
                            className="bg-yellow-100 rounded-2xl p-8 mt-8 text-8xl w-4/5 border-8 border-slate-900 self-center"
                        />
                        <button className="m-16 text-4xl bg-yellow-500 border-8 border-yellow-300 min-w-72 min-h-32 self-center hover:border-yellow-500 hover:bg-yellow-300 hover:text-white" >Next</button>
                    </form>
                ):(
                    <div>
                        {finishQuiz ? (
                            <div> 
                                <p> {userName}..... your house is....</p>
                                <> {userHouse}</>

                            </div>
                        ):( 
                            <div> {/*Separate into own component */}
                                <h1 className="text-4xl underline decoration-8"> {data[questionIndex].question}</h1>
                                <div className="grid grid-cols-2 text-start max-w-1/2 gap-8 mt-16 mx-16">
                                    <button onClick={() => chooseAnswer("A")} className="text-3xl py-16 px-8 border-8 border-pink-200 rounded-md bg-pink-100 cursor-pointer hover:border-pink-300 active:bg-pink-200">{data[questionIndex].option1}</button>
                                    <button onClick={() => chooseAnswer("B")} className="text-3xl py-16 px-8 border-8 border-blue-200 rounded-md bg-blue-100 cursor-pointer hover:border-blue-300 active:bg-blue-200">{data[questionIndex].option2}</button>
                                    <button onClick={() => chooseAnswer("C")} className="text-3xl py-16 px-8 border-8 border-orange-200 rounded-md bg-orange-100 cursor-pointer hover:border-orange-300 active:bg-orange-200">{data[questionIndex].option3}</button>
                                    <button onClick={() => chooseAnswer("D")} className="text-3xl py-16 px-8 border-8 border-purple-200 rounded-md bg-purple-100 cursor-pointer hover:border-purple-300 active:bg-purple-200">{data[questionIndex].option4}</button>
                                </div>  
                                <p className="my-8"> {questionIndex + 1}/10 </p>
                            </div>
                        )}{/* End finishQuiz */}
                    </div>
                   
                )} {/* End startQuiz */}
            </div>
        } {/* End show */}
        </div>
        
    )
}