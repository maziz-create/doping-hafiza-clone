import React from 'react'

import Container from 'react-bootstrap/Container'

import TrainingsButtons from './TrainingsButtons'
import TrainingCards from './TrainingCards'

const PreferredTrainings = () => {
    return (
        <Container>
            <TrainingsButtons />
            <TrainingCards />
        </Container>
    )
}

export default PreferredTrainings
