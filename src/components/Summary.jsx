import quizCompleted from "../assets/quiz-complete.png"
export default function Summary() {
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
                <ol>
                    <li>
                        <h3>2</h3>
                        <p className="question">question text</p>
                        <p className="user-answer">user's answers</p>
                    </li>
                </ol>
            </div>
        </div>
    );
}
