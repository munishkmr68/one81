import Image from 'next/image'
import style from './style.module.css'

/* Static Assets */
import ArrowWhite from '../../public/assets/arrowWhite.png'
import ArrowYellow from '../../public/assets/arrowYellow.png'

export const JourneyTab = (props) => {
    return ( 
        <div className={`${style.TabItem}`}>  
            <div className={`${style.TabItemInr}`}>
                <div className={`${style.TabItemInfo}`}>
                    <h6>{props.pricetext}</h6>
                    <h2>{props.Title}</h2> 
                    <p>{props.parah}</p>
                </div>
                <div className={`${style.previewBtn}`}>
                    <a href={props.url}>
                        <span>Preview</span>
                        <i className={`${style.arrwWht}`}>
                            <Image src={ArrowWhite} alt="" width={34} height={25} />
                        </i>
                        <i className={`${style.arrwYlw}`}>
                            <Image src={ArrowYellow} alt="" width={34} height={25} />
                        </i>
                    </a>
                </div>     
            </div> 
        </div>
    )
}