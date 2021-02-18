import React,{useContext} from 'react'
import {Context} from "../../context"
import AnswersCircle from "./AnswersCircle"
import './answers.css'
import stupid from '../../static/sounds/you-stupid-sound.mp3'
import chill from '../../static/sounds/daddy-chill-mcjuggernuggets-mp3cut.mp3'
import bruh from '../../static/sounds/movie_1_C2K5NH0.mp3'

const Answers = () => {
    const {question, activeQuestion, setIsTrue, isTrue, setIsSelected, countPoints, setWrongAnswers, wrongAnswer} = useContext(Context)
    function answerIsTrue(answer,id) {
        if (answer === activeQuestion.name ) {
            new Audio(chill).play()
            setIsTrue({status : true, id : id})
            countPoints()
        } else {
            if (wrongAnswer.length > 1) {
                new Audio(bruh).play()
            } else {
                new Audio(stupid).play()
            }
            setIsTrue({status : false, id : id})
            setWrongAnswers([...new Set([...wrongAnswer, answer])])
        }
    }
    return (
        <div className="answers">
            {
                question.map((el) => (
                    <button className="answers__button"
                            key={el.id}
                            onClick={() => {
                                if (isTrue.status === false) {
                                    answerIsTrue(el.name, el.id)
                                    setIsSelected({...el, isClicked : true})
                                } else {
                                    setIsSelected({...el, isClicked : true})
                                }
                            }
                            }
                    >
                        <AnswersCircle idx={el.id}/>
                        {el.name}
                    </button>
                ))
            }
        </div>
    );
};

export default Answers