import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestion from '../QuizQuestion/QuizQuestion';
import './Quiz.css'

const Quiz = () => {
    const quiz_data = useLoaderData();
    const { data } = quiz_data;
    const { name, questions } = data;
    return (
        <div className='container-fluid'>
            <div className='quiz-bg py-2 w-75 mx-auto mt-5 rounded text-white'>
                <h2 className='mb-0'>Quiz Page for: <span className='fw-bold'>{name}</span></h2>
            </div>
            {
                questions.map(question => <QuizQuestion
                    key={question.id}
                    question={question}
                ></QuizQuestion>)
            }
        </div>
    );
};

export default Quiz;