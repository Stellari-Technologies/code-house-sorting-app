import { useState } from "react"
import { data } from "../assets/data"
import { houseData } from "../assets/houseData"

export const Quiz = ({show, handleToggle}) => {

    const [questionIndex, setQuestionIndex] = useState(0)
    const [userName, setUserName] = useState("")
    const [startQuiz, setStartQuiz] = useState(false)
    const [finishQuiz, setFinishQuiz] = useState(false)
    //const [secondHouse, setSecondHouse] = useState("") Extra?
    const [houseInfo, setHouseInfo] = useState()

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
        let quizResult = mostFrequent(userAnswers)

        switch (quizResult) {
            case "A":
                setHouseInfo(houseData[0])
                break;
            case "B":
                setHouseInfo(houseData[2])
                break;
            case "C":
                setHouseInfo(houseData[3])
                break;
            case "D":
                setHouseInfo(houseData[1])
                break;
            default:
                console.log("Error")
        }
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

    const resetAll = () => {
        setStartQuiz(false)
        setUserName("")
        setFinishQuiz(false)
        setHouseInfo()
        setQuestionIndex(0)
        handleToggle()
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
                                <p className="text-4xl text-bold"> {userName}..... your house is....</p>
                                <div className="flex flex-row gap-8"> 
                                    <img src={houseInfo.image} alt="" className="rounded-full w-96 border-8 mx-16" />
                                    <div className="flex flex-col text-center gap-8 mt-16 mx-8">
                                        <h1 className="text-3xl"> {houseInfo.houseName} </h1>
                                        <p className="text-start"> {houseInfo.description} </p>
                                    </div>
                                </div>
                                <button onClick={resetAll}> Home </button>

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