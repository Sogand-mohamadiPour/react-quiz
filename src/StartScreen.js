import React from 'react'

export default function StartScreen({ numQuestions }) {
    return (
        <>
            <div className='start'>
                <h3>Welcome to React Quiz!</h3>
                <h3>{numQuestions} questions to test your React mastry</h3>
                <button className='btn btn-ui'>Let's start</button>
            </div>
        </>
    )
}
