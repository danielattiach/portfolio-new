import React, { useState, useEffect } from 'react';
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import questions from './questions';
import TheoryQuestion from '../../components/TheoryQuestion/TheoryQuestion';
import './Theory.css';

const Theory = () => {
    const [question, setQuestion] = useState({ question: '', answers: [], extra_content: [] });
    const [theoryProgress, setTheoryProgress] = useState({ correct: 0, incorrect: 0 });
    const [viewedQuestions, setViewedQuestions] = useState({ viewed: [] });
    const [nextButtonEnabled, setNextButtonEnabled] = useState(false);

    useEffect(() => {
        const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        setQuestion(randomQuestion);
        setViewedQuestions({ viewed: [randomQuestion.question] });
    }, []);

    const handleCorrectAnswer = () => {
        setTheoryProgress({...theoryProgress, correct: theoryProgress.correct + 1});
    };

    const handleIncorrectAnswer = () => {
        setTheoryProgress({...theoryProgress, incorrect: theoryProgress.incorrect + 1});
    };

    const handleNextQuestion = () => {
        if (!nextButtonEnabled)
            return;
        let randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        while (viewedQuestions.viewed.includes(randomQuestion.question)) {
            randomQuestion = questions[Math.floor(Math.random() * questions.length)];
        }
        setQuestion(randomQuestion);
        setNextButtonEnabled(false);
    };

    const enableNextButton = () => {
        setNextButtonEnabled(true);
    };

    return (
        <div dir="rtl" className="theory-page">
            <div className="theory-progress">
                {theoryProgress.incorrect} - <span id="incorrect-answers"><FontAwesomeIcon icon={faTimesCircle}/></span>
                <span id="correct-answers"><FontAwesomeIcon icon={faCheckCircle}/></span> - {theoryProgress.correct}
            </div>
            <div className="theory-container">
                <TheoryQuestion question={question}
                                handleCorrectAnswer={handleCorrectAnswer}
                                handleIncorrectAnswer={handleIncorrectAnswer}
                                enableNextButton={enableNextButton}
                />
            </div>
            <div className="next-question">
                <button onClick={handleNextQuestion} disabled={nextButtonEnabled ? '' : 'disabled'}>שאלה הבאה</button>
            </div>
        </div>
    );
};

export default Theory;
