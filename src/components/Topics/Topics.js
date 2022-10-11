import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicCard from '../TopicCard/TopicCard';
import Row from 'react-bootstrap/Row';

const Topics = () => {
    const fetched_data = useLoaderData();
    const { data } = fetched_data;
    // console.log(data);
    return (
        <div className='mb-5'>
            <h2 className='fw-bold mt-5 mb-3'>Please Select a Topic to Start the Quiz</h2>
            <Row xs={1} md={4} className="g-4 container-fluid">
                {
                    data.map(topic => <TopicCard
                        key={topic.id}
                        topic={topic}
                    ></TopicCard>)
                }
            </Row>
        </div>
    );
};

export default Topics;