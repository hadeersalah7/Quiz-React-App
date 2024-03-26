import { useState } from 'react'
import QUESTIONS from "../questions"
export default function Quiz() {

    const [userAnswer, setUserAnswer] = useState([])
    const activeQuestionIndex = userAnswer.length

    const handleAddAnswer = (selectedAnswer) => {
        setUserAnswer((prevAnswer) => {
            return [...prevAnswer, selectedAnswer]
        })
    }
    return (
        <div id='quiz'>
            <div id='question'>
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id='answers'>
                    {QUESTIONS[activeQuestionIndex].answers.map((answer) =>
                        <li key={answer} className='answer'>
                            <button onClick={() => handleAddAnswer(answer)}>{answer}</button>
                        </li>)}
                </ul>
            </div>
        </div>

    )
}
