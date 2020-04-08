import React from 'react'
import ExperienceDuration from './ExperienceDuration'
import ExperienceDescription from './ExperienceDescription'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
    return {
        experienceSection: {
            display: 'flex',
            flexBasis: '100%',
            alignItems: 'flex-start',
            justifyContent: 'center',
            background: 'transparent',
            marginTop: '40px'
        }
    }
})

function Experience (props) {
    const { positions, isLoading } = props
    const classes = useStyles(props)

    const experience = positions.contents.map((position) => {
        return (
            <div
                key={position.id}
                className={classes.experienceSection}>
                <ExperienceDuration isLoading={isLoading} position={position} />
                <ExperienceDescription isLoading={isLoading} position={position} />
            </div>
        )
    })

    return experience
}

export default Experience
