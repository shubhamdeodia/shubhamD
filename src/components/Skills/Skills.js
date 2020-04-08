import React from 'react'
import { Slider } from '@material-ui/core'
import { Box, Chip } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
    return createStyles({
        skillsSection: {
            display: 'flex',
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        },
        section: {
            width: 250,
            textAlign: 'left',
            marginTop: 30
        },
        chips: {
            marginTop: 10,
            width: 290
        },
        slider: {
            marginTop: 10
        }
    })
})

function Skills (props) {
    const { position, isLoading, skills } = props
    const classes = useStyles()

    return (
        <div className={classes.skillsSection} >
            {
                skills.map((skill) => (
                    <div key={skill.id} className={classes.section}>
                        <Box
                            fontWeight='bold'
                            letterSpacing={1}
                            fontSize={24}>
                            {skill.label}
                        </Box>
                        <div className={classes.chips}>
                            {
                                skill.contents.map((content) => (
                                    <Chip
                                        key={content.name}
                                        label={content.name}
                                        variant='outlined' />
                                ))
                            }
                        </div>
                        <div className={classes.slider}>
                            <Slider
                                value={skill.rating}
                                min={0}
                                max={10}
                                color='secondary'
                                valueLabelDisplay='auto'
                                aria-labelledby='non-linear-slider' />
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Skills
