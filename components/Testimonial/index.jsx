/* Styling elements */
import style from './style.module.css'
import Image from 'next/image'

/**
 * The modular react component.
 * 
 * @function TestimonialCard
 * @returns Renders single testimonail card.
 */
export const TestimonialCard = (props) => {
    return ( 
        <div className={`${style.card} ${props.customClass} `}>    
           <p>{props.auth_description}</p>
           <div className={`${style.client} `}>
               <Image src={props.client_image} alt={props.alt} width={56} height={56} />
               <h5>{props.name}</h5>
           </div>
        </div>
    )
}