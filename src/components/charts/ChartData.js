import React from 'react'
import { Link } from 'react-router-dom'
import './chartcard.css'

export default function ChartData(props) {
    return (
       
            <div className='chartdata_container' >
           <li className= 'cards_item' >
            <Link className='cards_item_link' to={props.path} >
                <figure className='card_item_pic-wrap' data-category={props.label} >
                    <img src={props.src}
                     alt='Chart' 
                    className='cards_item_img' />
                </figure>
                <div className='cards_item_info' >
                <h5 className='cards_items_text' >{props.text}</h5>
                </div>
            </Link>
            </li>           
        </div>
          
    )
}
