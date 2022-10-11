import React, { useEffect, useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { ButtonToolbar, ToggleButtonGroup } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'


const QuizQuestion = ({ question, totalCorrect, setTotalCorrect }) => {
    const [radioValue, setRadioValue] = useState('1');

    const correct = () => toast.success('Corrent Answer!')
    const wrong = () => toast.error('Wrong Answer!')
    const showAnswer = () => toast(question.correctAnswer, {
        icon: '👏',
    });

    let correctAnswer;
    const checkAnswer = (chosen_option) => {
        if (question.correctAnswer === chosen_option) {
            correct();
        }
        else {
            wrong();
        }
    }
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

            <div className='d-flex justify-content-between me-4 align-items-center'>
                <h3 className='mb-0 ps-3 py-2 px-2 fs-5 text-start' dangerouslySetInnerHTML={{ __html: question.question }} />
                <FontAwesomeIcon className='text-black fs-3' icon={faEye} onClick={showAnswer}></FontAwesomeIcon>
            </div>
            <ToggleButtonGroup name={question.id} className="d-flex flex-wrap justify-content-around mt-2">
                {
                    question.options.map((option, idx) => (
                        <div
                            key={idx}
                            className="row px-2">
                            <div className="col me-2">
                                <ToggleButton
                                    id={`${idx}-${question.id}`}
                                    type="radio"
                                    name="radio"
                                    value={option}
                                    checked={radioValue === option}
                                    variant={radioValue === option ? correctAnswer : 'light'}
                                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                                    onClick={() => checkAnswer(option)}
                                    className="mt-4 w-100"
                                >
                                    {option}
                                    {/* {console.log(radio.value)} */}
                                </ToggleButton>
                                <Toaster />
                            </div>
                        </div>
                    ))
                }
            </ToggleButtonGroup>
        </div>
    );
};

export default QuizQuestion;