import React, {useContext} from 'react'
import {Context} from '../../context'
import './gameover.css'
import putin from '../../static/video/wide-putin.mp4'
import shit from '../../static/sounds/shit.mp3'

const GameOver = () => {
    const {resetGame, totalPoints} = useContext(Context)
    return (
        <div className="app__gameover">
            {
                !(totalPoints.reduce((acc, rec) => acc + rec) === 30) ? (
                    <>
                        <h2 className="app__finish-headline">Игра окончена!</h2>
                        <h4 className="app__finish-text">Вы прошли викторину и набрали {totalPoints.reduce((acc, rec) => acc + rec)
                        } из 30 возможных баллов.</h4>
                    </>
                ) : (
                    <>
                        <h2 className="app__finish-headline">Поздравляем!</h2>
                        <h4 className="app__finish-text">Вы прошли викторину и набрали 30 из 30 возможных баллов.</h4>
                        <video width="320" height="240" autoPlay loop className="app__win">
                            <source src={putin} type="video/mp4"/>
                                    Your browser does not support the video tag.
                        </video>
                    </>
                )
            }
            <hr/>
                <button className="app__button  app__button-gameover" onClick={() => {
                    resetGame()
                    new Audio(shit).play()
                }}>Попробовать еще раз!</button>

        </div>
    );
};

export default GameOver;