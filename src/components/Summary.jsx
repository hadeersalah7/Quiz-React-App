import quizCompleted from "../assets/quiz-complete.png"
import QUESTIONS from "../questions"
export default function Summary({userAnswer}) {
    return (
        <div id="summary">
            <img src={quizCompleted} alt="Trophy Image" />
            <h2>Quiz Completed! ^^</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">10%</span>
                    <div className="text">skipped</div>
                </p>

                <p>
                    <span className="number">10%</span>
                    <div className="text">answered correctly</div>
                </p>

                <p>
                    <span className="number">10%</span>
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
                        return <li key={answer}>
                            <h3>{ index + 1}</h3>
                            <p className="question">{ QUESTIONS[index].text}</p>
                            <p className={cssClass}>{answer ?? "Skipped"}</p>
                    </li>
                    })}
                    
                </ol>
            
        </div>
    );
}
