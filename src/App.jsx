import { useState } from "react";
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
    const [count, setCount] = useState(0);

    return (
        <>
            <BrowserRouter>
                <AppContent />
            </BrowserRouter>
        </>
    );
}

function AppContent() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className="app-content">
            <Menu />

            <div className="content-side">
                <Routes>
                    <Route path="/" element={<DashBoard />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/quiz" element={<Quiz />} />
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
function Review() {
    return (
        <div className="review-div">
            <h1>This is the Review page</h1>
        </div>
    );
}
function Quiz() {
    return (
        <div className="quiz-div">
            <h1>This is the Quiz page</h1>
        </div>
    );
}

export default App;
