import Image from 'next/image'
import style from './style.module.css'
import { Button } from '../../../components/Button';
export const PriceFree = (props) => {
    return ( 
        <div className={`${style.freeItem}`}>   
            <h5>{props.freeHdng}</h5>
            <div className={`${style.PriceCol} ${props.customClass} `}>
            <h2>{props.freTitle}</h2>
            <p>{props.perMonth}</p>
            </div>
            <div className={`${style.freePriceContent} `}>
               <p>{props.freeParah}</p>
            </div> 
             <Button
                title="Sign up"
                button_url="/"
                button_theme="white"
            /> 
            <div className={`${style.cancelTitle} `}>
                {props.cancleAnyTime}
            </div>
        </div>
    )
}