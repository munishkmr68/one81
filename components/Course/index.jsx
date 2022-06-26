/* React Components */
import Image from 'next/image'

/* Styling elements */
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';

import style from './style.module.css'
import heading from '../../styles/Heading.module.css'

/* Static Assets */
import courseImg from '../../public/assets/courseImg.png'


/**
 * The modular react component.
 * 
 * @function Course
 * @returns design of call to action for homepage.
 */
 
export const Course = (props) => {
    return ( 
        <>
        <div className={`${style.courseBlock} pd-180`}>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className={`${style.courseImg}`}>
                            <Image src={courseImg} alt="Start your first course free" width={1370} height={605} />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className={`${style.courseDscrptn}`}>
                            <Heading
                                title="Start your first course"
                                subtitle="free"
                                description="Find out why 94% of business leaders expect the people they work with to continue learning and developing"
                                customClass={`${heading.headingWhite} text-right mb-4`}
                            />
                            <div className={`${style.courseBtns}`}>
                                <Button
                                    title="Sign up for free"
                                    button_url="/"
                                    button_theme="purple"
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </>
    )
}