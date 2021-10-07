import React from 'react'

import Topbar from '../../components/Topbar'
import HomepageNavbar from '../../components/HomepageNavbar'
import HomepageCarousel from '../../components/HomepageCarousel'
import HomepageBackground from '../../components/HomepageBackground'

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
