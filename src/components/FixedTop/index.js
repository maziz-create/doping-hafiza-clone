import React from 'react'

import FixedNavbar from './FixedNavbar'

function FixedTop({ scrollY }) {

    return (
        <div>
            <FixedNavbar scrollY={scrollY} />
            
        </div>
    )
}

export default FixedTop
