import React from 'react'

export default ({
    labelText,
    placeholderText,
    typeInput
}) => {
    return (
        <div>
            <label className="label">{ labelText }</label>
            <p className="control">
                <input 
                    className="input" 
                    type={typeInput}
                    placeholder={placeholderText}
                />
            </p>
        </div>
    )
}