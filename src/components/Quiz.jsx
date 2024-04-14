import { useState, useCallback } from 'react'
import QUESTIONS from "../questions"
import quizCompleted from "../assets/quiz-complete.png"
import QuizTimer from './QuizTimer'
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
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers].sort(() => Math.random() - 0.5)
    const skippedTimeOut = useCallback(() => handleAddAnswer(null), [handleAddAnswer])
    return (
        <div id='quiz'>
            <div id='question'>
                <QuizTimer key={activeQuestionIndex} onTimeout={skippedTimeOut} timer={10000}/>
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id='answers'>
                    {shuffledAnswers.map((answer) => {
                        let cssClass = ""
                        const isSelected = userAnswer[userAnswer.length - 1] === answer
                        if (answerState === "answered" && isSelected) {
                            cssClass = "selected"
                        }
                        if ((answerState == "correct" || answerState == "wrong") && isSelected) {
                            cssClass = answerState
                        }
                        return  <li key={answer} className='answer'>
                            <button onClick={() => handleAddAnswer(answer)} className={cssClass}>
                                {answer}
                            </button>
                        </li>
                    })}
                </ul>
            </div>
        </div>

    )
}
