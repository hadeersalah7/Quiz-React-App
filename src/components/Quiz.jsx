import { useState, useCallback, useRef } from 'react'
import QUESTIONS from "../questions"
import quizCompleted from "../assets/quiz-complete.png"
import Questions from './Questions'
export default function Quiz() {

    const [userAnswer, setUserAnswer] = useState([])
    const [answerState, setAnswerState] = useState("")
    const activeQuestionIndex = answerState === "" ? userAnswer.length : userAnswer.length - 1

    const quizIsCompleted = activeQuestionIndex === QUESTIONS.length
    const handleAddAnswer = useCallback((selectedAnswer) => {
        setAnswerState("answered")
        setUserAnswer((prevAnswer) => {
            return [...prevAnswer, selectedAnswer]
        })
        setTimeout(() => {
            if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
                setAnswerState("correct")
            } else {
                setAnswerState("wrong")
            }
            setTimeout(() => {
                setAnswerState("")
            }, 2000)
        }, 1000)
    }, [activeQuestionIndex])
    if (quizIsCompleted) {
        return <div id='summary'>
            <img src={quizCompleted} alt='Trophy Image'/>
            <h2>Quiz Completed! ^^</h2>
        </div>
    }
    
    const skippedTimeOut = useCallback(() => handleAddAnswer(null), [handleAddAnswer])
    return (
        <div id='quiz'>
            <Questions
                key={activeQuestionIndex}
                onSkip={skippedTimeOut}
                questionText={QUESTIONS[activeQuestionIndex].text}
                answerState={answerState}
                answers={QUESTIONS[activeQuestionIndex].answers}
                selectedAnswer={userAnswer[userAnswer.length - 1]}
                onSelectedAnswer = {handleAddAnswer}
            />
        </div>

    )
}
