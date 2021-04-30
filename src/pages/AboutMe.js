import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutMe = () => {
  return (
    <Container>
      <Row>
        <Col sm="2"></Col>
        <Col sm="8" className="">
          <h1>About Page</h1>
          <p>
            Driven Full Stack Developer with a background in IT Business
            Analyst, customer service and a Full-Stack Certificate from the
            University of Rice - Houston. An articulate individual who enjoys
            connecting with co-workers and is passionate about building
            applications that assist everyday people to make their lives easier.
            With the background of working as an IT Analyst, the experiences
            will be a great asset to being a software developer. Looking to use
            the knowledge, communication, and technical skills to add value to
            an organization while focusing on continuous learning and engaging
            in the community to give back in the field of web development.
          </p>
          <p>A copy of my resume on a PDF can be downloaded below!</p>
          <a
            href="https://drive.google.com/file/d/1ibrJqSWSje9SrGEKczY8QqMJHOk152R4/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            My Downloadable Resume
          </a>
        </Col>
        <Col sm="2"></Col>
      </Row>
    </Container>
  );
};

export default AboutMe;
