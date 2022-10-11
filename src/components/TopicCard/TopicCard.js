import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './TopicCard.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const TopicCard = ({ topic }) => {
    return (
        // <div>
        //     <img src={topic.logo} alt=""></img>
        // </div>
        <Col>
            <Card className='shadow-sm'>
                <Card.Img className='bg-dark' variant="top" src={topic.logo} />
                <Card.Body className=' bg-light'>
                    <Card.Title className='fw-bold'>{topic.name}</Card.Title>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Card.Text className='mb-0'>
                            <span className='fw-bold'>Total Quiz:</span>   <small>{topic.total}</small>
                        </Card.Text>
                        <Link to={`quiz/${topic.id}`}>
                            <button className='quiz-button ms-4 align-items-center'>Start Quiz
                                <FontAwesomeIcon className='ms-3' icon={faArrowRight}></FontAwesomeIcon></button>

                        </Link>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default TopicCard;