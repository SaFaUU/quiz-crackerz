import React, { useEffect, useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { ButtonToolbar, ToggleButtonGroup } from 'react-bootstrap';


const QuizQuestion = ({ question, totalCorrect, setTotalCorrect }) => {
    const [radioValue, setRadioValue] = useState('1');


    let correctAnswer;

    useEffect(() => {
        if (radioValue === question.correctAnswer) {
            setTotalCorrect(totalCorrect + 1);
        }
    }, [radioValue]);

    if (radioValue === question.correctAnswer) {
        correctAnswer = 'success';

    }
    else {
        correctAnswer = 'danger';
    }
    // console.log(question.options[0]);
    return (
        <div className='py-4 w-75 mx-auto mt-5 rounded text-black border shadow-sm'>
            <h3 className='mb-0 ps-3 py-2 px-2 fs-5 text-start' dangerouslySetInnerHTML={{ __html: question.question }} />
            <ToggleButtonGroup name={question.id}>
                {
                    question.options.map((option, idx) => (
                        <div className="row px-2">
                            <div className="col me-2">
                                <ToggleButton
                                    key={idx}
                                    id={`${idx}-${question.id}`}
                                    type="radio"
                                    name="radio"
                                    value={option}
                                    checked={radioValue === option}
                                    variant={radioValue === option ? correctAnswer : 'light'}
                                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                                // className='text-black bg-light me-2'
                                >
                                    {option}
                                    {/* {console.log(radio.value)} */}
                                </ToggleButton>
                            </div>
                        </div>
                    ))
                }
            </ToggleButtonGroup>
        </div>
    );
};

export default QuizQuestion;