import Image from 'next/image'
import { Button } from '../../../components/Button';
import style from './style.module.css'

export const PricePaid = (props) => {
    return ( 
        <div className={`${style.paidItem}`}>   
            <h5>{props.paidHdng}</h5>
            <h6>{props.typeHdng}</h6> 
            <div className={`${style.paidPriceCol} ${props.customClass} `}>
            <h3>{props.mainPrice}<small>{props.subPriceSmall}</small></h3>
            <p>{props.perMonth}</p>
            </div>
            <div className={`${style.buildAnualy}`} >
               <p>{props.buildAnualTitle}</p> 
               <h4>{props.buildAnualPrice}<sup>{props.buildPriceSup}</sup>
               <sub>{props.buildPriceSub}</sub></h4>
            </div>
            <div className={`${style.PaidPriceContent} `}>
               <p>{props.paidParah}</p>
               <p><span>{props.paidParahReward}</span></p>
            </div> 
            <Button
                title="Sign up"
                button_url="/"
                button_theme="purple"
            /> 
            <div className={`${style.cancelTitle} `}>
                {props.cancleAnyTime}
            </div>
        </div>
    )
}