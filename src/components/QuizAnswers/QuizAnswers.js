import React from 'react';

const QuizAnswers = ({ option, id }) => {
    return (
        <div>
            <input type="radio" className="btn-check" name="vbtn-radio" id={`vbtn-radio${id}`} autoComplete="off" defaultChecked></input>
            <label className="btn btn-outline-light" htmlFor={`vbtn-radio${id}`}>{option}</label>
        </div>
    );
};

export default QuizAnswers;