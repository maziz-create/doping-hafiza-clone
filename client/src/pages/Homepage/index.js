import React from 'react'

import Topbar from '../../components/Topbar'
import HomepageNavbar from '../../components/HomepageNavbar'
import HomepageCarousel from '../../components/HomepageCarousel'
import HomepageBackground from '../../components/HomepageBackground'

// Homepage Content
import ExamInformation from '../../components/ExamInformation'
import WhatsIn from '../../components/WhatsIn'


function Homepage() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <HomepageBackground />
            <Topbar />
            <HomepageNavbar />
            <HomepageCarousel />
            {/* -- */}

            <ExamInformation />
            <WhatsIn />
        </div>
    )
}

export default Homepage
