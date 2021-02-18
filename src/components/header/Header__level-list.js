import React,{useContext} from 'react';
import {Context} from "../../context";

const HeaderLevelList = ({headerLevels}) => {
    const {step, result} = useContext(Context)
    let customStyle = {
        levelActive: {
            backgroundColor: '#32cd32'
        },
        levelPrev: {
            backgroundColor: '#008b00'
        },
        default: {
            backgroundColor: '#9b9b9b'
        }
    }
    function stylingLevels(el,i) {
        if (result) {
            return customStyle.levelPrev
        } else if (i + 1 === step) {
            return customStyle.levelActive
        } else if (i + 1 < step) {
            return customStyle.levelPrev
        } else {
            return customStyle.default
        }
    }
    return (
        <ul className="header__level-list">
            {
                headerLevels.map((el,i) => (
                    <li className="header__level-item"
                        style={stylingLevels(el,i)}
                        key={el}>{el}</li>
                ))
            }
        </ul>
    );
};

export default HeaderLevelList;