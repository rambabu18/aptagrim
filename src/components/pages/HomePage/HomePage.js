import React from 'react'
import ContentSection from '../../pageContent/ContentSection'
import Products from '../../products/Products'
import { contactObject, homeObject } from './Data'

 function HomePage() {
    return (
        <>
           <ContentSection {...homeObject} />
           <ContentSection {...contactObject} />
           <Products/>
        </>
    )
}

export default HomePage
