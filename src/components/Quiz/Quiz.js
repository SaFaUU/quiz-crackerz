import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';
import './Quiz.css'

const Quiz = () => {
    const quiz_data = useLoaderData();
    const { data } = quiz_data;
    const { name, questions } = data;
    const [totalCorrect, setTotalCorrect] = useState(0);
    return (
        <div className='container-fluid'>
            <div className='quiz-bg py-2 w-75 mx-auto mt-5 rounded text-white'>
                <h2 className='mb-0'>Quiz Page for: <span className='fw-bold'>{name}</span></h2>
                <p className='mt-2 mb-0'>Correct Answer: {totalCorrect}</p>
            </div>
            {
                questions.map(question => <QuizQuestion
                    key={question.id}
                    question={question}
                    totalCorrect={totalCorrect}
                    setTotalCorrect={setTotalCorrect}
                ></QuizQuestion>)
            }
        </div>
    );
};

export default Quiz;