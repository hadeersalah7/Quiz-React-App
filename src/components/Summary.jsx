import quizCompleted from "../assets/quiz-complete.png"
import QUESTIONS from "../questions"
export default function Summary({ userAnswer }) {
    const skippedAnswer = userAnswer.filter(answer => answer === null)
    const correctAnswer = userAnswer.filter((answer, index) => answer === QUESTIONS[index].answers[0])
    const skippedAnswersShare = Math.round(skippedAnswer.length / userAnswer.length * 100)
    const correctAnswersShare = Math.round(correctAnswer.length / userAnswer.length * 100)
    const wrongAnswersShare = 100 - skippedAnswersShare - correctAnswersShare
    return (
        <div id="summary">
            <img src={quizCompleted} alt="Trophy Image" />
            <h2>Quiz Completed! ^^</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedAnswersShare}%</span>
                    <div className="text">skipped</div>
                </p>

                <p>
                    <span className="number">{correctAnswersShare}%</span>
                    <div className="text">answered correctly</div>
                </p>

                <p>
                    <span className="number">{wrongAnswersShare}%</span>
                    <div className="text">answered incorrectly</div>
                </p>
            </div>
                <ol>
                {userAnswer.map((answer, index) => {
                    let cssClass = "user-answer"
                    if (answer === null) {
                        cssClass += " skipped"
                    } else if (answer === QUESTIONS[index].answers[0]) {
                        cssClass += " correct"
                    } else {
                        cssClass += " wrong"
                    }
                        return <li key={index}>
                            <h3>{ index + 1}</h3>
                            <p className="question">{ QUESTIONS[index].text}</p>
                            <p className={cssClass}>{answer ?? "Skipped"}</p>
                    </li>
                    })}
                    
                </ol>
            
        </div>
    );
}
