import React, { useState, useEffect } from 'react';
import Parser from 'html-react-parser';
import { faCircle, faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './TheoryQuestion.css';

const shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};

const TheoryQuestion = ({ question, handleCorrectAnswer, handleIncorrectAnswer, enableNextButton }) => {
    const [state, setState] = useState({ answers: [] });

    const determineCol = (arr) => {
        return Math.floor(12 / arr.length);
    };

    useEffect(() => {
        setState({ answers: shuffle(question.answers).map(answer => ({ ...answer, answered: false })) });
    }, [question.answers]);

    const handleAnswerChoice = answer => {
        let answered = state.answers.filter(stateAnswer => stateAnswer.answered);
        if (answered.length === 1 && answered[0].correct)
            return;
        const answers = state.answers.map(stateAnswer => {
            if (stateAnswer.answer === answer.answer)
                return {...stateAnswer, answered: true};
            return stateAnswer;
        });
        answered = answers.filter(stateAnswer => stateAnswer.answered);
        const correctAnswer = answers.filter(stateAnswer => stateAnswer.correct && stateAnswer.answered);
        if (correctAnswer.length)
            enableNextButton();
        if (answered.length === 1 && answered[0].correct) {
            handleCorrectAnswer();
        }
        else if (answered.length === 1 && !answered[0].correct)
            handleIncorrectAnswer();
        setState({ answers });
    };

    return (
        <div>
            <h5>{question.question}</h5>
            {question.extra_content.length ? (
                <div className="extra-content container row">
                    {question.extra_content.map((img, index) =>
                        <div className={`col-sm-${determineCol(question.extra_content)}`} key={index}>
                            {Parser(img, {
                                replace: node => {
                                    return <img src={node.attribs.src} alt="img" className="img-fluid"/>
                                }
                            })}
                        </div>
                    )}
                </div>
            ) : ''}
            <ul id="question-list">
                {state.answers.map((answer, index) =>
                    <li onClick={() => handleAnswerChoice(answer)} key={index}
                        className={answer.answered ? (answer.correct ? 'correct' : 'incorrect'): 'not-answered'}
                    >
                        <FontAwesomeIcon icon={answer.answered ? (answer.correct ? faCheckCircle : faTimesCircle): faCircle}/>
                        {answer.answer}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default TheoryQuestion;
