import React, {useContext} from 'react';
import {Context} from "../../context";
import './question.css'
import bird from '../../static/images/bird.06a46938.jpg'

const Question = () => {
    const {activeAnswer, isAnswerTrue} = useContext(Context)
    return (
        <div className="question">
            <img src={isAnswerTrue ? activeAnswer.image : bird} alt="bird" className="question__bird-image"/>
            <div className="question__content">
                <h3 className="question__bird-name">{isAnswerTrue? activeAnswer.name : '*****'}</h3>
                <hr/>
                <audio className="react-audio-player question__audio-player" controls id preload="metadata"
                       src={activeAnswer.audio}
                       title={activeAnswer.audio}>
                    <p>Your browser does not support the <code>audio</code> element.</p></audio>
            </div>
        </div>
    );
};

export default Question;