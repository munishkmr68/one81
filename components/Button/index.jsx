/* React Components */
import Link from 'next/link'

/* Styling elements */
import button_style from './button.module.css'

/**
 * The modular react component.
 * 
 * @function Button
 * @returns Button call on entire website.
 */
export const Button = (props) => {
    return ( 
        <span className={`${button_style.button} ${typeof props.button_theme != typeof undefined ? props.button_theme == 'dark' ? button_style.dark : button_style.purple : ''}`}>
            <Link href={props.button_url}>{props.title}</Link>
        </span>
    )
}