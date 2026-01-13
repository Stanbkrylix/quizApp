import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate,
    useParams,
} from "react-router-dom";
import { MockData } from "./MockData.js";
import { use, useState } from "react";

export default function App() {
    const [reviewState, setReviewState] = useState(false);
    const [quizState, setQuizState] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz/:id" element={<Quiz />} />
                <Route path="/review/:id" element={<Review />} />
            </Routes>
        </BrowserRouter>
    );
}

function Home() {
    return (
        <>
            <div>
                <h1>Home</h1>
                <div className="quiz-div">
                    <h2>Quiz Section</h2>
                    <div className="quiz-section">
                        {MockData.map((data) => (
                            <QuizSubject key={data.id} quiz={data} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

function QuizSubject({ quiz }) {
    return (
        <>
            <div className="name-of-quiz-div">
                <p className="name-of-quiz-p">{quiz.subject}</p>
                <Link to={`/quiz/${quiz.id}`}>Quiz</Link>
                <Link to={`/review/${quiz.id}`}>Review</Link>
            </div>
        </>
    );
}

function Quiz() {
    const { id } = useParams();
    const currentQuiz = MockData.find((quiz) => quiz.id === Number(id));
    const [currentQuizInd, setCurrentQuizInd] = useState(0);
    const { data } = currentQuiz;
    const quizData = { ...data };
    const selectedQuiz = quizData[currentQuizInd];
    const [selectedValue, setSelectedValue] = useState(null);

    return (
        <>
            <div className="quiz">
                <h1>{currentQuiz?.subject} Quiz</h1>
                <div className="quiz-box-div">
                    <h2 className="quiz-question">{selectedQuiz?.question}</h2>
                    <div className="quiz-options-div">
                        <ul className="quiz-options-lists">
                            {selectedQuiz?.options.map((op, ind) => (
                                <li key={ind}>
                                    <label htmlFor={op}>
                                        <input
                                            type="radio"
                                            name={selectedQuiz?.id}
                                            value={op}
                                            checked={selectedValue === op}
                                            onChange={() =>
                                                setSelectedValue(op)
                                            }
                                        />
                                        {op}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {}
                </div>
                <Link to={"/"}>Back Home</Link>
            </div>
        </>
    );
}

function Review() {
    const { id } = useParams();
    const reviewObject = MockData.find((data) => data.id === Number(id));
    const optionSelection = ["A", "B", "C", "D"];

    const [revealAnswer, setRevealAnswer] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isBtnDisabled, setIsBtnDisabled] = useState(false);

    if (!reviewObject) {
        return <p>Review Not Found</p>;
    }

    const { data } = reviewObject;

    function toNextQuestion() {
        if (currentQuestion === data.length - 1) {
            return;
        }
        setCurrentQuestion(currentQuestion + 1);
        setRevealAnswer(false);
    }

    function toPrevQuestion() {
        if (currentQuestion === 0) return;
        setCurrentQuestion(currentQuestion - 1);
        setRevealAnswer(false);
    }

    const question = data[currentQuestion];
    return (
        <>
            <div>
                <h1>{reviewObject.subject} Quiz</h1>
                <div className="review-box">
                    {data.length === 0 ? (
                        <h2>No Review exist yet</h2>
                    ) : (
                        <>
                            <h2 className="review-question">
                                {question.question}
                            </h2>
                            <div className="review-options">
                                <ul className="review-choices">
                                    {question.options.map((op, index) => (
                                        <li
                                            key={index}
                                            className="review-choice"
                                        >
                                            <span>
                                                {optionSelection[index]}
                                            </span>
                                            {". "}
                                            <span>{op}</span>{" "}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <h2
                                className="review-answer"
                                style={{ textAlign: "start" }}
                                onClick={() =>
                                    setRevealAnswer((reveal) => !reveal)
                                }
                            >
                                {revealAnswer
                                    ? `${question.answer}`
                                    : "Reveal Answer??"}
                            </h2>
                            <div className="prev-next-btns">
                                <button
                                    disabled={currentQuestion === 0}
                                    className="prev-btn"
                                    onClick={toPrevQuestion}
                                >
                                    {" "}
                                    {"<"}{" "}
                                </button>
                                <button
                                    disabled={
                                        currentQuestion === data.length - 1
                                    }
                                    className="next-btn"
                                    onClick={toNextQuestion}
                                >
                                    {">"}
                                </button>
                            </div>
                        </>
                    )}
                </div>
                <Link to={"/"}>Back Home</Link>
            </div>
        </>
    );
}
