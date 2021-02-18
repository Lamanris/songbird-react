import React, {useState,useEffect} from 'react'
import {Context} from './context'
import Header from "./components/header/Header";
import Question from "./components/question/Question";
import Answers from "./components/answers/Answers";
import Description from "./components/description/Description";
import GameOver from "./components/gameover/GameOver";
import birdsData from "./birds";

function App() {
    const [step, setStep] = useState(1)
    useEffect(() => {
        let randomQuestion = Math.floor(Math.random() * 6) + 1;
        question.map((el) => {
            return el.id === randomQuestion && setActiveQuestion(el)
        })

    }, [step])
    const [activeQuestion, setActiveQuestion] = useState({})
    const [isTrue, setIsTrue] = useState({
        status: false,
    })
    const [isSelected, setIsSelected] = useState({})
    const [result, setResult] = useState(false)
    const [wrongAnswer, setWrongAnswers] = useState([])
    const [totalPoints, setTotalPoints] = useState([0])

    const question = birdsData[step - 1]
    function nextQuestion() {
        if (step >= (birdsData.length)) {
            setResult(true)
        } else {
            setStep(step + 1)
            setIsTrue({
                status: false,
            })
            setIsSelected(false)
            setWrongAnswers([])
        }
    }
    function resetGame() {
        setStep(1)
        setIsTrue({
            status: false,
        })
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
            step, setStep, activeQuestion, setActiveQuestion, isTrue, setIsTrue, isSelected, setIsSelected, result, setResult, wrongAnswer, setWrongAnswers, totalPoints, setTotalPoints, question, nextQuestion, resetGame, countPoints
        }}>
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
                            <button className={`App__button ${isTrue.status ? 'App__button--on' : 'App__button--off'}`} disabled={!isTrue.status}
                                    onClick={() => nextQuestion()}
                            >{
                                isTrue.status && step === birdsData.length ? 'Перейти к результату' : 'Следующий вопрос'
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

export default App;
