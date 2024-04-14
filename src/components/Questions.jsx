import { useState } from 'react'
import Answers from './Answers'
import QuizTimer from './QuizTimer'
export default function Questions({ answers, answerState, onSelectedAnswer, questionText, selectedAnswer, onSkip }) {
    const [answer, setAnswer] = useState({ selectedAnswer: "", isCorrect: null })
    const handleSelectAnswer = (answer) => {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: true
})
        }, 1000)
    }
    return (
        <div id='question'>
            <QuizTimer  onTimeout={onSkip} timer={10000} />
            <h2>{questionText}</h2>
            <Answers
                answers={answers}
                selectedAnswer={selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />
        </div>
    )
}
