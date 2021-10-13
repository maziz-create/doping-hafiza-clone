import React from 'react'

import Topbar from '../../components/Topbar'
import HomepageNavbar from '../../components/HomepageNavbar'
import HomepageCarousel from '../../components/HomepageCarousel'
import HomepageBackground from '../../components/HomepageBackground'

// Homepage Content
import ExamInformation from '../../components/ExamInformation'
import WhatsIn from '../../components/WhatsIn'

import Container from 'react-bootstrap/Container'

function Homepage() {
    return (
        <div style={{ overflow: 'hidden' }}>
            <HomepageBackground />
            <Topbar />
            <HomepageNavbar />
            <HomepageCarousel />
            {/* -- */}

            <Container style={{ position: 'relative' }}>
                <ExamInformation />
                <WhatsIn />
            </Container>
        </div>
    )
}

export default Homepage
