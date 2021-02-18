import React, {useContext} from 'react'
import {Context} from '../../context'
import './description.css'

const Description = () => {
    const {isSelected} = useContext(Context)
    return (
        <div className="description">
            {
                !isSelected.isClicked? (
                    <p className="description__start-text">Послушайте плеер.<br/>Выберите птицу из
                        списка.
                    </p>
                ) : (
                    <>
                        <div className="description__content">
                            <img className="description__bird-image" alt="bird" src={isSelected.image}/>
                            <div className="description__header">
                                <h4 className="description__bird-name">{isSelected.name}</h4>
                                <hr/>
                                <p className="description__bird-species">{isSelected.species}</p>
                                <hr/>
                                <audio className="react-audio-player description__audio-player" controls id
                                       preload="metadata"
                                       src={isSelected.audio}
                                       title={isSelected.audio}>
                                    <p>Your browser does not support the <code>audio</code> element.</p></audio>
                            </div>
                        </div>
                        <p className="description__bird-info">{isSelected.description}</p>
                    </>
                )
            }

        </div>
    )
}

export default Description