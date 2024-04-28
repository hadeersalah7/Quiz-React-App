import { useState, useCallback, useRef } from 'react'
import QUESTIONS from "../questions"

import Questions from './Questions'
import Summary from './Summary';
export default function Quiz() {

    const [userAnswer, setUserAnswer] = useState([])
    const activeQuestionIndex = userAnswer.length;
    const quizIsCompleted = activeQuestionIndex === QUESTIONS.length;
    const handleAddAnswer = useCallback(function handleSelectedAnswer(selectedAnswer)  {
        setUserAnswer((prevAnswer) => {
            return [...prevAnswer, selectedAnswer];
        });
    }, []);

const skippedTimeOut = useCallback(
        () => handleAddAnswer(null),
        [handleAddAnswer]
    );
    
    if (quizIsCompleted) {
        return  <Summary userAnswer={ userAnswer} />
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
