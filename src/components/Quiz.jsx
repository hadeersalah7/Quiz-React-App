import { useState, useCallback, useRef } from 'react'
import QUESTIONS from "../questions"
import quizCompleted from "../assets/quiz-complete.png"
import Questions from './Questions'
export default function Quiz() {

    const [userAnswer, setUserAnswer] = useState([])
    const activeQuestionIndex = userAnswer.length;
    const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;
    const handleAddAnswer = useCallback((selectedAnswer) => {
        setUserAnswer((prevAnswer) => {
            return [...prevAnswer, selectedAnswer];
        });
    }, []);

const skippedTimeOut = useCallback(
        () => handleAddAnswer(null),
        [handleAddAnswer]
    );
    
    if (quizIsCompleted) {
        return (
            <div id="summary">
                <img src={quizCompleted} alt="Trophy Image" />
                <h2>Quiz Completed! ^^</h2>
            </div>
        );
    }

    
    return (
        <div id="quiz">
            <Questions
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSkip={skippedTimeOut}
                onSelectedAnswer={handleAddAnswer}
            />
        </div>
    );
}
