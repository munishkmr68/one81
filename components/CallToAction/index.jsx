/* React Components */
import Image from 'next/image'

/* Styling elements */
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';

import style from './style.module.css'
import heading from '../../styles/Heading.module.css'

/**
 * The modular react component.
 * 
 * @function CallToAction
 * @returns design of call to action for homepage.
 */
export const CallToAction = (props) => {
    return ( 
        <>
        <div className={`${style.callActionBlock} pd-180`}>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <div className={`${style.callActionHdng}`}>
                            <Heading
                                title="Explore the one81 open source protocol"
                                customClass={`${heading.headingWhite} mb-0`}
                            />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className={`${style.callActionDscrptn}`}>
                            <Heading
                                description="Get to know the open source one81 technology and why organisations around the world are using it. Trusted by some of the world’s most well known brands."
                                customClass={`${heading.headingWhite} mb-0`}
                            />
                            <div className={`${style.callActionBtns}`}>
                                <Button
                                    title="Sign up"
                                    button_url="/"
                                    button_theme="purple"
                                />
                                <Button
                                    title="Learn more"
                                    button_url="/"
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