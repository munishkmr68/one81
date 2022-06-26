/* React Components */
import Image from 'next/image'

/* Styling elements */
import { fadeInUp, fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

import style from './style.module.css'

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

/**
 * The modular react component.
 * 
 * @function Heading
 * @returns Renders heading with sub heading.
 */
export const Heading = (props) => {
    return ( 
        <div className={`${style.heading} ${props.customClass} `}>
            <StyleRoot>
                <h4 style={animate.fadeInUpXShort}>{props.title} <span>{props.subtitle}</span></h4>
                <p style={animate.fadeInUpShort}>{props.description}</p>
           </StyleRoot>
        </div>
    )
}