import React from 'react'

import Topbar from '../../components/Topbar'
import HomepageNavbar from '../../components/HomepageNavbar'
import HomepageCarousel from '../../components/HomepageCarousel'
import HomepageBackground from '../../components/HomepageBackground'

// Homepage Content
import ExamInformation from '../../components/ExamInformation'

import Container from 'react-bootstrap/Container'

function Homepage() {
    return (
        <div>
            <HomepageBackground />
            <Topbar />
            <HomepageNavbar />
            <HomepageCarousel />
            {/* -- */}

            <Container>
                <ExamInformation />
            </Container>
        </div>
    )
}

export default Homepage
