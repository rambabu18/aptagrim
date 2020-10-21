import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../button/Button'
import '../pageContent/ContentSection.css'

 function ContentSection({
     lightBg,
     topLine,
     lightText,
     lightTextDesc,
     headLine,
     description,
     buttonLabel,
     img,
     alt,
     imgStart
 }) {
    return (
        <>
        <div className={lightBg ? 'home__cont-section' : 'home__cont-section darkBg'} >

          <div className="container" >
            <div className=" home__cont-row" 
             style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse': 'row'}}
             >
                <div className="col" >
                
                    <div className="home__cont-text-wrapper" >
                        <div className="top-line">{topLine} </div>
                         <h1 className={lightText ? 'heading': 'heading dark'} >{headLine}</h1>
                         <p className={lightTextDesc ? 'home__cont-subtitle' : 'home__cont-subtitle dark'} >{description}</p>
                        <Link to="/sign-up" >
                            <Button buttonSize='btn--wide' buttonColor='blue' >{buttonLabel} </Button>
                        </Link>
                    </div>

                </div>
                <div className='col'>
                    <div className='home__cont-img-wrapper' >
                        <img src={img} alt={alt} className='home__cont-img' />
                    
                    </div>

                </div>
            </div>

           </div>   
        </div>
            
        </>
    )
}
export default ContentSection