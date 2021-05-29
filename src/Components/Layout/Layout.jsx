import React from 'react'

import Footer from "../../Components/Layout/Footer/Footer"



const Layout = ({children}) => {
    return (
        <div>
            
            <main>{children}</main>
            <Footer/>            
        </div>
    )
}

export default Layout
