/* React Components */
import Link from 'next/link'

/* Styling elements */
import { Container, Row, Col } from 'react-bootstrap';
import style from './style.module.css'

/**
 * The modular react component.
 * 
 * @function Footer
 * @returns footer design. It call on every page.
 */

export const Footer = (props) => {
    return ( 
        <section className={style.footrBlock}>
            <div className={style.footrbg}>
                <Container>
                    <Row className='g-4'>
                    <Col md={3}>
                        <div className={style.ftrLogo}>
                            <div className={style.logo}>
                                <Link href={'/'} className={`${style.logo}`}>&nbsp;</Link>  
                            </div>          
                        </div>
                    </Col>
                    <Col md>
                        <div className={style.ftrHdng}>one81 community</div>
                        <div className={style.ftrLinks}>
                            <Link href="/">Reddit</Link>
                            <Link href="/">Telegram</Link>
                            <Link href="/">Twitter</Link>
                        </div>
                    </Col>
                    <Col md>
                        <div className={style.ftrHdng}>explore</div>
                        <Row className='g-4'>
                            <Col>
                                <div className={style.ftrLinks}>
                                    <Link href="/">Pricing</Link>
                                    <Link href="/">Rewards</Link>
                                    <Link href="/">Sign up</Link>
                                </div>
                            </Col>
                            <Col>
                                <div className={style.ftrLinks}>
                                    <Link href="/">courses</Link>
                                    <Link href="/">one81</Link>
                                    <Link href="/">API</Link>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md>
                        <div className={style.ftrHdng}>terms of service</div>
                        <div className={style.ftrLinks}>
                            <Link href="/">Terms & Conditions</Link>
                        </div>
                    </Col>
                    <Col md={1}>
                        <div className={style.ftrHdng}>contact</div>
                        <div className={style.ftrLinks}>
                            <Link href="/">Contact us</Link>
                        </div>
                    </Col>
                    </Row>
                    <div className={style.copyRightRow}>
                        <div className={style.copyRight}>© All rights reserved</div> 
                    </div>           
                </Container>
            </div>
        </section>
    )
}