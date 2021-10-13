import React from 'react'

import Topbar from '../../components/Topbar'
import HomepageNavbar from '../../components/HomepageNavbar'
import HomepageCarousel from '../../components/HomepageCarousel'
import HomepageBackground from '../../components/HomepageBackground'

// Homepage Content
import ExamInformation from '../../components/ExamInformation'
import WhatsIn from '../../components/WhatsIn'


function Homepage() {

    /*
        scroll 590'a geldiğinde navbarı ve topbarı biraz değişmiş haliyle
        fixed-top olarak kullanmayı amaçlıyoruz.
    */
    const [scrollY, setScrollY] = React.useState(0);
    React.useEffect(() => {
        window.onscroll = () => {
            setScrollY(window.scrollY)
        }
    }, []);

    return (
        <div style={{ overflow: 'hidden' }}>
            <HomepageBackground />
            <Topbar scrollY={scrollY} />
            <HomepageNavbar scrollY={scrollY} />
            <HomepageCarousel />
            {/* -- */}

            <ExamInformation />
            <WhatsIn />
        </div>
    )
}

export default Homepage
