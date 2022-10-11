import React, { useState } from 'react';
import QuizAnswers from '../QuizAnswers/QuizAnswers';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { ButtonToolbar, ToggleButtonGroup } from 'react-bootstrap';


const QuizQuestion = ({ question }) => {
    const [radioValue, setRadioValue] = useState('1');
    console.log(question);
    // console.log(question.options[0]);
    return (
        <div className='quiz-bg py-2 w-75 mx-auto mt-5 rounded text-white'>
            <h3 className='mb-0 ps-3 py-2 px-2 fs-5 text-start' dangerouslySetInnerHTML={{ __html: question.question }} />
            {/* {
                question.options.map((option, idx) =>
                    <QuizAnswers
                        key={idx}
                        option={option}
                        id={`${idx}-${question.id}`}
                    >

                    </QuizAnswers>)
            } */}
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
                                    variant={radioValue === option ? 'primary' : 'light'}
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