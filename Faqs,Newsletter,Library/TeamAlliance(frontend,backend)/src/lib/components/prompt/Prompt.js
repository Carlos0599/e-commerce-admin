import React from 'react'

const Prompt = ({ icon, title, onClick, active }) => {
    return (
        <div className={`prompt${active ? " active" : ""}`}>
            <div>
                <div />
                <div />
                <div>
                    <p> {icon} {title} </p>
                    <button type="submit" className="primary solid" onClick={onClick}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Prompt
