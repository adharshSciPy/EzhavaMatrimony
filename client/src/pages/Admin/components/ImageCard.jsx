import React from 'react';
import { Carousel } from 'antd';
import "./ImageCard.css"

const ImageCard = () => (
    <>
        <Carousel arrows infinite={false}>
            <div className='cardimage'>
                <img src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=2048x2048&w=is&k=20&c=8QovDK9XochFpaIC-N3pn5EEaRSVuE1SKpQDVUxLSUk="></img>
            </div>
            <div className='cardimage'>
                <img src="https://media.istockphoto.com/id/1407759041/photo/confident-happy-beautiful-hispanic-student-girl-indoor-head-shot-portrait.jpg?s=2048x2048&w=is&k=20&c=eskue6p9gwUVS2t0Kpuw6rd7Sgu5nKgxsMD6Aqaba8I="></img>
            </div>
            <div className='cardimage'>
                <img src="https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=2048x2048&w=is&k=20&c=zeshqUp2X2mSAlURtrcyI-FZumcAiv-1corvRhT-qFo="></img>
            </div>
        </Carousel>
    </>
);
export default ImageCard;