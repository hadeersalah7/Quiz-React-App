import React from 'react'
import Answers from './Answers'
import QuizTimer from './QuizTimer'
export default function Questions({ answers, answerState, onSelectedAnswer, questionText, selectedAnswer, onSkip}) {
    return (
        <div id='question'>
            <QuizTimer  onTimeout={onSkip} timer={10000} />
            <h2>{questionText}</h2>
            <Answers
                answers={answers}
                selectedAnswer={selectedAnswer}
                answerState={answerState}
                onSelect={onSelectedAnswer}
            />
        </div>
    )
}
