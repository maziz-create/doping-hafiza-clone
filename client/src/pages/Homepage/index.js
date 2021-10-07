import React from 'react'

import Topbar from '../../components/Topbar'
import HomepageNavbar from '../../pages/Homepage/HomepageNavbar'
import HomepageCarousel from '../../pages/Homepage/HomepageCarousel'
import HomepageBackground from '../../pages/Homepage/HomepageBackground'

function Homepage() {
    return (
        <div>
            <HomepageBackground />
            <Topbar />
            <HomepageNavbar />
            <HomepageCarousel />
        </div>
    )
}

export default Homepage
