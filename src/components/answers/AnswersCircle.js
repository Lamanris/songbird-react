import React,{useContext, useState, useEffect} from 'react';
import {Context} from "../../context";

const AnswersCircle = ({index}) => {
    const {isAnswerTrue, activeAnswer, isSelected} = useContext(Context)
    const [color, setColor] = useState('')
    useEffect(() => {
        colorChanger()
    })
    function colorChanger() {
        if (isAnswerTrue && activeAnswer.id === index) {
            setColor('#32cd32')
        } else if (!isAnswerTrue && isSelected.id === index) {
            setColor('red')
        } else if (!isSelected.isClicked) {
            setColor('#9b9b9b')
        }
    }
    return (
        <div className="answers-circle" style={{backgroundColor: `${color}`}}></div>
    )
}

export default AnswersCircle
