import React,{useContext} from 'react'
import {Context} from "../../context"
import './answers.css'
import AnswersCircle from "./AnswersCircle"
import stupid from '../../static/sounds/you-stupid-sound.mp3'
import chill from '../../static/sounds/daddy-chill-mcjuggernuggets-mp3cut.mp3'
import bruh from '../../static/sounds/movie_1_C2K5NH0.mp3'

const Answers = () => {
    const {exercise, activeAnswer, setIsAnswerTrue, isAnswerTrue, setIsSelected, countPoints, setWrongAnswers, wrongAnswer} = useContext(Context)
    function answerIsTrue(answer) {
        if (answer.name === activeAnswer.name ) {
            new Audio(chill).play()
            setIsAnswerTrue(true)
            countPoints()
        } else {
            wrongAnswer.length > 1 ? new Audio(bruh).play() : new Audio(stupid).play()
            setIsAnswerTrue(false)
            setWrongAnswers([...new Set([...wrongAnswer, answer.name])])
        }
    }


    return (
        <div className="answers">
            {
                exercise.map((el) => (
                    <button className="answers__button"
                            key={el.id}
                            onClick={() => {
                                if (!isAnswerTrue) {
                                    answerIsTrue(el)
                                    setIsSelected({...el, isClicked : true})
                                } else {
                                    setIsSelected({...el, isClicked : true})
                                }
                            }
                            }
                    >
                        <AnswersCircle index={el.id}/>
                        {el.name}
                    </button>
                ))
            }
        </div>
    )
}

export default Answers