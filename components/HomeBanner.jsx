/* React Components */
import Image from 'next/image'

/* Styling elements */
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from '../components/Button';
import { Heading } from '../components/Heading';
import { fadeInUp, fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import home_banner from '../styles/Home.module.css'
import heading from '../styles/Heading.module.css'

const animate = {
    fadeInUpXShort: {
        animation: 'x .5s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
        display: 'inline-block'
    },
    fadeInUpShort: {
        animation: 'x .6s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
        display: 'inline-block'
    },
    fadeInUpMedium: {
        animation: 'x .7s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp'),
        display: 'inline-block'
    },
    fadeIn: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
}

/* Images */
import hero_banner from '../public/assets/banner-image.png'

/**
 * The modular react component.
 * 
 * @function HomeBanner
 * @returns design of hero banner for homepage.
 */
export const HomeBanner = () => {
    return ( 
        <div className={home_banner.banner_outer}>
            <Container>
                <StyleRoot>
                    <Row className='align-items-center'>
                        <Col lg={6} xxl={4}>
                            <div className={home_banner.banner_content}>
                                <Heading
                                    title="Develop your"
                                    subtitle="skills"
                                    description="Join millions of people around the world boosting their earning by accessing free courses and coaches, all whilst earning rewards along the way."
                                    customClass={`${heading.headingWhite} ${heading.greenHeading} mb-0`}
                                />
                                <div className={`d-none d-lg-block ${home_banner.banner_buttons}`}>
                                    <div style={animate.fadeInUpShort}>
                                        <Button
                                            title="Sign up for free"
                                            button_url="/"
                                            button_theme="dark"
                                        />
                                    </div>
                                    <div style={animate.fadeInUpMedium}>
                                        <Button
                                            title="Learn more"
                                            button_url="/"
                                        />
                                    </div>
                                </div>
                                <div className={`d-lg-none ${home_banner.banner_buttons}`}>
                                    <div style={animate.fadeInUpMedium}>
                                        <Button
                                            title="Free sign up"
                                            button_url="/"
                                            customClass="w-100"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} xxl={8} className={`${home_banner.image} reverse`}>
                            <div style={animate.fadeIn}>
                                <Image className={home_banner.banner_image} src={hero_banner} alt="Hero Image" width={715} height={702} />
                            </div>
                        </Col>
                    </Row>
                </StyleRoot>
            </Container>
		</div>
    )
}