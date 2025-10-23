import { useEffect, useState } from "react";
import { MockData } from "./MockData";
import {
    Link,
    BrowserRouter,
    Route,
    Routes,
    useParams,
    useLocation,
    useNavigate,
} from "react-router-dom";

import "./App.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <AppContent />
            </BrowserRouter>
        </>
    );
}

function AppContent() {
    const [Data, setData] = useState(MockData);
    const [shiftIndex, setShiftIndex] = useState(0);

    const location = useLocation();
    const navigate = useNavigate();

    // when load to make page return to Dashboard
    useEffect(() => {
        if (location.pathname !== "/") {
            navigate("/", { replace: true });
        }
    }, []);

    function moveForward() {
        setShiftIndex(shiftIndex + 1);
    }

    function moveBackward() {
        if (shiftIndex === 0) return;
        setShiftIndex(shiftIndex - 1);
    }

    return (
        <div className="app-content">
            <Menu />

            <div className="content-side">
                <Routes>
                    <Route path="/" element={<DashBoard />} />
                    <Route
                        path="/review"
                        element={
                            <Review
                                Data={Data}
                                moveForward={moveForward}
                                moveBackward={moveBackward}
                                shiftIndex={shiftIndex}
                            />
                        }
                    />
                    <Route path="/quiz" element={<Quiz Data={Data} />} />
                </Routes>
            </div>
        </div>
    );
}

function Menu() {
    return (
        <div className="menu-section">
            <Link to={"/"}>
                <h2>Dashboard</h2>
            </Link>
            <Link to={"/review"}>
                <h2>Review</h2>
            </Link>
            <Link to={"/quiz"}>
                <h2>Quiz</h2>
            </Link>
        </div>
    );
}

function DashBoard() {
    return (
        <div className="dashboard-div">
            <h1>This is the Dashboard page</h1>
        </div>
    );
}
function Review({ Data, moveForward, moveBackward, shiftIndex }) {
    return (
        <div className="review-div">
            <h1>This is the Review page</h1>
            <div className="review-content">
                <p className="question-p">Question</p>
                <p className="answer-p">Answer</p>
                <div className="shifting-btn">
                    <button className="back-btn">Back</button>
                    <button className="next-btn">Next</button>
                </div>
            </div>
        </div>
    );
}
function Quiz({ Data }) {
    return (
        <div className="quiz-div">
            <h1>This is the Quiz page</h1>
        </div>
    );
}

export default App;
