import React, {useState,useEffect} from 'react'
import {Context} from './context'
import birdsData from "./birds";
import Header from "./components/header/Header";
import Question from "./components/question/Question";
import Answers from "./components/answers/Answers";
import Description from "./components/description/Description";
import GameOver from "./components/gameover/GameOver";

function App() {
    const [step, setStep] = useState(1)
    useEffect(() => {
        let randomQuestion = Math.floor(Math.random() * 6) + 1;
        exercise.map((el) => {
            return el.id === randomQuestion && setActiveAnswer(el)
        })
    }, [step])

    const exercise = birdsData[step - 1]
    const [result, setResult] = useState(false)
    const [wrongAnswer, setWrongAnswers] = useState([])
    const [totalPoints, setTotalPoints] = useState([0])
    const [activeAnswer, setActiveAnswer] = useState({})
    const [isAnswerTrue, setIsAnswerTrue] = useState(false)
    const [isSelected, setIsSelected] = useState({})


    function nextQuestion() {
        if (step >= (birdsData.length)) {
            setResult(true)
        } else {
            setStep(step + 1)
            setIsAnswerTrue(false)
            setIsSelected(false)
            setWrongAnswers([])
        }
    }
    function resetGame() {
        setStep(1)
        setIsAnswerTrue(false)
        setIsSelected(false)
        setTotalPoints([0])
        setWrongAnswers([])
        setResult(false)
    }
    function countPoints() {
        setTotalPoints([...totalPoints, 5 - wrongAnswer.length])
    }

    return (
        <Context.Provider value={{
            step, exercise, setStep, activeAnswer, setActiveAnswer, isAnswerTrue, setIsAnswerTrue, isSelected, setIsSelected, result, setResult, wrongAnswer, setWrongAnswers, totalPoints, setTotalPoints, nextQuestion, resetGame, countPoints}}>
            <div className="app">
                <Header />
                {
                    !result ? (
                        <>
                            <Question />
                            <div className="app__answers-and-info">
                                <Answers />
                                <Description />
                            </div>
                            <button className={`App__button ${isAnswerTrue ? 'App__button--on' : 'App__button--off'}`} disabled={!isAnswerTrue}
                                    onClick={() => nextQuestion()}
                            >{
                                isAnswerTrue && step === birdsData.length ? 'Перейти к результату' : 'Следующий вопрос'
                            }</button>
                        </>
                    ) : (
                        <div>
                            <GameOver />
                        </div>
                    )
                }
            </div>
        </Context.Provider>
    )
}

export default App
