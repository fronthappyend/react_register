import React from 'react'

export default ({ 
    classNames,
    buttonText
 }) => {

    return (
        <button 
            className={'button ${classNames.join(" ")}'}
        >
            {buttonText}  
        </button>
    )
}