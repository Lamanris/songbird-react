import React,{useContext} from 'react';
import {Context} from "../../context";

const AnswersCircle = ({idx}) => {
    const {isTrue} = useContext(Context)
    const customStyles = {
        answerTrue : {
            backgroundColor: '#32cd32'
        },
        answerFalse : {
            backgroundColor: 'red'
        },
        default : {
            backgroundColor: '#9b9b9b'
        }

    }
    function answerStyling (idx) {
        if (isTrue.id === idx && isTrue.status ) {
            return customStyles.answerTrue
        } else if (!isTrue.status && isTrue.id === idx) {
            return customStyles.answerFalse
        } else {
            return customStyles.default
        }
    }
    return (
        <div className="answers-circle" style={answerStyling(idx)}></div>
    )
}

export default AnswersCircle;