import React from 'react'
import { Box, Chip } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => {
    return createStyles({
        educationSection: {
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
        }
    })
})

function Education (props) {
    const { position, isLoading, education } = props
    const classes = useStyles()

    return (
        <div className={classes.educationSection} >

            <div className={classes.section}>
                <Box
                    fontWeight='bold'
                    letterSpacing={1}
                    fontSize={24}>
                    {education.label}
                </Box>
                <div className={classes.chips}>
                    {
                        education.contents.map((content) => (
                            <Chip
                                key={content.title}
                                label={content.title}
                                variant='outlined' />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Education
