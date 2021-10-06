import React from 'react'

import HomepageNavbar from '../../pages/Homepage/HomepageNavbar'
import HomepageCarousel from '../../pages/Homepage/HomepageCarousel'
import HomepageBackground from '../../pages/Homepage/HomepageBackground'

function Homepage() {
    return (
        <div>
            <HomepageBackground />
            <HomepageNavbar />
            <HomepageCarousel />
        </div>
    )
}

export default Homepage
