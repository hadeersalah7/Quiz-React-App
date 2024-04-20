import { useState } from 'react'
import Answers from './Answers'
import QuizTimer from './QuizTimer'
import QUESTIONS from "../questions"
export default function Questions({ answers,  onSelectedAnswer, questionText, selectedAnswer, onSkip, key }) {
    const [answer, setAnswer] = useState({ selectedAnswer: "", isCorrect: null })
    const handleSelectAnswer = (answer) => {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: QUESTIONS[key].answers[0] === answer ? true : false
})
setTimeout(() => {
    onSelectedAnswer()
}, 2000)

        }, 1000)
    }
    let answerState = ""
    if(answer.selectedAnswer){
        answerState = answer.isCorrect ? true : false
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
