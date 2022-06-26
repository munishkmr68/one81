/* React Components */
import Image from 'next/image'

/* Styling elements */
import { Container, Row, Col } from 'react-bootstrap';
import style from './style.module.css'

/* Static Assets */
import StartupIcon from '../../public/assets/startupIcon.png'
import StartupWhiteIcon from '../../public/assets/startupWhiteIcon.png'
import EarnIcon from '../../public/assets/earnIcon.png'
import EarnWhiteIcon from '../../public/assets/earnWhiteIcon.png'
import WorksIcon from '../../public/assets/worksIcon.png'
import WorksWhiteIcon from '../../public/assets/worksWhiteIcon.png'


/**
 * The modular react component.
 * 
 * @function BottomLinks
 * @returns design of Bottom Links for homepage.
 */
export const BottomLinks = (props) => {
    return ( 
        <>
        <div className={`${style.bottomLinksDiv}`}>
            <Container>
                <div className={`${style.bottomLinks}`}>
                    <ul>
                        <li>
                            <a href="javascript:void(0);">
                                <i className={`${style.colorIcon}`}><Image src={StartupIcon} alt="" width={32} height={32} /></i>
                                <i className={`${style.whiteIcon}`}><Image src={StartupWhiteIcon} alt="" width={32} height={32} /></i>
                                <span>Quick startup</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <i className={`${style.colorIcon}`}><Image src={EarnIcon} alt="" width={32} height={32} /></i>
                                <i className={`${style.whiteIcon}`}><Image src={EarnWhiteIcon} alt="" width={32} height={32} /></i>
                                <span>Earn while you learn</span>
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0);">
                                <i className={`${style.colorIcon}`}><Image src={WorksIcon} alt="" width={32} height={32} /></i>
                                <i className={`${style.whiteIcon}`}><Image src={WorksWhiteIcon} alt="" width={32} height={32} /></i>
                                <span>How it works</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
        </>
    )
}